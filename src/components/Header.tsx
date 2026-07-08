"use client";

import { useEffect, useState } from "react";
import { SunMark } from "./SunMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/i18n/LanguageProvider";
import styles from "./Header.module.css";

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.solid : ""} ${
        open ? styles.menuOpen : ""
      }`}
    >
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="Golden Sunline Trade — home">
          <SunMark size={30} />
          <span className={styles.brandText}>
            Golden Sunline <span className={styles.brandTrade}>Trade</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <a href="#contact" className={styles.cta}>
            {t.nav.quote}
          </a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? t.nav.close : t.nav.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={styles.mobilePanel} hidden={!open}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className={styles.mobileSwitch}>
            <LanguageSwitcher variant="block" />
          </div>
          <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
            {t.nav.quote}
          </a>
        </nav>
      </div>
    </header>
  );
}
