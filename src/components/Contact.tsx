import { Reveal } from "./Reveal";
import type { Content } from "@/i18n/config";
import styles from "./Contact.module.css";

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

// "(+964) 7710007474" -> "+9647710007474" for tel: links.
function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Contact({ t }: { t: Content }) {
  const c = t.contact;
  const b = t.business;

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <Reveal>
          <p className={`eyebrow ${styles.eyebrow}`}>{c.eyebrow}</p>
          <h2 className={styles.heading}>
            {c.headingLine} <span className={styles.accent}>{c.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{c.sub}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.contacts}>
            <a href={`mailto:${b.email}`} className={styles.contactLink}>
              <MailIcon />
              <span dir="ltr">{b.email}</span>
            </a>
            {[b.phone, b.phone2].map((phone) => (
              <a key={phone} href={telHref(phone)} className={styles.contactLink}>
                <PhoneIcon />
                <span dir="ltr">{phone}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
