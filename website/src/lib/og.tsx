import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Branded 1200×630 share card (Open Graph / Twitter), rendered at build time. */
export function renderOgImage({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  const long = title.length > 38;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0e1424 0%, #172038 60%, #2b2f8f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <span>Vasudev</span>
          <span style={{ color: "#8b83ff" }}>.</span>
          {eyebrow ? <span style={{ marginLeft: 16, fontSize: 24, fontWeight: 500, color: "#ddd8ff" }}>{eyebrow}</span> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: long ? 64 : 80, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
          {subtitle ? <div style={{ fontSize: 32, lineHeight: 1.35, color: "#c9cde0", maxWidth: 980 }}>{subtitle.length > 140 ? `${subtitle.slice(0, 137)}…` : subtitle}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#b8bece" }}>
          <span>dsvasudev.in</span>
          <span>Hyderabad, India</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
