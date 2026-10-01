"use client";

import { usePathname } from "next/navigation";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";

/** Classic-site-only effects. The /v2 redesign brings its own chrome. */
export function ClassicChrome() {
  const pathname = usePathname();
  if (pathname?.startsWith("/v2")) return null;
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}
