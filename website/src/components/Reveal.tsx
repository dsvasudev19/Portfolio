"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale" | "left" | "right";
};

const variants: Record<NonNullable<Props["variant"]>, Variants> = {
  up: {
    hidden: { opacity: 0, y: 46 },
    show: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88, y: 24 },
    show: { opacity: 1, scale: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -46 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 46 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({ children, className = "", delay = 0, variant = "up" }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
