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

  html = html.replace(
    '<option>Residential Cleanout</option>',
    '<option>Estate Sale / Estate Cleanout</option>\n            <option>Residential Cleanout</option>'
  );

  html = html.replace(
    '<li><a href="#services">Residential Cleanouts</a></li>',
    '<li><a href="/estate-cleanouts.html">Estate Sales & Estate Cleanouts</a></li>\n        <li><a href="#services">Residential Cleanouts</a></li>'
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
