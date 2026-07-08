import { site, trustBadges, testimonials } from "@/data/site";

export function TrustBadges() {
  return (
    <section className="my-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trustBadges.map((b) => (
          <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
            <p className="font-bold text-forest-800 text-sm">{b.title}</p>
            <p className="text-xs text-gray-500 mt-1">{b.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Reviews({ filterCity }: { filterCity?: string }) {
  const shown = filterCity
    ? [...testimonials].sort((a, b) => (a.city === filterCity ? -1 : 0) - (b.city === filterCity ? -1 : 0))
    : testimonials;
  return (
    <section className="my-12">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900">
          What Oregon Homeowners Say
        </h2>
        <p className="text-sm text-gray-600">
          ⭐ {site.reviewAvg} average · {site.reviewCount}+ Google Reviews
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-amber-brand" aria-label="5 out of 5 stars">★★★★★</p>
            <blockquote className="mt-3 text-gray-700 leading-relaxed">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-forest-800">
              {t.name} · {t.city} <span className="font-normal text-gray-500">— {t.service}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const jobs = [
    { label: "110-ft Douglas Fir Crane Removal", where: "Portland — West Hills" },
    { label: "Storm-Damaged Maple off Roof", where: "Gresham" },
    { label: "Defensible Space Clearing, 2 Acres", where: "Bend — Tumalo" },
    { label: "Oak Deadwooding & Crown Clean", where: "Salem — Candalaria" },
    { label: "6-Stump Grind & Regrade", where: "Eugene — Friendly" },
    { label: "Backyard Fir Dismantle, 30\" Gate", where: "Beaverton — Cedar Hills" },
  ];
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900 mb-6">Recent Work</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((j) => (
          <div key={j.label} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
            {/* TODO: replace placeholder with real before/after job photos (WebP, ~1200px wide) */}
            <div className="aspect-video bg-gradient-to-br from-forest-100 to-forest-600/30 flex items-center justify-center text-4xl">
              🌲
            </div>
            <div className="p-4">
              <p className="font-semibold text-forest-900 text-sm">{j.label}</p>
              <p className="text-xs text-gray-500 mt-1">{j.where}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Financing() {
  return (
    <section className="my-12 rounded-2xl border border-gray-200 bg-white p-8 md:flex items-center gap-8">
      <div className="text-5xl mb-4 md:mb-0">💳</div>
      <div>
        <h2 className="text-2xl font-extrabold text-forest-900">0% Financing for 12 Months</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Big removals shouldn&apos;t wait for a hazard to become an emergency. Jobs over $2,000 qualify
          for 12-month same-as-cash financing through our lending partner, subject to credit approval.
          Ask about it during your free estimate.
        </p>
      </div>
    </section>
  );
}
