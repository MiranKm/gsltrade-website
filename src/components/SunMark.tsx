import { SITE_NAME } from "@/lib/site";

/* Brand mark — a sun cresting its generation arc (the "golden sunline"). */
export function SunMark({
  size = 34,
  title = SITE_NAME,
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22 C 10 22, 12 11, 16 11 C 20 11, 22 22, 28 22"
        stroke="url(#sunmark-g)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="12" r="4.2" fill="url(#sunmark-g)" />
      <defs>
        <linearGradient
          id="sunmark-g"
          x1="4"
          y1="11"
          x2="28"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffcc55" />
          <stop offset="1" stopColor="#ff7a3c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
