export default async (_request: Request, context: any) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) return response;

  let html = await response.text();

  html = html.replace(
    '<meta name="description" content="Northwest Junk Pros — Salem, Oregon junk removal, hauling, and handyman help. Serving Salem and the Mid-Willamette Valley with free estimates.">',
    '<meta name="description" content="Northwest Junk Pros provides estate sales, estate cleanouts, junk removal, hauling, and handyman help in Salem and the Mid-Willamette Valley. Free estimates and estate evaluations.">'
  );

  html = html.replace(
    '<title>Salem Junk Removal & Handyman | Northwest Junk Pros</title>',
    '<title>Salem Estate Sales, Junk Removal & Hauling | Northwest Junk Pros</title>'
  );

  html = html.replace(
    '<li><a href="#handyman">Handyman</a></li>',
    '<li><a href="/estate-cleanouts.html">Estate Sales</a></li>'
  );

  html = html.replace(
    '<li><a href="#service-area">Service Area</a></li>',
    '<li><a href="#upcoming-estate-sales">Upcoming Sales</a></li>\n    <li><a href="#service-area">Service Area</a></li>'
  );

  html = html.replace(
    '<a href="tel:+15414252008" class="btn btn-outline">Call Us Now</a>',
    '<a href="tel:+15414252008" class="btn btn-outline">Call Us Now</a>\n      <a href="/estate-cleanouts.html" class="btn btn-outline">Estate Sale Help</a>'
  );

  const estateCard = `
      <div class="service-card">
        <img class="service-img" src="https://images.pexels.com/photos/7464689/pexels-photo-7464689.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="Estate sale and home cleanout help in Salem Oregon" loading="lazy">
        <div class="service-body">
          <div class="service-icon">
            <svg viewBox="0 0 24 24"><path d="M12 3L2 10h3v10h6v-6h2v6h6V10h3L12 3zm5 15h-2v-6H9v6H7v-9l5-3.5L17 9v9z"/></svg>
          </div>
          <h3>Estate Sales & Estate Cleanouts</h3>
          <p>We help families sort, sell, donate, and clear estates from start to finish. Sell what has value first, then let our crew handle approved leftovers and final cleanout work.</p>
          <div class="service-items">
            <span class="tag">Estate Sales</span>
            <span class="tag">Downsizing</span>
            <span class="tag">Inherited Homes</span>
            <span class="tag">Cleanouts</span>
          </div>
          <a href="/estate-cleanouts.html" style="display:inline-block;margin-top:1rem;color:var(--green);font-weight:700;text-decoration:none;">Free Estate Evaluation →</a>
        </div>
      </div>
`;

  html = html.replace(
    '<div class="services-grid">\n\n      <div class="service-card">',
    `<div class="services-grid">\n${estateCard}\n      <div class="service-card">`
  );

  const upcomingSalesSection = `
<section id="upcoming-estate-sales" style="background:var(--green-dark);color:#fff;">
  <div class="container">
    <p class="section-label" style="color:var(--amber-light);">Estate Sale Shoppers</p>
    <h2 class="section-title" style="color:#fff;">Upcoming Estate Sales</h2>
    <p class="section-sub" style="color:rgba(255,255,255,0.78);max-width:720px;">Watch this space for upcoming Northwest Junk Pros estate sales in Salem and the Santiam Canyon. Join our buyer list now to hear about new sales, preview photos, dates, and locations as soon as they are announced.</p>

    <div style="display:grid;grid-template-columns:minmax(0,1.4fr) minmax(280px,.8fr);gap:1.5rem;align-items:stretch;">
      <div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);border-radius:6px;padding:2rem;">
        <div style="font-family:var(--font-head);font-size:.82rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--amber-light);margin-bottom:.5rem;">Current Schedule</div>
        <h3 style="font-family:var(--font-head);font-size:1.8rem;text-transform:uppercase;margin-bottom:.75rem;color:#fff;">No Upcoming Sales Posted Yet</h3>
        <p style="color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:1.4rem;">We are currently building our estate-sale calendar. When a sale is ready, this section will show the city, dates, preview details, and a link to see what is inside.</p>
        <a href="sms:+15414252008?&body=ESTATE%20SALES%20%E2%80%94%20Please%20add%20me%20to%20the%20Northwest%20Junk%20Pros%20estate%20sale%20buyer%20list." class="btn btn-primary">Join the Buyer List</a>
      </div>

      <div style="background:#fff;color:var(--charcoal);border-radius:6px;padding:2rem;">
        <p class="section-label">Need to Hold a Sale?</p>
        <h3 style="font-family:var(--font-head);font-size:1.65rem;text-transform:uppercase;color:var(--green-dark);margin-bottom:.75rem;">Request a Free Estate Evaluation</h3>
        <p style="color:var(--mid);line-height:1.65;margin-bottom:1.4rem;">Handling an inherited home, family estate, or downsizing move? We can help sell what has value and then clear what remains.</p>
        <a href="/estate-cleanouts.html" class="btn btn-primary" style="width:100%;justify-content:center;">Estate Sale Help</a>
      </div>
    </div>
  </div>
</section>
<style>
  @media (max-width: 768px) {
    #upcoming-estate-sales > .container > div:last-child { grid-template-columns: 1fr !important; }
    #upcoming-estate-sales .btn { width: 100%; justify-content: center; }
  }
</style>
`;

  html = html.replace(
    '<section class="handyman" id="handyman">',
    `${upcomingSalesSection}\n<section class="handyman" id="handyman">`
  );

  html = html.replace(
    '<option>Residential Cleanout</option>',
    '<option>Estate Sale / Estate Cleanout</option>\n            <option>Residential Cleanout</option>'
  );

  html = html.replace(
    '<li><a href="#services">Residential Cleanouts</a></li>',
    '<li><a href="/estate-cleanouts.html">Estate Sales & Estate Cleanouts</a></li>\n        <li><a href="#upcoming-estate-sales">Upcoming Estate Sales</a></li>\n        <li><a href="#services">Residential Cleanouts</a></li>'
  );

  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const config = {
  path: "/",
};
