"use client";

import { useEffect, useRef } from "react";

// A cursor-following "sunlight" wash. Renders a pointer-events:none layer that
// tracks the pointer within its parent card (which must be position:relative
// and overflow:hidden). No translation data flows through this component.
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    parent.addEventListener("pointermove", move);
    return () => parent.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
