import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const LOCALES = ["en", "ckb", "ar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        ckb: `${SITE_URL}/ckb`,
        ar: `${SITE_URL}/ar`,
      },
    },
  }));
}
