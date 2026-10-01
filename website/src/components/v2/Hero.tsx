import Image from "next/image";
import Link from "next/link";
import { AskBar } from "./AskBar";
import { Words } from "./motion";
import { Reveal } from "./Reveal";
import { btnGhost, btnPrimary, container } from "./ui";

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-36 sm:pt-44 lg:pb-32 lg:pt-52">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20`}>
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 text-base font-semibold text-mu-body">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open for new projects
            </p>
          </Reveal>

          <Words
            as="h1"
            delay={100}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-mu-ink sm:text-6xl lg:text-[4.5rem]"
            segments={[{ t: "I build websites, apps and AI tools for" }, { t: "your business.", em: true }]}
          />

          <Reveal delay={500}>
            <p className="mt-7 max-w-lg text-xl leading-relaxed text-mu-body">
              Hi, I&rsquo;m Vasudev, a software engineer in Hyderabad. Tell me what you need, and I&rsquo;ll take it from
              idea to launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/v2#contact" className={btnPrimary}>Start a project</Link>
              <Link href="/v2#work" className={btnGhost}>See my work</Link>
            </div>
            <AskBar />
          </Reveal>
        </div>

        <Reveal from="scale" delay={250}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mu-peach via-mu-lilac to-mu-sky lg:max-w-none">
            <Image
              src="/assets/author.png"
              alt="Portrait of Vasudev Darse Shikari"
              width={1111}
              height={1021}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="h-full w-full object-cover object-[50%_12%] mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
