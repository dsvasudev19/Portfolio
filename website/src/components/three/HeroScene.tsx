"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PersonAvatar = dynamic(() => import("./PersonAvatar").then((m) => m.PersonAvatar), {
  ssr: false,
});

export function HeroScene() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setShowScene(e.matches);
    const id = setTimeout(() => setShowScene(mq.matches), 0);
    mq.addEventListener("change", handler);
    return () => {
      clearTimeout(id);
      mq.removeEventListener("change", handler);
    };
  }, []);

  if (!showScene) return null;

  return (
    <div className="h-full w-full">
      <PersonAvatar />
    </div>
  );
}
