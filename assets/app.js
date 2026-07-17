(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Header blur on scroll ---- */
  var header = document.getElementById("site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById("nav-toggle");
  var mnav = document.getElementById("mobile-nav");
  function closeNav() { mnav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", function () {
    var open = mnav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mnav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Count-up stats + pledge ring ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var isFloat = target % 1 !== 0;
    if (reduceMotion) { el.textContent = (isFloat ? target.toFixed(1) : target) + suffix; return; }
    var start = performance.now(), dur = 1400;
    el.textContent = "0";
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (isFloat ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll("[data-count]");
  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCount);
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---- Pledge ring fill (70%) ---- */
  var ring = document.getElementById("pledge-ring");
  if (ring) {
    var circ = 402; // 2πr, r=64
    var pct = 0.70;
    if (reduceMotion) {
      ring.style.strokeDashoffset = String(circ * (1 - pct));
    } else {
      var rio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            ring.style.transition = "stroke-dashoffset 1.6s cubic-bezier(.22,.61,.36,1)";
            requestAnimationFrame(function () { ring.style.strokeDashoffset = String(circ * (1 - pct)); });
            rio.unobserve(e.target);
          }
        });
      }, { threshold: 0.6 });
      rio.observe(ring);
    }
  }

  /* ---- Quote form -> Netlify Forms ---- */
  var form = document.getElementById("quote-form");
  var status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var data = new FormData(form);
    var name = (data.get("name") || "").trim();
    var button = form.querySelector('button[type="submit"]');

    data.set("form-name", form.getAttribute("name"));
    data.set("source-page", window.location.href);
    status.className = "form-status show is-pending";
    status.textContent = "Sending your request…";
    button.disabled = true;
    button.setAttribute("aria-busy", "true");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Form submission failed");
        status.className = "form-status show is-success";
        status.innerHTML = "Thanks, " + (name || "there") + "! Your quote request was sent. We’ll contact you soon. Need help now? <a href=\"tel:+15414252008\">Call (541) 425-2008</a>.";
        form.reset();
        if (window.gtag) window.gtag("event", "generate_lead", { method: "quote_form" });
      })
      .catch(function () {
        status.className = "form-status show is-error";
        status.innerHTML = "We couldn’t send the form. Please <a href=\"tel:+15414252008\">call</a> or <a href=\"sms:+15414252008\">text (541) 425-2008</a> and we’ll help right away.";
      })
      .finally(function () {
        button.disabled = false;
        button.removeAttribute("aria-busy");
      });
  });
})();
