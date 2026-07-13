import Link from "next/link";
import type { Metadata } from "next";
import { cities, regions } from "@/data/cities";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Service Areas | Tree Removal Across Oregon",
  description:
    "Tree Removal Oregon serves the Portland metro, Salem, Albany, Corvallis, Eugene, Springfield, Bend, and Central Oregon with full tree services.",
};

export default function LocationsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">Where We Work</h1>
      <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
        Local crews based in four Oregon regions — which means faster estimates, faster emergency
        response, and arborists who know your city&apos;s trees and tree code.
      </p>
      <div className="mt-10 space-y-10">
        {regions.map((r) => (
          <section key={r}>
            <h2 className="text-2xl font-extrabold text-forest-900 mb-4">{r}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.filter((c) => c.region === r).map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}/`} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-forest-600 hover:shadow-md transition">
                  <h3 className="text-lg font-extrabold text-forest-900">{c.name}</h3>
                  <p className="text-xs text-gray-500">{c.county}</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{c.intro}</p>
                  <p className="mt-3 text-sm font-semibold text-forest-700">Tree service in {c.name} →</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Cta />
    </div>
  );
}
