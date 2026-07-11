type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
};

export function Marquee({ children, reverse = false, speed = 28, className = "" }: Props) {
  const style = { animationDuration: `${speed}s`, animationDirection: reverse ? ("reverse" as const) : ("normal" as const) };

  return (
    <div className={`marquee-strip relative flex ${className}`}>
      <div className="marquee-track" style={style}>
        {children}
      </div>
      <div aria-hidden className="marquee-track" style={style}>
        {children}
      </div>
    </div>
  );
}
