/* ============================================================
   Northwest Junk Pros — Local SEO page generator
   Generates:
     locations/index.html          (service-area hub)
     locations/<slug>/index.html    (one unique page per city)
     sitemap.xml, robots.txt
   Run:  node scripts/generate-locations.js
   ============================================================ */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BASE = "https://northwestjunkpros.com";
const PHONE_DISP = "(541) 425-2008";
const PHONE_TEL = "+15414252008";
const EMAIL = "info@northwestjunkpros.com";

/* ---------- City data ---------- */
const REGIONS = {
  desert: { label: "High Desert", full: "Central Oregon" },
  valley: { label: "Willamette Valley", full: "McKenzie River Corridor" },
};

const CITIES = [
  { slug: "bend", name: "Bend", region: "desert", county: "Deschutes County", geo: [44.0582, -121.3153],
    intro: "From the Old Mill District to NorthWest Crossing, Bend keeps us busy — and we love it. Northwest Junk Pros is your local crew for fast, eco-friendly junk removal across Deschutes County, whether you're clearing a garage on Awbrey Butte or a whole rental near the river. Same-day pickups are often available, and we keep about 70% of what we haul out of the landfill.",
    tags: ["Old Mill District", "NorthWest Crossing", "Awbrey Butte", "Old Bend", "Larkspur", "Deschutes River Woods"],
    nearby: ["redmond", "sisters", "sunriver"] },

  { slug: "redmond", name: "Redmond", region: "desert", county: "Deschutes County", geo: [44.2726, -121.1739],
    intro: "Redmond is growing fast, and all that growth leaves things behind — old furniture, renovation debris, garage clutter. Northwest Junk Pros hauls it away on your schedule, from Dry Canyon to the neighborhoods near Roberts Field. Upfront pricing, friendly crews, and responsible recycling, every single time.",
    tags: ["Dry Canyon", "Eastside", "SW Redmond", "Roberts Field area", "Canal Row"],
    nearby: ["bend", "sisters", "la-pine"] },

  { slug: "sisters", name: "Sisters", region: "desert", county: "Deschutes County", geo: [44.2909, -121.5492],
    intro: "In Sisters, we help homeowners and vacation-rental owners alike clear out the clutter without disturbing that quiet, Western charm. Northwest Junk Pros covers the whole area at the gateway to the Cascade Lakes — from Tollgate to Black Butte Ranch — with careful, eco-minded hauling and honest, upfront quotes.",
    tags: ["Tollgate", "Black Butte Ranch", "Crossroads", "Downtown Sisters", "Camp Sherman"],
    nearby: ["bend", "redmond", "sunriver"] },

  { slug: "sunriver", name: "Sunriver", region: "desert", county: "Deschutes County", geo: [43.8735, -121.4385],
    intro: "Sunriver's resort homes and rentals see a lot of turnover, and we make cleanouts effortless. Northwest Junk Pros removes old furniture, appliances, and accumulated junk from properties across the community south of Bend, with same-day options for busy owners and property managers.",
    tags: ["Sunriver Resort", "Caldera Springs", "Crosswater", "Three Rivers"],
    nearby: ["bend", "la-pine", "redmond"] },

  { slug: "la-pine", name: "La Pine", region: "desert", county: "Deschutes County", geo: [43.6707, -121.5042],
    intro: "Out in La Pine, space is plenty but hauling is a hassle — that's where we come in. Northwest Junk Pros serves the high-desert gateway to the Newberry Volcanic Monument, clearing everything from shop cleanouts to yard debris, and recycling or donating whatever we possibly can.",
    tags: ["Downtown La Pine", "Wickiup Junction", "Newberry Estates", "Finley Butte"],
    nearby: ["sunriver", "bend", "gilchrist"] },

  { slug: "gilchrist", name: "Gilchrist", region: "desert", county: "Klamath County",
    intro: "The historic mill town of Gilchrist may be small, but no job is too far for us. Northwest Junk Pros brings the same fast, upfront junk removal to Gilchrist and the Highway 97 corridor that our Central Oregon neighbors count on — with eco-friendly disposal at the heart of everything we do.",
    tags: ["Gilchrist", "Crescent Lake Jct.", "Highway 97 corridor"],
    nearby: ["crescent", "la-pine", "sunriver"] },

  { slug: "crescent", name: "Crescent", region: "desert", county: "Klamath County",
    intro: "Near the shores of Crescent and Odell Lakes, we help cabin owners and residents clear out the old to make room for the new. Northwest Junk Pros handles junk removal across the Crescent area and the Cascade Lakes gateway, with friendly service and eco-friendly disposal you can feel good about.",
    tags: ["Crescent", "Crescent Lake", "Odell Lake", "Diamond Peak area"],
    nearby: ["gilchrist", "la-pine", "sunriver"] },

  { slug: "eugene", name: "Eugene", region: "valley", county: "Lane County", geo: [44.0521, -123.0868],
    intro: "From the Whiteaker to south Eugene and the university area, Eugene is one of our busiest service areas. Northwest Junk Pros clears apartments, estates, offices, and garages across Lane County — donating usable goods to local charities and recycling the rest, so about 70% never sees a landfill.",
    tags: ["Whiteaker", "South Eugene", "Bethel", "Santa Clara", "Churchill", "River Road"],
    nearby: ["springfield", "walterville", "vida"] },

  { slug: "springfield", name: "Springfield", region: "valley", county: "Lane County", geo: [44.0462, -123.0220],
    intro: "Northwest Junk Pros is proud to serve Springfield, from Thurston to the Gateway district and historic Main Street. Whether it's a single appliance or a full property cleanout, our local crew shows up on time, quotes you upfront, and hauls it all away — often the very same day.",
    tags: ["Thurston", "Gateway", "Mohawk", "Downtown / Main St.", "Glenwood"],
    nearby: ["eugene", "walterville", "vida"] },

  { slug: "walterville", name: "Walterville", region: "valley", county: "Lane County",
    intro: "Along the McKenzie River just east of Springfield, Walterville residents trust Northwest Junk Pros for honest, eco-friendly hauling. We clear barns, sheds, yards, and homes throughout the corridor, recycling and donating as much as we possibly can on every job.",
    tags: ["Walterville", "Cedar Flat", "Deerhorn", "McKenzie corridor"],
    nearby: ["springfield", "vida", "eugene"] },

  { slug: "vida", name: "Vida", region: "valley", county: "Lane County",
    intro: "Tucked along the McKenzie near the Goodpasture Covered Bridge, Vida is exactly the kind of community we're built to serve. Northwest Junk Pros travels the river corridor for cleanouts big and small, with the same upfront pricing and friendly service our neighbors rely on.",
    tags: ["Vida", "Goodpasture", "Leaburg", "Nimrod"],
    nearby: ["walterville", "blue-river", "mckenzie-bridge"] },

  { slug: "blue-river", name: "Blue River", region: "valley", county: "Lane County",
    intro: "Blue River has shown incredible resilience rebuilding along the McKenzie, and we're honored to help. Northwest Junk Pros assists with debris removal, cleanouts, and hauling throughout the area — responsibly recycling and donating wherever possible as the community moves forward.",
    tags: ["Blue River", "Rainbow", "Finn Rock", "Holiday Farm area"],
    nearby: ["vida", "mckenzie-bridge", "walterville"] },

  { slug: "mckenzie-bridge", name: "McKenzie Bridge", region: "valley", county: "Lane County",
    intro: "At the foot of the Cascades along Highway 126, McKenzie Bridge is the last stop on our McKenzie River route — and we're glad to make the drive. Northwest Junk Pros provides cabin cleanouts, appliance removal, and debris hauling for the upper McKenzie community, with eco-friendly disposal every time.",
    tags: ["McKenzie Bridge", "Belknap Springs", "Rainbow", "Upper McKenzie"],
    nearby: ["blue-river", "vida", "walterville"] },
];

const BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

/* ---------- Shared SVG icons ---------- */
const I = {
  phone: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 5.5C3 4.7 3.7 4 4.5 4H7l1.5 4.5L6.7 10a12 12 0 0 0 5.3 5.3l1.5-1.8L18 15v2.5c0 .8-.7 1.5-1.5 1.5A14.5 14.5 0 0 1 3 5.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.3-7-9.5A7 7 0 0 1 19 11.5C19 16.7 12 21 12 21z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="11" r="2.4" stroke="currentColor" stroke-width="1.8"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3c2.5 2.5 4 5 4 7.5a4 4 0 0 1-8 0C8 8 9.5 5.5 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 10l7-7 7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"/></svg>`,
  fb: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="7" r="1.1" fill="currentColor"/></svg>`,
  chevR: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const LOGO_MARK = `<span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 15l3-7 3 5 2.2-3.3L19 15" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="7" r="1.8" fill="#FBBF24"/></svg></span>`;

const FAVICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230A0F0D'/%3E%3Cpath d='M8 20.5l4-9 4 6 3-4.5 5 7.5z' fill='none' stroke='%2334D399' stroke-width='2.2' stroke-linejoin='round' stroke-linecap='round'/%3E%3Ccircle cx='22' cy='10' r='2.4' fill='%23FBBF24'/%3E%3C/svg%3E`;

/* ---------- Shared chrome ---------- */
function head({ title, desc, canonical, prefix, jsonld }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="theme-color" content="#0A0F0D" />
  <meta name="google-site-verification" content="3UowzFhVTaZqVMJLZvzt4h4WWNPFrpNluEnkFKHqJIU" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${canonical}" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${prefix}assets/styles.css" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body>
  <a href="#main" class="btn" style="position:absolute;left:-999px;top:0;z-index:100;">Skip to content</a>`;
}

function header(prefix) {
  return `
  <header class="site" id="site-header">
    <div class="container nav">
      <a class="brand" href="${prefix}index.html" aria-label="Northwest Junk Pros home">
        ${LOGO_MARK}
        Northwest <b>Junk Pros</b>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a class="link" href="#services">Services</a>
        <a class="link" href="#why">Why Us</a>
        <a class="link" href="#nearby">Service Area</a>
        <a class="link" href="${prefix}locations/">Locations</a>
        <a class="link" href="#faq">FAQ</a>
      </nav>
      <div class="nav-cta">
        <a class="nav-phone" href="tel:${PHONE_TEL}">${I.phone} ${PHONE_DISP}</a>
        <a class="btn" href="#quote">Get a Free Quote</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <a class="m-link" href="#services">Services</a>
      <a class="m-link" href="#why">Why Us</a>
      <a class="m-link" href="#nearby">Service Area</a>
      <a class="m-link" href="${prefix}locations/">All Locations</a>
      <a class="m-link" href="#faq">FAQ</a>
      <a class="btn" href="#quote">Get a Free Quote</a>
      <a class="m-phone" href="tel:${PHONE_TEL}">${I.phone} ${PHONE_DISP}</a>
    </div>
  </header>`;
}

function footer(prefix) {
  const links = CITIES.slice(0, 6)
    .map((c) => `<li><a href="${prefix}locations/${c.slug}/">${c.name}</a></li>`)
    .join("\n            ");
  return `
  <footer class="site">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a class="brand" href="${prefix}index.html" aria-label="Northwest Junk Pros home">${LOGO_MARK} Northwest <b>Junk Pros</b></a>
          <p>Locally owned, eco-conscious junk removal serving Central Oregon and the Willamette Valley. Fast, friendly, and upfront — every time.</p>
        </div>
        <div class="foot-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${prefix}index.html#services">Residential Cleanouts</a></li>
            <li><a href="${prefix}index.html#services">Furniture &amp; Appliances</a></li>
            <li><a href="${prefix}index.html#services">Yard &amp; Debris</a></li>
            <li><a href="${prefix}index.html#services">Commercial Cleanouts</a></li>
            <li><a href="${prefix}index.html#services">Donation Pickup</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Locations</h4>
          <ul>
            ${links}
            <li><a href="${prefix}locations/">All service areas →</a></li>
          </ul>
        </div>
        <div class="foot-col foot-contact">
          <h4>Get In Touch</h4>
          <a href="tel:${PHONE_TEL}">${I.phone} ${PHONE_DISP}</a>
          <a href="mailto:${EMAIL}">${I.mail} ${EMAIL}</a>
          <a href="${prefix}locations/" style="cursor:pointer">${I.clock} Mon–Sat 7am–7pm · Sun by appt.</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© <span id="year"></span> Northwest Junk Pros. All rights reserved.</span>
        <div class="socials" aria-label="Social media">
          <a href="https://www.facebook.com/profile.php?id=61590674730820" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>
          <a href="#" aria-label="Instagram">${I.ig}</a>
          <a href="${prefix}index.html#reviews" aria-label="Read our reviews">${I.star}</a>
        </div>
      </div>
    </div>
  </footer>
  <div class="mobile-callbar">
    <a class="btn btn-ghost" href="tel:${PHONE_TEL}" style="color:var(--text)">${I.phone} Call</a>
    <a class="btn" href="#quote">Free Quote</a>
  </div>
  <script src="${prefix}assets/app.js" defer></script>
</body>
</html>`;
}

/* ---------- Reusable sections ---------- */
function servicesSection(city) {
  return `
    <section class="section" id="services">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">What We Haul in ${city.name}</span>
          <h2>One crew for every kind of junk</h2>
          <p>From a single couch to a whole-property cleanout, we lift it, load it, and sweep up after. If it's not hazardous, it's probably gone today.</p>
        </div>
        <div class="services-grid">
          <article class="card reveal">
            <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3 10.5 12 4l9 6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 9.5V20h14V9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 20v-5h5v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <h3>Residential Cleanouts</h3>
            <p>Garages, attics, basements, estates, and full hoarder cleanups handled with care and discretion.</p>
          </article>
          <article class="card reveal d1">
            <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 18h18M6 18v2M18 18v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
            <h3>Furniture &amp; Appliances</h3>
            <p>Heavy, awkward, up three flights? We safely remove and recycle large household items.</p>
          </article>
          <article class="card reveal d2">
            <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3c2.5 2.5 4 5 4 7.5a4 4 0 0 1-8 0C8 8 9.5 5.5 12 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M5 20c2-1.5 4-2 7-2s5 .5 7 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
            <h3>Yard &amp; Debris Removal</h3>
            <p>Storm cleanup, old fencing, brush piles, and demolition debris cleared and hauled.</p>
          </article>
          <article class="card reveal">
            <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="13" rx="1.5" stroke="currentColor" stroke-width="1.8"/><path d="M4 11h16M9 7V4h6v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
            <h3>Commercial Cleanouts</h3>
            <p>Offices, storage units, and rental turnovers cleared on a schedule that works for you.</p>
          </article>
          <article class="card reveal d1">
            <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.3-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 3.5C19 16.7 12 21 12 21z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
            <h3>Donation Pickup</h3>
            <p>Still got life left in it? We route usable goods to local charities — and send the receipt.</p>
          </article>
          <article class="card reveal d2" style="display:flex;flex-direction:column;justify-content:center;background:linear-gradient(160deg,var(--green-deep),#0a3a1d);border-color:rgba(52,211,153,.3)">
            <h3 style="font-size:1.4rem">Serving all of ${city.name}</h3>
            <p style="color:#d6f0e0;margin-bottom:1.3rem">If it's not hazardous waste, chances are we'll haul it. Ask us — estimates are always free.</p>
            <a class="btn btn-gold" href="#quote" style="align-self:flex-start">Get a Quote ${I.arrow}</a>
          </article>
        </div>
      </div>
    </section>`;
}

function whySection(city) {
  return `
    <section class="section" id="why" style="background:var(--ink-2);border-top:1px solid var(--border-d);border-bottom:1px solid var(--border-d)">
      <div class="container">
        <div class="section-head reveal" style="margin-inline:auto;text-align:center">
          <span class="eyebrow">Why Northwest Junk Pros</span>
          <h2>${city.name}'s trusted hauling crew</h2>
          <p style="margin-inline:auto">We're a locally owned Oregon crew — not a national franchise. That means real accountability, honest pricing, and a genuine commitment to ${city.name} and our environment.</p>
        </div>
        <div class="services-grid">
          <article class="card reveal"><div class="icon" aria-hidden="true">${I.check}</div><h3>Upfront pricing</h3><p>A firm quote before we lift a finger. No hidden fees, no surprises at the end — ever.</p></article>
          <article class="card reveal d1"><div class="icon" aria-hidden="true">${I.clock}</div><h3>Fast scheduling</h3><p>Open Mon–Sat 7am–7pm with same-day availability and Sunday appointments on request.</p></article>
          <article class="card reveal d2"><div class="icon" aria-hidden="true">${I.leaf}</div><h3>Eco-conscious</h3><p>We donate and recycle 70% of what we collect, keeping it out of the landfill.</p></article>
        </div>
      </div>
    </section>`;
}

function quoteSection(city) {
  return `
    <section class="section quote" id="quote">
      <div class="quote-bg" aria-hidden="true"><span class="glow q1"></span><span class="glow q2"></span></div>
      <div class="container quote-wrap">
        <div class="quote-copy reveal">
          <span class="eyebrow">Free, No-Obligation Estimate</span>
          <h2>Get junk gone in ${city.name} today</h2>
          <p>Tell us what you need hauled. We'll get back to you fast with an honest, all-in price — often the same day.</p>
          <ul class="quote-perks">
            <li>${I.check} Free estimates, zero pressure</li>
            <li>${I.check} Same-day &amp; next-day slots</li>
            <li>${I.check} Upfront pricing, no hidden fees</li>
          </ul>
          <div class="call-box">
            <span class="ic" aria-hidden="true">${I.phone}</span>
            <span class="t"><span>Prefer to talk? Call us 7 days a week</span><a href="tel:${PHONE_TEL}">${PHONE_DISP}</a></span>
          </div>
        </div>
        <form class="quote-form reveal d1" id="quote-form" novalidate>
          <h3>Request your free ${city.name} quote</h3>
          <p class="sub">We'll reply by phone or email — usually within a couple of hours during business hours.</p>
          <div class="field row">
            <div class="field"><label for="f-name">Name <span class="req">*</span></label><input id="f-name" name="name" type="text" autocomplete="name" placeholder="Jane Doe" required /></div>
            <div class="field"><label for="f-phone">Phone <span class="req">*</span></label><input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="(541) 555-0123" required /></div>
          </div>
          <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@email.com" /></div>
          <div class="field row">
            <div class="field"><label for="f-city">City / Town <span class="req">*</span></label><input id="f-city" name="city" type="text" autocomplete="address-level2" value="${city.name}, OR" required /></div>
            <div class="field"><label for="f-service">Service needed</label>
              <select id="f-service" name="service">
                <option value="Residential cleanout">Residential cleanout</option>
                <option value="Furniture & appliance removal">Furniture &amp; appliance removal</option>
                <option value="Yard & debris removal">Yard &amp; debris removal</option>
                <option value="Commercial cleanout">Commercial cleanout</option>
                <option value="Donation pickup">Donation pickup</option>
                <option value="Not sure / other">Not sure / other</option>
              </select>
            </div>
          </div>
          <div class="field"><label for="f-details">What needs to go?</label><textarea id="f-details" name="details" placeholder="e.g. Old sofa, a fridge, and about 10 boxes from the garage. Ground floor, side gate access."></textarea></div>
          <button class="btn btn-lg" type="submit">Send My Quote Request ${I.arrow}</button>
          <p class="form-note">By submitting, you'll open a pre-filled email to our team. We never share your details.</p>
          <div class="form-status" id="form-status" role="status" aria-live="polite"></div>
        </form>
      </div>
    </section>`;
}

function faqSection(city) {
  const plus = `<span class="plus" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>`;
  return `
    <section class="section on-light" id="faq">
      <div class="container">
        <div class="section-head reveal" style="margin-inline:auto;text-align:center">
          <span class="eyebrow">Good To Know</span>
          <h2>Junk removal in ${city.name} — FAQs</h2>
          <p style="margin-inline:auto">Still curious? Give us a call — we're happy to help.</p>
        </div>
        <div class="faq-wrap">
          <details class="faq reveal" open><summary>Do you offer same-day junk removal in ${city.name}? ${plus}</summary><div class="faq-body"><p>Often, yes! We're open Monday–Saturday from 7am to 7pm with same-day slots frequently available in ${city.name}, plus Sunday appointments by request. Call early for the best shot at a same-day pickup.</p></div></details>
          <details class="faq reveal d1"><summary>How much does junk removal cost in ${city.name}? ${plus}</summary><div class="faq-body"><p>Pricing is based on how much space your items take up in our truck. Every ${city.name} job starts with a free, no-obligation estimate, and the price we quote is the price you pay — no hidden fees.</p></div></details>
          <details class="faq reveal d2"><summary>What happens to my junk after pickup? ${plus}</summary><div class="faq-body"><p>We divert about 70% of everything we collect away from the landfill. Usable items go to local charities and the rest is sorted for recycling wherever possible.</p></div></details>
          <details class="faq reveal d3"><summary>Do I need to move everything outside first? ${plus}</summary><div class="faq-body"><p>Not at all. Just point to what you want gone and our crew does all the lifting and loading — from the attic, basement, backyard, or anywhere on your ${city.name} property.</p></div></details>
          <details class="faq reveal d4"><summary>What items won't you take? ${plus}</summary><div class="faq-body"><p>For safety and legal reasons we generally can't take hazardous materials like wet paint, chemicals, asbestos, or fuels. If you're unsure about a specific item, just ask.</p></div></details>
        </div>
      </div>
    </section>`;
}

/* ---------- City page ---------- */
function cityPage(city) {
  const prefix = "../../";
  const region = REGIONS[city.region];
  const canonical = `${BASE}/locations/${city.slug}/`;
  const title = `Junk Removal in ${city.name}, OR | Same-Day Hauling | Northwest Junk Pros`;
  const desc = `Fast, eco-friendly junk removal in ${city.name}, Oregon. Same-day service, upfront pricing, and 70% diverted from the landfill. Free estimates — call ${PHONE_DISP}.`;

  const business = {
    "@type": "LocalBusiness",
    name: `Northwest Junk Pros — ${city.name}`,
    description: desc,
    url: canonical,
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: "OR", addressCountry: "US" },
    areaServed: { "@type": "City", name: `${city.name}, Oregon` },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
    ],
  };
  if (city.geo) business.geo = { "@type": "GeoCoordinates", latitude: city.geo[0], longitude: city.geo[1] };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations/` },
      { "@type": "ListItem", position: 3, name: city.name, item: canonical },
    ],
  };
  const jsonld = { "@context": "https://schema.org", "@graph": [business, breadcrumb] };

  const tags = city.tags.map((t) => `<span>${t}</span>`).join("\n            ");
  const nearby = city.nearby
    .map((s) => {
      const n = BY_SLUG[s];
      return `<a class="nearby-card" href="${prefix}locations/${n.slug}/">
            <span>${n.name}<span class="sub">${REGIONS[n.region].label}</span></span>
            ${I.chevR}
          </a>`;
    })
    .join("\n          ");

  return (
    head({ title, desc, canonical, prefix, jsonld }) +
    header(prefix) +
    `
  <main id="main">
    <span id="top"></span>

    <!-- Breadcrumbs -->
    <nav class="container breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="${prefix}index.html">Home</a></li>
        <li aria-hidden="true">${I.chevR}</li>
        <li><a href="${prefix}locations/">Locations</a></li>
        <li aria-hidden="true">${I.chevR}</li>
        <li aria-current="page">${city.name}</li>
      </ol>
    </nav>

    <!-- Hero -->
    <section class="hero" style="padding-top:48px">
      <div class="hero-bg" aria-hidden="true"><span class="glow g1"></span><span class="glow g2"></span><span class="glow g3"></span><span class="grid-overlay"></span></div>
      <div class="container hero-inner">
        <span class="eyebrow reveal">${region.label} · ${city.county}</span>
        <h1 class="reveal d1">Junk Removal in<br><span class="accent">${city.name}, Oregon</span></h1>
        <p class="lead reveal d2">${city.intro}</p>
        <div class="hero-actions reveal d3">
          <a class="btn btn-lg" href="#quote">Get a Free Quote ${I.arrow}</a>
          <a class="btn btn-ghost btn-lg" href="tel:${PHONE_TEL}">${I.phone} ${PHONE_DISP}</a>
        </div>
        <div class="trust-row reveal d4">
          <span class="chip"><span class="stars" aria-hidden="true">★★★★★</span> 5-Star Rated</span>
          <span class="chip">${I.shield} Locally Owned</span>
          <span class="chip">${I.clock} Same-Day Service</span>
          <span class="chip">${I.pin} Serving ${city.name} &amp; nearby</span>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats" aria-label="By the numbers">
      <div class="container">
        <div class="stats-grid">
          <div class="stat reveal"><div class="num"><span data-count="2000" data-suffix="+">0</span></div><div class="lbl">Jobs Hauled Away</div></div>
          <div class="stat reveal d1"><div class="num"><span data-count="70">0</span><span class="unit">%</span></div><div class="lbl">Diverted From Landfill</div></div>
          <div class="stat reveal d2"><div class="num"><span data-count="13">0</span><span class="unit">+</span></div><div class="lbl">Cities Served</div></div>
          <div class="stat reveal d3"><div class="num"><span data-count="5">0</span><span class="unit">.0★</span></div><div class="lbl">Average Rating</div></div>
        </div>
      </div>
    </section>

    <!-- Local areas -->
    <section class="section" id="areas-local">
      <div class="container local-areas">
        <div>
          <div class="section-head reveal" style="margin-bottom:1.5rem">
            <span class="eyebrow">Neighborhoods We Cover</span>
            <h2>Hauling junk across ${city.name}</h2>
            <p>No matter which corner of ${city.name} you're in, our crew comes to you — driveways, alleys, upstairs units, and everything in between.</p>
          </div>
          <div class="area-tags reveal d1">
            ${tags}
          </div>
        </div>
        <div class="local-card reveal d2">
          <h3>Why ${city.name} chooses us</h3>
          <p>Local, reliable, and upfront. Here's what you can count on, every job.</p>
          <div class="mini-stats">
            <div><div class="n">Same-day</div><div class="l">pickups available</div></div>
            <div><div class="n">$0</div><div class="l">free estimates</div></div>
            <div><div class="n">70%</div><div class="l">kept from landfill</div></div>
            <div><div class="n">7 days</div><div class="l">a week by appt.</div></div>
          </div>
        </div>
      </div>
    </section>
` +
    servicesSection(city) +
    whySection(city) +
    `
    <!-- Nearby cities (internal links) -->
    <section class="section" id="nearby">
      <div class="container">
        <div class="section-head reveal" style="margin-inline:auto;text-align:center">
          <span class="eyebrow">Also In The Area</span>
          <h2>We serve ${city.name} &amp; nearby towns</h2>
          <p style="margin-inline:auto">Just outside ${city.name}? We cover the whole ${region.full}. Pick your town or see every service area we cover.</p>
        </div>
        <div class="nearby-grid reveal d1">
          ${nearby}
          <a class="nearby-card" href="${prefix}locations/" style="background:linear-gradient(160deg,var(--green-deep),#0a3a1d);border-color:rgba(52,211,153,.3)">
            <span>All Locations<span class="sub" style="color:#bfe6cf">See every city</span></span>
            ${I.arrow}
          </a>
        </div>
      </div>
    </section>
` +
    quoteSection(city) +
    faqSection(city) +
    `
  </main>` +
    footer(prefix)
  );
}

