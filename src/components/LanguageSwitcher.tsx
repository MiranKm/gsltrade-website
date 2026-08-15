"use client";

import { useRouter } from "next/navigation";
import { LANGS, type Content, type Lang } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

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

  function switchTo(next: Lang) {
    if (next === lang) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${next}${hash}`);
  }

  return (
    <div
      className={`${styles.switch} ${variant === "block" ? styles.block : ""}`}
      role="group"
      aria-label={t.nav.language}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`${styles.opt} ${lang === l.code ? styles.active : ""}`}
          aria-pressed={lang === l.code}
          onClick={() => switchTo(l.code)}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
