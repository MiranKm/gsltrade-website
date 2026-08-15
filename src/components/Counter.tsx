"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = { value: number; decimals: number; rest: string };

function parse(value: string): Parsed | null {
  if (/\d+\s*\/\s*\d+/.test(value)) return null; // ratio like "24/7" — leave static
  const m = value.match(/^([0-9][0-9,.]*)(.*)$/);
  if (!m) return null;
  const raw = m[1].replace(/,/g, "");
  const n = parseFloat(raw);
  if (Number.isNaN(n)) return null;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { value: n, decimals, rest: m[2] };
}

function format(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Counts a number up when it scrolls into view. Non-numeric text (prefix or
// suffix like "+", "%", " kW") is preserved. Falls back to static under
// prefers-reduced-motion.
export function Counter({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const parsed = parse(value);
    const el = ref.current;
    if (!parsed || !el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          io.disconnect();
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return; // text already equals the final value
          }
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setText(format(parsed.value * eased, parsed.decimals) + parsed.rest);
            if (p < 1) requestAnimationFrame(tick);
            else setText(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
