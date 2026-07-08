"use client";

import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Process.module.css";

export function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section className={styles.process} id="process">
      <div className="container">
        <header className={styles.head}>
          <p className={`eyebrow ${styles.eyebrow}`}>{p.eyebrow}</p>
          <h2 className={styles.heading}>{p.heading}</h2>
        </header>

        <ol className={styles.rail}>
          {p.steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.dot}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
