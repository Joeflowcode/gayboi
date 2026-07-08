import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100 mt-16 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-extrabold text-white text-lg mb-2">🌲 {site.name}</p>
          <p className="text-sm leading-relaxed opacity-90">{site.tagline}. {site.hours}.</p>
          <p className="text-sm mt-3 opacity-90">
            {site.license} · Bonded & Insured
            <br />
            <a href={site.phoneHref} className="font-bold text-white underline">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </p>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Service Areas</p>
          <ul className="space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}/`} className="hover:text-white">
                  Tree Service {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Free Estimate</Link></li>
            <li><Link href="/blog/" className="hover:text-white">Tree Care Guides</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-800 py-4 text-center text-xs opacity-75 px-4">
        © {new Date().getFullYear()} {site.legalName} · {site.license} · Serving {site.serviceArea}
      </div>
    </footer>
  );
}
