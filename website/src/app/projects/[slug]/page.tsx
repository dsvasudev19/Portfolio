import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectSlugs, projectDetails, type ProjectStatus } from "@/data/projects";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-development": "In Development",
  "in-progress": "In Progress",
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return { title: "Project Not Found" };
  const pageUrl = `${site.url}/projects/${slug}`;

  return {
    title: `${project.title}`,
    description: project.subtitle || project.overview,
    keywords: [...project.tech, "Vasudev Darse Shikari", "Vasu.dev", project.title, "software development project", "Full Stack Developer project"],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Vasu{.dev} Projects`,
      description: project.subtitle || project.overview,
      url: pageUrl,
      type: "website",
      images: project.screenshots.map((s) => ({ url: s })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Vasu{.dev} Projects`,
      description: project.subtitle || project.overview,
      images: project.screenshots,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) notFound();

  const images = [...project.screenshots, ...(project.diagrams?.map((d) => d.src) ?? [])];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": project.overview,
    "programmingLanguage": project.tech,
    "codeRepository": project.github || "",
    "author": {
      "@type": "Person",
      "name": "Vasudev Darse Shikari",
      "url": site.url
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-cream">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-cream px-4">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between">
          <Logo />
          <Link href="/#works" className="btn btn-ghost btn-sm" data-cursor-hover>
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
        <span className="tag-b">{statusLabel[project.status]}</span>
        <h1 className="text-h1 mt-5">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-xl font-medium text-muted">{project.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" data-cursor-hover>
              View on GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" data-cursor-hover>
              Live Demo
            </a>
          )}
        </div>

        {images.length > 0 && (
          <section className="mt-12 grid gap-5 md:grid-cols-2">
            {images.map((src, i) => (
              <div
                key={src}
                className={`card-b relative overflow-hidden ${i === 0 ? "aspect-video md:col-span-2" : "aspect-video"}`}
              >
                <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" unoptimized />
              </div>
            ))}
          </section>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="text-h3">Overview</h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-muted">{project.overview}</p>

            <h2 className="text-h3 mt-12">Key Features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-base font-medium leading-relaxed">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-lime border border-ink" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <aside>
            <div className="card-b sticky top-28 p-6">
              <h3 className="text-lg font-extrabold">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-b">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </>
);
}
