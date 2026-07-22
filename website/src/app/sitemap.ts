import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getProjectSlugs } from "@/data/projects";
import { products } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = site.url;
  const projectSlugs = getProjectSlugs();
  const productSlugs = products.map((p) => p.slug);

  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionRoutes = productSlugs.map((slug) => ({
    url: `${siteUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...solutionRoutes];
}
