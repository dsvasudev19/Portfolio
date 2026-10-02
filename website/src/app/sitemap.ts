import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getProjectSlugs } from "@/data/projects";
import { products } from "@/data/solutions";

/**
 * Generated from the same data that renders the pages, so new projects and
 * solutions appear automatically. Only canonical, indexable HTML pages are listed:
 *  - llms.txt / llms-full.txt are not pages (they are advertised in <head> and robots)
 * `lastModified` is omitted on purpose: a build-time "now" would be inaccurate and
 * search engines discount untrustworthy lastmod values.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/solutions`, changeFrequency: "weekly", priority: 0.8 },
    ...products.map((p) => ({ url: `${base}/solutions/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...getProjectSlugs().map((slug) => ({ url: `${base}/projects/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
