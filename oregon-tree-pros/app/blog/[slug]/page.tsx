import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import Cta from "@/components/Cta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.metaDescription };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Oregon Tree Pros" },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> ›{" "}
        <Link href="/blog/" className="hover:underline">Guides</Link>
      </nav>
      <p className="text-xs text-gray-500">{new Date(post.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-forest-900 leading-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">{post.excerpt}</p>

      {post.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-2xl font-extrabold text-forest-900">{s.heading}</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">{s.text}</p>
        </section>
      ))}

      <div className="mt-10 rounded-2xl bg-forest-50 border border-forest-100 p-6">
        <p className="font-bold text-forest-900">Related services:</p>
        <ul className="mt-2 flex flex-wrap gap-3 text-sm">
          {services.slice(0, 4).map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}/`} className="text-forest-700 underline hover:text-forest-900">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Cta title="Questions About Your Trees?" subtitle="A free estimate takes 20 minutes and comes with an honest arborist opinion — not a sales pitch." />
    </article>
  );
}
