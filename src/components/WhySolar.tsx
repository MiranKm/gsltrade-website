import { IconBolt, IconCoins, IconSun, IconShield } from "./icons";
import { Reveal } from "./Reveal";
import { Spotlight } from "./Spotlight";
import type { Content } from "@/i18n/config";
import styles from "./WhySolar.module.css";

const icons = [IconBolt, IconCoins, IconSun, IconShield];

export function WhySolar({ t }: { t: Content }) {
  const w = t.why;

  return (
    <section className={styles.why} id="why">
      <div className="container">
        <Reveal>
          <header className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>{w.eyebrow}</p>
            <h2 className={styles.heading}>{w.heading}</h2>
            <p className={styles.sub}>{w.sub}</p>
          </header>
        </Reveal>

        <ul className={styles.grid}>
          {w.cards.map((c, i) => {
            const Icon = icons[i] ?? IconBolt;
            return (
              <li key={c.title}>
                <Reveal className={styles.reveal} delay={i * 80}>
                  <article className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.iconWrap}>
                        <Icon size={28} />
                      </span>
                      <span className={styles.cardIndex}>0{i + 1}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardBody}>{c.body}</p>
                    <Spotlight />
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
