"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { dict, RTL_LANGS, type Lang, type Content } from "./dictionary";

type Dir = "rtl" | "ltr";

type Ctx = {
  lang: Lang;
  dir: Dir;
  t: Content;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "gsl-lang";

function dirFor(lang: Lang): Dir {
  return RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start at "en" so server and first client render match; a stored
  // preference is applied after mount (see effect below).
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && dict[saved]) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dirFor(lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return (
    <LangContext.Provider value={{ lang, dir: dirFor(lang), t: dict[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
