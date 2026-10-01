import { Hero } from "@/components/v2/Hero";
import { About } from "@/components/v2/About";
import { Approach } from "@/components/v2/Approach";
import { Agentic } from "@/components/v2/Agentic";
import { Work } from "@/components/v2/Work";
import { Skills } from "@/components/v2/Skills";
import { Experience } from "@/components/v2/Experience";
import { Contact } from "@/components/v2/Contact";

export default function V2Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <Agentic />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
