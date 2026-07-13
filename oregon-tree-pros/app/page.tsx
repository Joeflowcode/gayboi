import Link from "next/link";
import type { Metadata } from "next";
import { site, faqs } from "@/data/site";
import { services } from "@/data/services";
import { cities, regions } from "@/data/cities";
import { posts } from "@/data/posts";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import { TrustBadges, Reviews, Gallery, Financing } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Tree Removal Oregon | Portland, Salem, Eugene & Bend",
  description:
    "Oregon's trusted tree removal company. Certified arborists, crane-assisted removals, 24/7 storm response, permits handled, free estimates. Serving Portland, Salem, Eugene & Bend.",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-10 items-center py-12 md:py-20">
        <div>
          <p className="inline-block rounded-full bg-forest-100 text-forest-800 text-sm font-semibold px-4 py-1">
            ⭐ {site.reviewAvg}/5 from {site.reviewCount}+ Oregon homeowners
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-forest-900 leading-tight">
            Tree Removal in Oregon, Done Right the First Time
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Certified arborists. Crane-assisted removals. 24/7 storm response. Permits handled,
            clean-up included — across the Portland metro, Salem, Eugene, and Central Oregon.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={site.phoneHref} className="rounded-lg bg-forest-700 text-white px-6 py-3 font-bold hover:bg-forest-800">
              📞 {site.phone}
            </a>
            <Link href="/contact/" className="rounded-lg bg-amber-brand text-forest-900 px-6 py-3 font-bold hover:opacity-90">
              Free Estimate →
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {site.license} · $2M insured · Free written estimates in 48 hours
          </p>
        </div>
        <LeadForm />
      </section>

      <TrustBadges />

      {/* Services */}
      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900 mb-2">
          Complete Tree Services Across Oregon
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
          One licensed crew for everything from a single stump to a two-acre clearing — no
          subcontracting, no surprises.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-forest-600 hover:shadow-md transition"
            >
              <h3 className="font-extrabold text-forest-900 text-lg group-hover:text-forest-700">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">{s.intro}</p>
              <p className="mt-3 text-sm font-semibold text-forest-700">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      <Cta title="Not Sure What Your Tree Needs?" subtitle="Send us a photo or book a free on-site visit — our arborist will tell you honestly whether it needs removal, pruning, or nothing at all." />

      {/* Service areas */}
      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900 mb-6">
          Serving Homeowners Across Oregon
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <div key={r} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-forest-800">{r}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {cities.filter((c) => c.region === r).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/${c.slug}/`} className="text-forest-700 hover:underline">
                      Tree Service in {c.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Gallery />
      <Reviews />
      <Financing />

      <Cta title="Storm Damage? We Answer 24/7." subtitle="Tree on your house, car, or driveway? Our emergency crews respond in 2–4 hours across the Portland metro and same-day statewide." />

      {/* Recent guides */}
      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900 mb-6">
          Tree Care Guides for Oregon Homeowners
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.slice(0, 4).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-forest-600 hover:shadow-md transition">
              <h3 className="font-bold text-forest-900 leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>
              <p className="mt-3 text-sm font-semibold text-forest-700">Read the guide →</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq items={faqs} />
      <Cta />
    </div>
  );
}
