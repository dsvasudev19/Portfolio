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

function ProjectCard({
  project,
  variant = "standard",
}: {
  project: Project;
  variant?: "hero" | "stacked" | "grid" | "standard";
}) {
  const router = useRouter();
  const clickable = Boolean(project.slug);

  const coverHeightClass =
    variant === "hero"
      ? "h-36 sm:h-44 lg:h-48"
      : variant === "stacked"
      ? "h-24 sm:h-28"
      : "h-28 sm:h-32";

  return (
    <article
      className={`card-b group flex h-full flex-col overflow-hidden ${clickable ? "cursor-pointer" : ""}`}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `View details for ${project.title}` : undefined}
      data-cursor-hover={clickable ? true : undefined}
      onClick={() => project.slug && router.push(`/projects/${project.slug}`)}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          router.push(`/projects/${project.slug}`);
        }
      }}
    >
      <div className={`relative shrink-0 overflow-hidden border-b-2 border-ink ${coverHeightClass}`}>
        <span className="tag-b absolute left-2.5 top-2.5 z-10 text-[11px] bg-cream px-2 py-0.5">{statusLabel[project.status]}</span>

        {project.coverType === "image" && project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.description}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center p-4 ${brandAccent[project.accent ?? "ink"]}`}>
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-center text-balance">{project.title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-b text-[11px] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-ink line-clamp-1">{project.title}</h3>
          <p className={`mt-1 text-xs sm:text-sm font-medium leading-snug text-muted ${variant === "hero" ? "line-clamp-3 sm:line-clamp-4" : "line-clamp-2"}`}>
            {project.description}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-3 pt-2">
          {project.slug && <span className="text-xs sm:text-sm font-extrabold text-ink group-hover:underline">View details →</span>}
          <div className="ml-auto flex gap-2.5" onClick={(e) => e.preventDefault()}>
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
                <svg className="h-4 w-4 text-[#24292e]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  const [hero, second, third, ...nextFour] = featured;

  return (
    <section id="works" className="section-pad">
      <div className="container-b">
        {/* Unified Section Heading */}
        <SectionHeading
          label="Work"
          index="06"
          title="Selected projects"
          subtitle="Production apps across fintech, edtech, transport, sports, and developer tools."
        />

        {/* Top 3 Featured Cards */}
        <div className="grid gap-5 lg:grid-cols-12 items-stretch">
          {hero && (
            <Reveal className="lg:col-span-7 h-full" variant="left">
              <ProjectCard project={hero} variant="hero" />
            </Reveal>
          )}
          <div className="grid gap-5 lg:col-span-5 h-full">
            {second && (
              <Reveal delay={80} variant="right">
                <ProjectCard project={second} variant="stacked" />
              </Reveal>
            )}
            {third && (
              <Reveal delay={160} variant="right">
                <ProjectCard project={third} variant="stacked" />
              </Reveal>
            )}
          </div>
        </div>

        {/* Next 4 Featured Cards (Direct continuous grid flow) */}
        {nextFour.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextFour.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <ProjectCard project={p} variant="grid" />
              </Reveal>
            ))}
          </div>
        )}

        {/* Additional Projects (If Any) */}
        {other.length > 0 && (
          <div className="mt-12">
            <Reveal>
              <p className="eyebrow mb-4">Additional Archives</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <ProjectCard project={p} variant="standard" />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
