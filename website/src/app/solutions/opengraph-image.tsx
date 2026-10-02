import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Solutions by Vasudev DS — productized services and platforms";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Solutions",
    title: "Productized services & platforms for startups",
    subtitle: "MVP sprints, agentic AI integration, and platforms licensed to your organization.",
  });
}
