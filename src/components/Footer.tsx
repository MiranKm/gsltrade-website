"use client";

import { SunMark } from "./SunMark";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const columns = [
    { title: f.company, links: f.companyLinks },
    { title: f.services, links: f.servicesLinks },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <SunMark size={30} />
            <span>
              Golden Sunline <span className={styles.trade}>Trade</span>
            </span>
          </a>
          <p className={styles.tag}>{f.tagline}</p>
          <p className={styles.serving}>{f.serving}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className={styles.col} aria-label={col.title}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            {col.links.map((l, i) => (
              <a key={`${l.label}-${i}`} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>{f.rights}</p>
        <p className={styles.mono}>{f.built}</p>
      </div>
    </footer>
  );
}
