import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Vasudev DS — Full-Stack Developer & Agentic AI Specialist";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Full-Stack Developer & Agentic AI Specialist",
    subtitle: "Production platforms, MCP servers and AI agents for startups — from architecture to launch.",
  });
}
