"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-development": "In Development",
  "in-progress": "In Progress",
};

const brandAccent: Record<NonNullable<Project["accent"]>, string> = {
  lime: "bg-lime text-ink",
  blue: "bg-blue text-cream",
  coral: "bg-coral text-cream",
  ink: "bg-ink text-cream",
};

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const router = useRouter();
  const clickable = Boolean(project.slug);

  return (
    <article
      className={`card-b group h-full overflow-hidden ${clickable ? "cursor-pointer" : ""}`}
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      data-cursor-hover={clickable ? true : undefined}
      onClick={() => project.slug && router.push(`/projects/${project.slug}`)}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          router.push(`/projects/${project.slug}`);
        }
      }}
    >
      <div className={`relative overflow-hidden border-b-2 border-ink ${large ? "h-56 md:h-72" : "h-48"}`}>
        <span className="tag-b absolute left-3 top-3 z-10 bg-cream">{statusLabel[project.status]}</span>

        {project.coverType === "image" && project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.description}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center p-6 ${brandAccent[project.accent ?? "ink"]}`}>
            <span className="text-h3 text-center text-balance">{project.title}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-b">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-h3">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex items-center gap-4">
          {project.slug && <span className="text-sm font-extrabold">View details →</span>}
          <div className="ml-auto flex gap-3" onClick={(e) => e.preventDefault()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink transition-opacity hover:opacity-60"
                aria-label="GitHub"
                data-cursor-hover
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.125-.195-2.805-.78-2.805-3.495 0-.78.285-1.41.735-1.905-.075-.195-.33-.975.075-2.025 0 0 .6-.195 1.98.735.57-.165 1.185-.255 1.8-.255.615 0 1.23.09 1.8.255 1.38-.945 1.98-.735 1.98-.735.405 1.05.15 1.83.075 2.025.465.495.735 1.125.735 1.905 0 2.715-1.68 3.3-2.805 3.495.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink transition-opacity hover:opacity-60"
                aria-label="Live demo"
                data-cursor-hover
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);
  const [hero, second, third, ...restFeatured] = featured;

  return (
    <section id="works" className="section-pad">
      <div className="container-b">
        <SectionHeading
          label="Work"
          index="06"
          title="Selected projects"
          subtitle="Production apps across fintech, edtech, transport, sports, and developer tools."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {hero && (
            <Reveal className="lg:col-span-7" variant="left">
              <ProjectCard project={hero} large />
            </Reveal>
          )}
          <div className="grid gap-5 lg:col-span-5">
            {second && (
              <Reveal delay={80} variant="right">
                <ProjectCard project={second} />
              </Reveal>
            )}
            {third && (
              <Reveal delay={160} variant="right">
                <ProjectCard project={third} />
              </Reveal>
            )}
          </div>
        </div>

        {restFeatured.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {restFeatured.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}

        {other.length > 0 && (
          <>
            <Reveal>
              <p className="eyebrow mb-5 mt-14">More Projects</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
