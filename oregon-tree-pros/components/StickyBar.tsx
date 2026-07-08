import Link from "next/link";
import { site } from "@/data/site";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
      <a
        href={site.phoneHref}
        className="bg-forest-700 text-white text-center py-4 font-bold text-sm"
      >
        📞 Call Now
      </a>
      <Link
        href="/contact/"
        className="bg-amber-brand text-forest-900 text-center py-4 font-bold text-sm"
      >
        ✏️ Free Quote
      </Link>
    </div>
  );
}
