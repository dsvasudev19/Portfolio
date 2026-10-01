import Link from "next/link";
import { HowItWorks } from "./HowItWorks";
import { Words } from "./motion";
import { Reveal } from "./Reveal";
import { btnPrimary, container, eyebrow, section } from "./ui";

export function Approach() {
  return (
    <section id="approach" className={section}>
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className={eyebrow}>How it works</span>
          </Reveal>
          <Words
            delay={80}
            className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl"
            segments={[{ t: "Working with me is" }, { t: "easy.", em: true }]}
          />
        </div>

        <HowItWorks />

        <Reveal delay={200}>
          <div className="mt-20 text-center">
            <Link href="/v2#contact" className={btnPrimary}>Tell me your idea</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
