import { mcp } from "@/data/site";
import { ChatPreview } from "./ChatPreview";
import { OpenAssistantButton } from "./OpenAssistantButton";
import { Words } from "./motion";
import { Reveal } from "./Reveal";
import { btnGhost, btnPrimary, container, eyebrow, section } from "./ui";

export function Agentic() {
  return (
    <section id="agentic-ai" className={`${section} bg-gradient-to-b from-mu-accent-soft to-mu-bg`}>
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className={eyebrow}>Ask an AI</span>
          </Reveal>
          <Words
            delay={80}
            className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl"
            segments={[{ t: "Don't feel like reading?" }, { t: "Just ask an AI.", em: true }]}
          />
          <Reveal delay={200}>
            <p className="mt-7 text-xl leading-relaxed text-mu-body">
              My portfolio is connected to AI assistants like Claude and ChatGPT. Ask them anything about my work and they
              answer from my real details — they can even book a call with me.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ChatPreview />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <OpenAssistantButton className={btnPrimary}>Ask it your own question</OpenAssistantButton>
              <a href={mcp.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>Connect it to Claude</a>
            </div>
            <p className="mt-4 text-base text-mu-muted">Works with Claude and ChatGPT</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
