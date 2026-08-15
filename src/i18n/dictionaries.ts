// Server-only dictionary loader. Each locale is a separate chunk that is only
// loaded for the request that needs it — nothing ships to the client bundle.
// Only import this module from Server Components (pages/layouts), never from
// client code, so the translation payloads stay out of the browser bundle.
import type { Content, Lang } from "./config";

const dictionaries: Record<Lang, () => Promise<Content>> = {
  en: () => import("./messages/en.json").then((m) => m.default),
  ckb: () => import("./messages/ckb.json").then((m) => m.default),
  ar: () => import("./messages/ar.json").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Lang => locale in dictionaries;

export const getDictionary = (locale: Lang): Promise<Content> =>
  dictionaries[locale]();
