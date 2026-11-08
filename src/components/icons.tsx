/* Consistent 24x24 line icons — stroke uses currentColor. */
type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function IconHome({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M12 8.5v3.5m0 0 2 1.4M12 12l-2 1.4" />
    </svg>
  );
}

export function IconBuilding({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M4 20h16" />
      <path d="M6 20V6l7-2v16" />
      <path d="M13 20V9l5 1.5V20" />
      <path d="M9 8h1M9 11h1M9 14h1" />
    </svg>
  );
}

export function IconBattery({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="8" width="15" height="9" rx="2" />
      <path d="M18 11h2v3h-2" />
      <path d="m10 9.5-2 3.2h2.4L8.6 16" />
    </svg>
  );
}

export function IconPanel({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="m3 15 2.4-8h13.2L21 15z" />
      <path d="M3 15h18" />
      <path d="M9 7 8 15M15 7l1 8M4.6 11h14.8" />
      <path d="M12 15v4M9 20h6" />
    </svg>
  );
}

export function IconWrench({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M15.5 4.5a4 4 0 0 0-5 5L4 16v4h4l6.5-6.5a4 4 0 0 0 5-5l-2.6 2.6-2.5-.4-.4-2.5z" />
    </svg>
  );
}

export function IconChart({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M4 4v16h16" />
      <path d="M7 15c2.5 0 3-7 5.5-7S16 12 20 8" />
    </svg>
  );
}

export function IconArrow({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconBolt({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M13 3 5 13h5l-1 8 8-10h-5z" />
    </svg>
  );
}

export function IconCoins({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <ellipse cx="9" cy="7" rx="5.5" ry="2.6" />
      <path d="M3.5 7v4c0 1.44 2.46 2.6 5.5 2.6s5.5-1.16 5.5-2.6V7" />
      <path d="M9 13.6v3.8c0 1.44 2.46 2.6 5.5 2.6s5.5-1.16 5.5-2.6v-4c0-1.44-2.46-2.6-5.5-2.6" />
    </svg>
  );
}

export function IconSun({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconShield({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function IconTarget({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconEye({ size = 24 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
