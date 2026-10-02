import { Fragment } from "react";

/**
 * Minimal, safe renderer for the assistant's markdown-ish answers: **bold**, `code`,
 * "- " / "• " / "1." lists, and paragraph breaks. Builds React nodes (no innerHTML),
 * so model output can never inject markup.
 */

function inline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**") && p.length > 4) return <strong key={`${keyPrefix}${i}`} className="font-bold">{p.slice(2, -2)}</strong>;
    if (p.startsWith("`") && p.endsWith("`") && p.length > 2) return <code key={`${keyPrefix}${i}`} className="rounded bg-mu-bg px-1.5 py-0.5 font-mono text-[0.85em]">{p.slice(1, -1)}</code>;
    return <Fragment key={`${keyPrefix}${i}`}>{p}</Fragment>;
  });
}

const BULLET = /^\s*(?:[-*•]|\d+[.)])\s+(.*)$/;

export function RichText({ text }: { text: string }) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) blocks.push(<p key={`p${blocks.length}`}>{inline(para.join(" "), `p${blocks.length}-`)}</p>);
    para = [];
  };
  const flushList = () => {
    if (list.length)
      blocks.push(
        <ul key={`l${blocks.length}`} className="ml-1 list-disc space-y-1 pl-4 marker:text-mu-accent">
          {list.map((li, i) => (
            <li key={i}>{inline(li, `l${blocks.length}-${i}-`)}</li>
          ))}
        </ul>,
      );
    list = [];
  };

  for (const raw of text.split("\n")) {
    const line = raw.trimEnd();
    const m = line.match(BULLET);
    if (m) {
      flushPara();
      list.push(m[1]);
    } else if (line.trim() === "") {
      flushPara();
      flushList();
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();

  return <div className="space-y-2">{blocks}</div>;
}
