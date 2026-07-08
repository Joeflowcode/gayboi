import Link from "next/link";
import { site } from "@/data/site";

export default function Cta({
  title = "Get Your Free Estimate Today",
  subtitle = "A certified arborist will assess your trees and give you a written, no-pressure quote — usually within 48 hours.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-forest-700 text-white rounded-2xl px-6 py-10 text-center my-12">
      <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
      <p className="mt-3 max-w-2xl mx-auto opacity-90">{subtitle}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href={site.phoneHref}
          className="rounded-lg bg-white text-forest-800 px-6 py-3 font-bold hover:bg-forest-50"
        >
          📞 {site.phone}
        </a>
        <Link
          href="/contact/"
          className="rounded-lg bg-amber-brand text-forest-900 px-6 py-3 font-bold hover:opacity-90"
        >
          Request Free Quote →
        </Link>
      </div>
      <p className="mt-4 text-sm opacity-80">
        {site.license} · Insured · {site.hours}
      </p>
    </section>
  );
}
