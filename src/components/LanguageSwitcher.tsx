"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LANGS, type Content, type Lang } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={open ? styles.chevronOpen : styles.chevron}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12.5 4 4 10-10" />
    </svg>
  );
}

export function LanguageSwitcher({
  t,
  lang,
  variant = "bar",
}: {
  t: Content;
  lang: Lang;
  variant?: "bar" | "block";
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  function switchTo(next: Lang) {
    setOpen(false);
    if (next === lang) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${next}${hash}`);
  }

  return (
    <div ref={ref} className={`${styles.root} ${variant === "block" ? styles.block : ""}`}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.nav.language}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <GlobeIcon />
        <span className={styles.triggerLabel}>{current.name}</span>
        <ChevronIcon open={open} />
      </button>

      <ul className={`${styles.menu} ${open ? styles.open : ""}`} role="listbox">
        {LANGS.map((l) => (
          <li key={l.code} role="option" aria-selected={lang === l.code}>
            <button
              type="button"
              className={`${styles.item} ${lang === l.code ? styles.active : ""}`}
              onClick={() => switchTo(l.code)}
            >
              <span>{l.name}</span>
              {lang === l.code && <CheckIcon />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
