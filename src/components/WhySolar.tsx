"use client";

import { IconBolt, IconCoins, IconSun, IconShield } from "./icons";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./WhySolar.module.css";

const icons = [IconBolt, IconCoins, IconSun, IconShield];

export function WhySolar() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section className={styles.why} id="why">
      <div className="container">
        <header className={styles.head}>
          <p className={`eyebrow ${styles.eyebrow}`}>{w.eyebrow}</p>
          <h2 className={styles.heading}>{w.heading}</h2>
          <p className={styles.sub}>{w.sub}</p>
        </header>

        <ul className={styles.grid}>
          {w.cards.map((c, i) => {
            const Icon = icons[i] ?? IconBolt;
            return (
              <li key={c.title} className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon size={24} />
                </span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
