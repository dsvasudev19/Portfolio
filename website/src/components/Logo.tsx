import Link from "next/link";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      id="nav-logo"
      href="/"
      className="text-xl font-extrabold tracking-tight sm:text-2xl"
      style={{ color: invert ? "var(--cream)" : "var(--ink)" }}
    >
      Vasu<span className="highlight">.dev</span>
    </Link>
  );
}
