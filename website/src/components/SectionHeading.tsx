import { Reveal } from "./Reveal";

type Props = {
  title: string;
  subtitle?: string;
  label?: string;
  index?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({ title, subtitle, label, index, align = "left", invert = false }: Props) {
  const centered = align === "center";
  const muted = invert ? "text-muted-invert" : "text-muted";

  return (
    <div className={`relative mb-14 ${centered ? "text-center" : ""}`}>
      <Reveal>
        {(label || index) && (
          <p className={`eyebrow mb-3 ${centered ? "justify-center" : ""}`}>
            {index && <span className="highlight">{index}</span>}
            {label}
          </p>
        )}

        <h2 className="text-h2 text-balance">{title}</h2>

        {subtitle && (
          <p className={`mt-4 max-w-xl text-lg font-medium leading-relaxed ${muted} ${centered ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
