/** Classic serif-italic accent used inside sans headlines. */
export function Em({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <em
      className={`font-[family-name:var(--font-mu-serif)] font-normal italic tracking-normal ${className || "text-mu-accent"}`}
    >
      {children}
    </em>
  );
}
