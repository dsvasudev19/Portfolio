import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Header } from "@/components/v2/Header";
import { Footer } from "@/components/v2/Footer";
import { ScrollBar } from "@/components/v2/motion";
import { AssistantWidget } from "@/components/v2/assistant/AssistantWidget";

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-mu-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "Vasudev DS — Full-Stack Engineer & Agentic AI Specialist" },
  description:
    "Software engineer building dependable full-stack platforms and agentic AI systems for startups — from first architecture to launch.",
  // Preview of the redesign; the classic site stays the indexed canonical.
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${sans.className} ${serif.variable} min-h-screen overflow-x-clip bg-mu-bg text-[17px] leading-relaxed text-mu-body antialiased selection:bg-mu-lilac selection:text-mu-ink lg:text-[18px]`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mu-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <AssistantWidget />
    </div>
  );
}
