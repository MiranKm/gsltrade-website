"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

// Scroll-triggered reveal wrapper. Renders a <div> that fades/slides into
// view once, then stays. Respects prefers-reduced-motion (shows immediately).
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mergedStyle: CSSProperties = {
    ...style,
    ["--rd" as string]: `${delay}ms`,
    ["--ry" as string]: `${y}px`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={mergedStyle}
      data-reveal={shown ? "shown" : "hidden"}
    >
      {children}
    </div>
  );
}
