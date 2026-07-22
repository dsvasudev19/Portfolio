import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = site.url;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