/* ---------- Locations index ---------- */
function locationsIndex() {
  const prefix = "../";
  const canonical = `${BASE}/locations/`;
  const title = `Service Areas | Junk Removal Across Central Oregon & the Willamette Valley`;
  const desc = `Northwest Junk Pros provides same-day, eco-friendly junk removal across 13 Oregon cities — from Bend and Redmond to Eugene, Springfield, and the McKenzie River corridor. Find your town.`;

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Locations", item: canonical },
    ],
  };

  function regionBlock(key) {
    const r = REGIONS[key];
    const cards = CITIES.filter((c) => c.region === key)
      .map(
        (c) => `<a class="nearby-card" href="${prefix}locations/${c.slug}/">
            <span>${c.name}<span class="sub">${c.county}</span></span>
            ${I.chevR}
          </a>`
      )
      .join("\n          ");
    return `
      <div class="loc-region reveal">
        <h3>${I.pin} ${r.label} <span style="font-weight:400;color:var(--muted);font-size:1rem">· ${r.full}</span></h3>
        <div class="loc-grid">
          ${cards}
        </div>
      </div>`;
  }

  return (
    head({ title, desc, canonical, prefix, jsonld }) +
    header(prefix) +
    `
  <main id="main">
    <span id="top"></span>
    <nav class="container breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="${prefix}index.html">Home</a></li>
        <li aria-hidden="true">${I.chevR}</li>
        <li aria-current="page">Locations</li>
      </ol>
    </nav>
    <section class="hero" style="padding-top:48px;padding-bottom:3rem">
      <div class="hero-bg" aria-hidden="true"><span class="glow g1"></span><span class="glow g2"></span><span class="grid-overlay"></span></div>
      <div class="container hero-inner">
        <span class="eyebrow reveal">Service Areas</span>
        <h1 class="reveal d1" style="font-size:clamp(2.4rem,6vw,4.2rem)">Where we haul</h1>
        <p class="lead reveal d2">Northwest Junk Pros covers 13 cities across Central Oregon and the Willamette Valley. Find your town below for local pricing, same-day availability, and a crew that knows the area.</p>
        <div class="hero-actions reveal d3">
          <a class="btn btn-lg" href="${prefix}index.html#quote">Get a Free Quote ${I.arrow}</a>
          <a class="btn btn-ghost btn-lg" href="tel:${PHONE_TEL}">${I.phone} ${PHONE_DISP}</a>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:1rem">
      <div class="container">
        ${regionBlock("desert")}
        ${regionBlock("valley")}
        <p class="area-note reveal">Don't see your town? <a href="${prefix}index.html#quote">Ask us anyway</a> — we travel for the right job.</p>
      </div>
    </section>
  </main>` +
    footer(prefix)
  );
}

/* ---------- Sitemap + robots ---------- */
function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${BASE}/`, pri: "1.0" },
    { loc: `${BASE}/locations/`, pri: "0.8" },
    ...CITIES.map((c) => ({ loc: `${BASE}/locations/${c.slug}/`, pri: "0.7" })),
  ];
  const body = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function robots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`;
}

/* ---------- Write everything ---------- */
function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

let count = 0;
for (const city of CITIES) {
  const dir = path.join(ROOT, "locations", city.slug);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), cityPage(city));
  count++;
}
ensureDir(path.join(ROOT, "locations"));
fs.writeFileSync(path.join(ROOT, "locations", "index.html"), locationsIndex());
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap());
fs.writeFileSync(path.join(ROOT, "robots.txt"), robots());

console.log(`Generated ${count} city pages + locations index + sitemap.xml + robots.txt`);
console.log("Cities: " + CITIES.map((c) => c.slug).join(", "));
