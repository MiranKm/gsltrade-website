import { Reveal } from "./Reveal";
import type { Content } from "@/i18n/config";
import styles from "./Process.module.css";

export function Process({ t }: { t: Content }) {
  const p = t.process;

  return (
    <section className={styles.process} id="process">
      <div className="container">
        <Reveal>
          <header className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>{p.eyebrow}</p>
            <h2 className={styles.heading}>{p.heading}</h2>
          </header>
        </Reveal>

        <ol className={styles.rail}>
          {p.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal className={styles.step} delay={i * 90}>
                <span className={styles.dot}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
