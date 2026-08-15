import {
  IconHome,
  IconBuilding,
  IconBattery,
  IconBolt,
  IconPanel,
  IconWrench,
} from "./icons";
import { Reveal } from "./Reveal";
import { Spotlight } from "./Spotlight";
import type { Content } from "@/i18n/config";
import styles from "./Services.module.css";

const icons = [IconHome, IconBuilding, IconBattery, IconBolt, IconPanel, IconWrench];

export function Services({ t }: { t: Content }) {
  const s = t.services;

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <Reveal>
          <header className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>{s.eyebrow}</p>
            <h2 className={styles.heading}>{s.heading}</h2>
            <p className={styles.sub}>{s.sub}</p>
          </header>
        </Reveal>

        <ul className={styles.grid}>
          {s.items.map((item, i) => {
            const Icon = icons[i] ?? IconHome;
            return (
              <li key={item.title}>
                <Reveal className={styles.reveal} delay={(i % 3) * 80}>
                  <article className={styles.card}>
                    <span className={styles.iconWrap}>
                      <Icon size={24} />
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardBody}>{item.body}</p>
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
