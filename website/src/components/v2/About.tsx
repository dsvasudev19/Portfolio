import { CountUp, Words } from "./motion";
import { Reveal } from "./Reveal";
import { container, eyebrow, section } from "./ui";

const facts = [
  { to: 11, suffix: "+", label: "products built and launched" },
  { to: 3, suffix: "", label: "companies I've worked with" },
  { to: 50, suffix: "+", label: "EV charging stations running on my software" },
];

export function About() {
  return (
    <section id="about" className={`${section} bg-white`}>
      <div className={`${container} max-w-4xl`}>
        <Reveal>
          <span className={eyebrow}>About me</span>
        </Reveal>
        <Words
          delay={80}
          className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl"
          segments={[{ t: "I make technology" }, { t: "simple.", em: true }]}
        />
        <Reveal delay={200}>
          <p className="mt-8 text-xl leading-relaxed text-mu-body sm:text-2xl">
            I build the software behind your idea — the part customers see and everything working quietly behind it. I
            explain things in plain words, and I stay with you until it works.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <dl className="mt-16 grid gap-10 border-t border-mu-line pt-12 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-5xl font-semibold tracking-tight text-mu-accent sm:text-6xl">
                  <CountUp to={f.to} suffix={f.suffix} />
                </dt>
                <dd className="mt-3 text-lg leading-snug text-mu-body">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
