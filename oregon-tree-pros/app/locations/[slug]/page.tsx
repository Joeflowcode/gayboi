import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import Cta from "@/components/Cta";
import LeadForm from "@/components/LeadForm";
import { TrustBadges, Reviews } from "@/components/Sections";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cities.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: { absolute: c.metaTitle }, description: c.metaDescription };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearby = cities.filter((c) => c.region === city.region && c.slug !== city.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> ›{" "}
        <Link href="/locations/" className="hover:underline">Service Areas</Link> › {city.name}
      </nav>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">
            Tree Removal & Tree Service in {city.name}, Oregon
          </h1>
          <p className="mt-2 text-sm text-gray-500">{city.county} · {city.region}</p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{city.intro}</p>

          {city.localNotes.map((n) => (
            <section key={n.heading} className="mt-10">
              <h2 className="text-2xl font-extrabold text-forest-900">{n.heading}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{n.text}</p>
            </section>
          ))}

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-forest-900">
              Tree Services We Offer in {city.name}
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="rounded-xl border border-gray-200 bg-white p-4 hover:border-forest-600 transition">
                  <p className="font-bold text-forest-900">{s.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.priceRange}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-forest-900">
              Neighborhoods & Areas We Serve in {city.name}
            </h2>
            <p className="mt-3 text-gray-700">
              {city.neighborhoods.join(" · ")} — and everywhere in between. If you&apos;re in{" "}
              {city.county}, we&apos;ve got you covered.
            </p>
          </section>

          {nearby.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-extrabold text-forest-900">Also Serving Nearby</h2>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {nearby.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/${c.slug}/`} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-forest-700 hover:border-forest-600">
                      {c.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <LeadForm defaultCity={city.slug} />
        </aside>
      </div>

      <TrustBadges />
      <Reviews filterCity={city.name} />
      <Cta title={`Get Your Free Estimate in ${city.name}`} />
    </div>
  );
}
