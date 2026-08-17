import Image from "next/image";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import type { Content } from "@/i18n/config";
import styles from "./About.module.css";

export function About({ t }: { t: Content }) {
  const a = t.about;

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
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
        </Reveal>

        {/* A real installation behind the live-yield readout */}
        <Reveal className={styles.panelCol} delay={140} y={32}>
          <div className={styles.panelCard}>
            <div className={styles.panel}>
              <Image
                src="/images/solar_6.jpeg"
                alt={t.gallery.alt}
                fill
                sizes="(max-width: 860px) 100vw, 420px"
                className={styles.photo}
              />
              <div className={styles.readout}>
                <div>
                  <span className={styles.readLabel}>{a.panelLabel}</span>
                  <span className={styles.readValue}>
                    <Counter value={a.panelValue} duration={1800} />
                  </span>
                </div>
                <div className={styles.spark}>
                  <svg viewBox="0 0 120 40" preserveAspectRatio="none" width="120" height="40">
                    <path
                      pathLength={1}
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
        </Reveal>
      </div>
    </section>
  );
}
