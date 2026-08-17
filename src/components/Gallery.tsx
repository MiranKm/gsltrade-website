import Image from "next/image";
import { Reveal } from "./Reveal";
import type { Content } from "@/i18n/config";
import styles from "./Gallery.module.css";

const PHOTOS = [
  { src: "/images/solar_1.jpeg", featured: true },
  { src: "/images/solar_2.jpeg" },
  { src: "/images/solar_3.jpeg" },
  { src: "/images/solar_5.jpeg" },
  { src: "/images/solar_8.jpeg" },
  { src: "/images/solar_12.jpeg" },
];

export function Gallery({ t }: { t: Content }) {
  const g = t.gallery;

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <Reveal>
          <header className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>{g.eyebrow}</p>
            <h2 className={styles.heading}>{g.heading}</h2>
          </header>
        </Reveal>

        <div className={styles.grid}>
          {PHOTOS.map((p, i) => (
            <Reveal
              key={p.src}
              className={`${styles.cell} ${p.featured ? styles.feature : ""}`}
              delay={(i % 3) * 80}
            >
              <Image
                src={p.src}
                alt={g.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.img}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
