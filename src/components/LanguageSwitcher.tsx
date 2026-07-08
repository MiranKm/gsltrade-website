"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/dictionary";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({ variant = "bar" }: { variant?: "bar" | "block" }) {
  const { lang, setLang, t } = useLang();
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
          onClick={() => setLang(l.code)}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
