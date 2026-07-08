import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Tree Services in Oregon | Removal, Trimming, Stumps & More",
  description:
    "Full-service tree care across Oregon: removal, emergency storm response, trimming, stump grinding, land clearing, and certified arborist consultations.",
};

export default function ServicesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">Our Tree Services</h1>
      <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
        Every crew is licensed, bonded, insured, and led by training from ISA certified arborists.
        Every quote is free, written, and includes clean-up and haul-away.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-forest-600 hover:shadow-md transition">
            <h2 className="text-xl font-extrabold text-forest-900">{s.name}</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">{s.intro}</p>
            <p className="mt-3 text-sm text-gray-500">Typical price: {s.priceRange}</p>
            <p className="mt-3 font-semibold text-forest-700">View service details →</p>
          </Link>
        ))}
      </div>
      <Cta />
    </div>
  );
}
