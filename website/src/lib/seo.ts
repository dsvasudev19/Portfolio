import { site } from "@/data/site";

/** schema.org BreadcrumbList. Pass absolute-or-relative paths; the last item is the current page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path.startsWith("http") ? it.path : `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

/** Trim to a search-snippet-friendly length at a word boundary. */
export function snippet(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** "CORE (AI Native …)" → "CORE" — long parenthetical names make titles overflow. */
export const shortTitle = (t: string) => t.replace(/\s*\(.*\)/, "").trim();
