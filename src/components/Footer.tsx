import { SunMark } from "./SunMark";
import { Reveal } from "./Reveal";
import type { Content } from "@/i18n/config";
import styles from "./Footer.module.css";

export function Footer({ t }: { t: Content }) {
  const f = t.footer;

  const columns = [
    { title: f.company, links: f.companyLinks },
    { title: f.services, links: f.servicesLinks },
  ];

  return (
    <footer className={styles.footer}>
      <Reveal className={`container ${styles.grid}`}>
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
      </Reveal>

      <div className={`container ${styles.bottom}`}>
        <p>{f.rights}</p>
        <p className={styles.mono}>{f.built}</p>
      </div>
    </footer>
  );
}
