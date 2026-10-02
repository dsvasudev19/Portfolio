import { renderOgImage, ogSize } from "@/lib/og";
import { getProjectSlugs, projectDetails } from "@/data/projects";

export const alt = "Project case study by Vasudev DS";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectDetails[slug];
  return renderOgImage({
    eyebrow: "Project",
    title: (p?.title ?? "Project").replace(/\s*\(.*\)/, ""),
    subtitle: p?.subtitle,
  });
}
