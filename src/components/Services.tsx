"use client";

import {
  IconHome,
  IconBuilding,
  IconBattery,
  IconBolt,
  IconPanel,
  IconWrench,
} from "./icons";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Services.module.css";

const icons = [IconHome, IconBuilding, IconBattery, IconBolt, IconPanel, IconWrench];

export function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <header className={styles.head}>
          <p className={`eyebrow ${styles.eyebrow}`}>{s.eyebrow}</p>
          <h2 className={styles.heading}>{s.heading}</h2>
          <p className={styles.sub}>{s.sub}</p>
        </header>

        <ul className={styles.grid}>
          {s.items.map((item, i) => {
            const Icon = icons[i] ?? IconHome;
            return (
              <li key={item.title} className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon size={24} />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
