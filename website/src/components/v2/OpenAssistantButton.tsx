"use client";

import { openAssistant } from "./assistant/AssistantWidget";

export function OpenAssistantButton({ className, children, question }: { className?: string; children: React.ReactNode; question?: string }) {
  return (
    <button type="button" className={className} onClick={() => openAssistant(question)}>
      {children}
    </button>
  );
}
