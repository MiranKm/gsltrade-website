// Shared i18n configuration — small, client-safe, no translation payloads.
import type en from "./messages/en.json";

export type Lang = "en" | "ckb" | "ar";

export type Content = typeof en;

export const LANGS: { code: Lang; name: string }[] = [
  { code: "en", name: "English" },
  { code: "ckb", name: "کوردی" },
  { code: "ar", name: "العربية" },
];

export const RTL_LANGS: Lang[] = ["ckb", "ar"];

export function dirFor(lang: Lang): "rtl" | "ltr" {
  return RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}
