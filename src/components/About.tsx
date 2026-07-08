"use client";

import { useLang } from "@/i18n/LanguageProvider";
import styles from "./About.module.css";

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>{a.eyebrow}</p>
          <h2 className={styles.heading}>{a.heading}</h2>
          <p className={styles.body}>{a.body1}</p>
          <p className={styles.body}>{a.body2}</p>

          <ul className={styles.list}>
            {a.highlights.map((h) => (
              <li key={h}>
                <span className={styles.check} aria-hidden>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                    <path
                      d="m5 12.5 4 4 10-10"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* CSS-built module: a photovoltaic panel with a live-yield readout */}
        <div className={styles.panelCard} aria-hidden>
          <div className={styles.panel}>
            <div className={styles.cells}>
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className={styles.cell} />
              ))}
            </div>
            <span className={styles.glare} />
          </div>
          <div className={styles.readout}>
            <div>
              <span className={styles.readLabel}>{a.panelLabel}</span>
              <span className={styles.readValue}>{a.panelValue}</span>
            </div>
            <div className={styles.spark}>
              <svg viewBox="0 0 120 40" preserveAspectRatio="none" width="120" height="40">
                <path
                  d="M2 34 C 22 34, 30 8, 46 8 C 62 8, 70 26, 84 20 C 98 14, 104 22, 118 16"
                  fill="none"
                  stroke="url(#spark)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="120" y2="0">
                    <stop offset="0" stopColor="#ff7a3c" />
                    <stop offset="1" stopColor="#ffcc55" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
