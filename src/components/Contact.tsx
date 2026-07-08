"use client";

import { useState } from "react";
import { IconArrow } from "./icons";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={`eyebrow ${styles.eyebrow}`}>{c.eyebrow}</p>
          <h2 className={styles.heading}>
            {c.headingLine} <span className={styles.accent}>{c.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{c.sub}</p>

          <dl className={styles.details}>
            {c.details.map((d) => (
              <div key={d.label} className={styles.detail}>
                <dt>{d.label}</dt>
                <dd>{"href" in d && d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.card}>
          {sent ? (
            <div className={styles.success} role="status">
              <span className={styles.tick} aria-hidden>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path
                    d="m5 12.5 4 4 10-10"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>{f.successTitle}</h3>
              <p>{f.successBody}</p>
              <button type="button" className={styles.reset} onClick={() => setSent(false)}>
                {f.reset}
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span>{f.name}</span>
                  <input type="text" name="name" required autoComplete="name" placeholder={f.namePh} />
                </label>
                <label className={styles.field}>
                  <span>{f.email}</span>
                  <input type="email" name="email" required autoComplete="email" placeholder={f.emailPh} />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>
                    {f.phone} <em>{f.phoneOpt}</em>
                  </span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder={f.phonePh} />
                </label>
                <label className={styles.field}>
                  <span>{f.type}</span>
                  <select name="type" defaultValue="0">
                    {f.typeOptions.map((opt, i) => (
                      <option key={opt} value={i}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span>{f.message}</span>
                <textarea name="message" rows={4} placeholder={f.messagePh} />
              </label>

              <button type="submit" className={styles.submit}>
                {f.submit}
                <IconArrow size={17} />
              </button>
              <p className={styles.fineprint}>{f.fineprint}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
