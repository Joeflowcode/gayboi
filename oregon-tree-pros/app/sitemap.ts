import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.domain}/`, lastModified: now, priority: 1 },
    { url: `${site.domain}/services/`, lastModified: now, priority: 0.9 },
    { url: `${site.domain}/locations/`, lastModified: now, priority: 0.9 },
    ...services.map((s) => ({ url: `${site.domain}/services/${s.slug}/`, lastModified: now, priority: 0.8 })),
    ...cities.map((c) => ({ url: `${site.domain}/locations/${c.slug}/`, lastModified: now, priority: 0.8 })),
    ...posts.map((p) => ({ url: `${site.domain}/blog/${p.slug}/`, lastModified: new Date(p.date), priority: 0.6 })),
    { url: `${site.domain}/blog/`, lastModified: now, priority: 0.7 },
    { url: `${site.domain}/about/`, lastModified: now, priority: 0.5 },
    { url: `${site.domain}/contact/`, lastModified: now, priority: 0.7 },
  ];
}
