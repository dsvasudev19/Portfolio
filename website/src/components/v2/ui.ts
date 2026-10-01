const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mu-accent";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold leading-none transition duration-300 " +
  focus;

export const btnPrimary = `${btn} bg-mu-ink text-white hover:bg-mu-accent`;
export const btnAccent = `${btn} bg-mu-accent text-white hover:bg-mu-ink`;
export const btnGhost = `${btn} border border-mu-ink/20 bg-white/60 text-mu-ink hover:border-mu-ink hover:bg-white`;
export const btnGhostDark = `${btn} border border-white/25 text-white hover:border-white hover:bg-white/10`;

export const eyebrow =
  "inline-flex items-center gap-2 rounded-full border border-mu-line bg-white px-4 py-1.5 text-sm font-semibold text-mu-accent";
export const eyebrowDark =
  "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-mu-lilac";

export const h2 =
  "text-4xl font-semibold leading-[1.08] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl text-balance";
export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12";
export const section = "py-20 lg:py-32";
export const tag =
  "rounded-full border border-mu-line bg-mu-bg px-3 py-1 text-[0.8rem] font-medium leading-snug text-mu-body";
