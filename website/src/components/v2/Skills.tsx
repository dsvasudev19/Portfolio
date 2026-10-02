import Image from "next/image";
import { skills } from "@/data/site";
import { Words } from "./motion";
import { Reveal } from "./Reveal";
import { container, eyebrow, section } from "./ui";

const icon = (n: string, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-${v}.svg`;
const byName = (n: string) => skills.find((s) => s.name === n)!.icon;

/** The four things I want to be known for, in priority order. */
const focus = [
  {
    title: "Docker",
    text: "Packages your app so it runs the same on every machine.",
    includes: "Containers · Reliable deployments",
    icon: byName("Docker"),
    card: "bg-mu-sky text-mu-ink",
    sub: "text-mu-ink/75",
    chip: "bg-white/70 text-mu-ink",
  },
  {
    title: "DevOps",
    text: "Automatic testing and releases, so updates ship safely.",
    includes: "GitHub Actions · AWS · CI/CD",
    icon: icon("githubactions"),
    card: "bg-mu-mint text-mu-ink",
    sub: "text-mu-ink/75",
    chip: "bg-white/70 text-mu-ink",
  },
  {
    title: "Java",
    text: "Big, dependable business systems that last.",
    includes: "Spring Boot · Microservices",
    icon: byName("Java"),
    card: "bg-mu-peach text-mu-ink",
    sub: "text-mu-ink/75",
    chip: "bg-white/70 text-mu-ink",
  },
];

const aiTools = [
  {
    name: "LangChain",
    text: "Connects AI models to your tools and data",
    d: "M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1",
  },
  {
    name: "LangGraph",
    text: "Lets AI follow multi-step workflows",
    d: "M6 4.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM18 4.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 14.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8.5 7h7M7.2 9.4l3.6 5.2M16.8 9.4l-3.6 5.2",
  },
  {
    name: "MCP",
    text: "A standard, safe way for AI to use your apps",
    d: "M9 3v5M15 3v5M7 8h10v3a5 5 0 01-10 0V8zM12 16v5",
  },
  {
    name: "RAG",
    text: "AI that answers from your own documents",
    d: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h4M14 3l5 5v2M16.5 20a3 3 0 100-6 3 3 0 000 6zM21 21l-2.4-2.4",
  },
];

const purpose: Record<string, string> = {
  "Spring Boot": "Fast, secure back-ends",
  TypeScript: "Safer, cleaner code",
  React: "Smooth, interactive screens",
  "Next.js": "Fast, search-friendly sites",
  "Node.js": "Real-time apps and APIs",
  PostgreSQL: "Reliable data storage",
  MongoDB: "Flexible data storage",
  MySQL: "Trusted data storage",
  Angular: "Large, structured web apps",
  "Git & GitHub": "Teamwork and history",
};
const others = skills.filter((s) => s.name !== "Java" && s.name !== "Docker");

export function Skills() {
  return (
    <section id="skills" className={section}>
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className={eyebrow}>Tools I use</span>
          </Reveal>
          <Words
            delay={80}
            className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl"
            segments={[{ t: "Tools I" }, { t: "trust.", em: true }]}
          />
          <Reveal delay={200}>
            <p className="mt-7 text-xl leading-relaxed text-mu-body">
              Proven technologies, so your product stays easy to maintain and grow for years to come.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="mt-16 text-sm font-bold uppercase tracking-[0.14em] text-mu-muted">My main focus</p>
        </Reveal>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <li>
            <Reveal from="scale" className="h-full">
              <article className="relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[2rem] bg-mu-navy p-7 text-white sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-mu-accent/50 blur-3xl" aria-hidden />
                <div className="relative flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-mu-accent to-violet-500">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
                    </svg>
                  </span>
                  <h3 className="text-3xl font-semibold tracking-tight">AI</h3>
                </div>
                <p className="relative mt-4 text-base leading-snug text-white/70">Assistants that use your real data and take real actions.</p>

                <ul className="relative mt-5 grid flex-1 grid-cols-2 gap-2.5">
                  {aiTools.map((t, i) => (
                    <li key={t.name}>
                      <Reveal delay={200 + i * 110} from="scale" className="h-full">
                        <div title={t.text} className="group flex h-full min-h-[5.25rem] flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center transition duration-300 hover:-translate-y-0.5 hover:border-mu-lilac/50 hover:bg-white/[0.14]">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-mu-lilac transition duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d={t.d} />
                          </svg>
                          <span className="text-[0.95rem] font-bold leading-none">{t.name}</span>
                          <span className="sr-only">{t.text}</span>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>

          {focus.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={(i + 1) * 110} from="scale" className="h-full">
                <article className={`group flex h-full min-h-[19rem] flex-col rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-30px_rgba(14,20,36,0.5)] sm:p-8 ${f.card}`}>
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/80 shadow-sm transition duration-300 group-hover:scale-110">
                    <Image src={f.icon!} alt="" width={36} height={36} unoptimized className="h-9 w-9" />
                  </span>
                  <h3 className="mt-7 text-3xl font-semibold tracking-tight">{f.title}</h3>
                  <p className={`mt-3 text-lg leading-snug ${f.sub}`}>{f.text}</p>
                  <div className="mt-auto pt-7">
                    <p className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${f.chip}`}>{f.includes}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={100}>
          <p className="mt-16 text-sm font-bold uppercase tracking-[0.14em] text-mu-muted">Also in my toolbox</p>
        </Reveal>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {others.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={(i % 5) * 70} from="scale" className="h-full">
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-mu-line bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-mu-accent/40 sm:p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mu-bg transition group-hover:bg-mu-accent-soft">
                    <Image src={s.icon} alt="" width={26} height={26} unoptimized className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-bold leading-tight text-mu-ink">{s.name}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-mu-body">{purpose[s.name]}</span>
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
