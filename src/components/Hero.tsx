"use client";

import { IconArrow } from "./icons";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.sky} aria-hidden />
      <div className={styles.stars} aria-hidden />

      {/* Signature: the solar generation arc — a panel's real output from
          sunrise to sunset, drawn as the "golden sunline". */}
      <div className={styles.arcWrap} aria-hidden>
        <svg className={styles.arc} viewBox="0 0 1200 340" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ff7a3c" />
              <stop offset="0.5" stopColor="#ffcc55" />
              <stop offset="1" stopColor="#ff7a3c" />
            </linearGradient>
            <linearGradient id="fill" x1="0" y1="60" x2="0" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="rgba(255,176,32,0.34)" />
              <stop offset="1" stopColor="rgba(255,176,32,0)" />
            </linearGradient>
          </defs>
          <path
            className={styles.arcFill}
            d="M0 330 C 260 330, 380 84, 600 84 C 820 84, 940 330, 1200 330 L 1200 340 L 0 340 Z"
            fill="url(#fill)"
          />
          <path
            className={styles.arcLine}
            pathLength={1}
            d="M0 330 C 260 330, 380 84, 600 84 C 820 84, 940 330, 1200 330"
            fill="none"
            stroke="url(#line)"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.sun} />
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{h.eyebrow}</p>

        <h1 className={styles.title}>
          {h.titleLine} <span className={styles.titleAccent}>{h.titleAccent}</span>
        </h1>

        <p className={styles.lede}>{h.lede}</p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.primary}>
            {h.ctaPrimary}
            <IconArrow size={17} />
          </a>
          <a href="#services" className={styles.secondary}>
            {h.ctaSecondary}
          </a>
        </div>

        <dl className={styles.ticker}>
          {h.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
