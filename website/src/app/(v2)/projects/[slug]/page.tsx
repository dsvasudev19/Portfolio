import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectSlugs, projectDetails } from "@/data/projects";
import { btnGhost, btnPrimary, container, tag } from "@/components/v2/ui";
import { site } from "@/data/site";
import { breadcrumbJsonLd, shortTitle, snippet } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const statusLabel = { shipped: "Shipped", "in-development": "In development", "in-progress": "In progress" };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projectDetails[slug];
  if (!p) return { title: "Project Not Found" };
  const title = shortTitle(p.title);
  const description = snippet(`${p.subtitle}. ${p.overview}`);
  const pageUrl = `${site.url}/projects/${slug}`;
  return {
    title,
    description,
    keywords: [...p.tech, "Vasudev Darse Shikari", "Vasu.dev", title, "software development project", "Full Stack Developer project"],
    alternates: { canonical: `/projects/${slug}` },
    // og:image / twitter:image come from ./opengraph-image and ./twitter-image (1200×630 cards).
    openGraph: { title: `${title} | Vasu{.dev} Projects`, description, url: pageUrl, type: "article", authors: [site.name] },
    twitter: { card: "summary_large_image", title: `${title} | Vasu{.dev} Projects`, description },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projectDetails[slug];
  if (!p) notFound();
  const images = [...p.screenshots, ...(p.diagrams?.map((d) => d.src) ?? [])];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: p.title,
    description: p.overview,
    programmingLanguage: p.tech,
    codeRepository: p.github || "",
    author: { "@type": "Person", name: "Vasudev Darse Shikari", url: site.url },
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#work" },
    { name: shortTitle(p.title), path: `/projects/${slug}` },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_70%_at_50%_0%,rgba(221,216,255,0.7),rgba(246,245,241,0))]" aria-hidden />
        <div className={`${container} relative`}>
          <Link href="/v2#work" className="inline-flex items-center gap-2 font-semibold text-mu-muted transition hover:text-mu-accent">← All work</Link>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-mu-line bg-white px-4 py-1.5 text-sm font-semibold text-mu-ink">
            <span className={`h-2 w-2 rounded-full ${p.status === "shipped" ? "bg-emerald-500" : "bg-amber-500"}`} />
            {statusLabel[p.status]}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-mu-ink text-balance sm:text-6xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-xl text-mu-body">{p.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Visit live project</a>}
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>View source</a>}
          </div>
        </div>
      </section>

      {images.length > 0 && (
        <section className="pb-14">
          <div className={`${container} grid gap-5 md:grid-cols-2`}>
            {images.map((src, i) => (
              <div key={src} className={`relative aspect-[16/10] overflow-hidden rounded-3xl border border-mu-line bg-white ${i === 0 ? "md:col-span-2" : ""}`}>
                <Image src={src} alt={`${p.title} screenshot ${i + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" unoptimized className="object-cover object-top" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white py-20 lg:py-28">
        <div className={`${container} grid gap-14 lg:grid-cols-[1.6fr_0.7fr] lg:gap-20`}>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-mu-accent">Overview</h2>
            <p className="mt-5 text-xl leading-relaxed text-mu-ink sm:text-2xl">{p.overview}</p>

            <h2 className="mt-14 text-sm font-bold uppercase tracking-[0.14em] text-mu-accent">What it does</h2>
            <ul className="mt-6 space-y-4">
              {p.features.map((f) => (
                <li key={f} className="flex gap-4 rounded-2xl border border-mu-line bg-mu-bg p-5 text-base text-mu-body">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mu-accent" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <div className="rounded-3xl border border-mu-line bg-mu-bg p-7 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-mu-ink">Built with</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className={`${tag} !bg-white`}>{t}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
