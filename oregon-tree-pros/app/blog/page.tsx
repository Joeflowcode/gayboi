import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Tree Care Guides for Oregon Homeowners",
  description:
    "Expert guides on tree removal costs, permits, storm damage, and tree health — written for Oregon homeowners by certified arborists.",
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">Tree Care Guides</h1>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Straight answers about costs, permits, storm damage, and tree health — written for Oregon
        homeowners, not search engines.
      </p>
      <div className="mt-10 space-y-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="block rounded-2xl border border-gray-200 bg-white p-6 hover:border-forest-600 hover:shadow-md transition">
            <p className="text-xs text-gray-500">{new Date(p.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            <h2 className="mt-1 text-xl font-extrabold text-forest-900 leading-snug">{p.title}</h2>
            <p className="mt-2 text-gray-600">{p.excerpt}</p>
            <p className="mt-3 font-semibold text-forest-700">Read the guide →</p>
          </Link>
        ))}
      </div>
      <Cta />
    </div>
  );
}
