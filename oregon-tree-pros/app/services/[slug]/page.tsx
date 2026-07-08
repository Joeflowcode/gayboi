import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { serviceSchema } from "@/lib/schema";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import { TrustBadges, Reviews } from "@/components/Sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: { absolute: s.metaTitle }, description: s.metaDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.name, service.metaDescription, `/services/${service.slug}/`)),
        }}
      />
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> ›{" "}
        <Link href="/services/" className="hover:underline">Services</Link> › {service.name}
      </nav>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">{service.h1}</h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{service.intro}</p>
          <p className="mt-4 inline-block rounded-lg bg-forest-100 text-forest-800 px-4 py-2 text-sm font-semibold">
            Typical price: {service.priceRange}
          </p>

          {service.body.map((b) => (
            <section key={b.heading} className="mt-10">
              <h2 className="text-2xl font-extrabold text-forest-900">{b.heading}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{b.text}</p>
            </section>
          ))}

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-forest-900">
              {service.shortName} Service Near You
            </h2>
            <p className="mt-3 text-gray-700">
              We provide {service.name.toLowerCase()} throughout our Oregon service areas:
            </p>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}/`} className="text-forest-700 hover:underline">
                    {c.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <Faq items={service.faqs} title={`${service.name} FAQs`} />
        </div>

        <aside className="space-y-6">
          <LeadForm defaultService={service.slug} />
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-forest-900 mb-3">All Services</p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className={s.slug === service.slug ? "font-bold text-forest-800" : "text-forest-700 hover:underline"}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <TrustBadges />
      <Reviews />
      <Cta title={`Ready for Your Free ${service.shortName} Estimate?`} />
    </div>
  );
}
