import { renderOgImage, ogSize } from "@/lib/og";
import { products } from "@/data/solutions";

export const alt = "Solution by Vasudev DS";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return renderOgImage({ eyebrow: "Solutions", title: p?.title ?? "Solution", subtitle: p?.tagline });
}
