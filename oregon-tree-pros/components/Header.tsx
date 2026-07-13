import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Service Areas" },
  { href: "/blog/", label: "Tree Care Guides" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" aria-hidden>🌲</span>
            <span className="font-extrabold text-forest-800 text-lg leading-tight">
              Tree Removal Oregon
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-forest-700">
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-forest-700 px-4 py-2 text-white font-bold hover:bg-forest-800"
          >
            📞 {site.phone}
          </a>
        </div>
        <nav className="md:hidden flex gap-4 overflow-x-auto pb-2 text-sm font-medium text-gray-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap hover:text-forest-700">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
