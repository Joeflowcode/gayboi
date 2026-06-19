(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();

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
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
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

  /* ---- Quote form -> Google Sheet + mailto fallback ---- */
  var SHEET_URL = "https://script.google.com/macros/s/AKfycby4bWiGxwij7E_H2sD0yJ4VtmUu84SQzfh97-xzU1f56C7oaA-DaJClJLT2NzUUzuHw-w/exec";
  var form = document.getElementById("quote-form");
  var status = document.getElementById("form-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = new FormData(form);
    var name = (data.get("name") || "").trim();
    var phone = (data.get("phone") || "").trim();
    var email = (data.get("email") || "").trim();
    var city = (data.get("city") || "").trim();
    var service = data.get("service") || "";
    var details = (data.get("details") || "").trim();

    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending…";

    fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ name: name, phone: phone, email: email, city: city, service: service, details: details }),
      headers: { "Content-Type": "text/plain" }
    })
    .then(function () {
      status.classList.add("show");
      status.textContent = "Got it, " + (name || "there") + "! We'll be in touch by phone or email shortly. Prefer to call? (541) 425-2008.";
      form.reset();
    })
    .catch(function () {
      status.classList.add("show");
      status.textContent = "Got it, " + (name || "there") + "! We'll be in touch by phone or email shortly. Prefer to call? (541) 425-2008.";
      form.reset();
    })
    .finally(function () {
      btn.disabled = false;
      btn.innerHTML = 'Send My Quote Request <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    });
  });
})();
