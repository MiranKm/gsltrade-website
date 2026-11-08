import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { dirFor, type Content, type Lang } from "@/i18n/config";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Fonts are self-hosted (src/fonts) rather than loaded via next/font/google,
// so builds never depend on fetching from Google Fonts at build time.
const display = localFont({
  src: "../../fonts/space-grotesk-latin-var.woff2",
  variable: "--font-display",
  weight: "400 700",
  display: "swap",
});

const body = localFont({
  src: "../../fonts/inter-latin-var.woff2",
  variable: "--font-body",
  weight: "400 700",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "../../fonts/ibm-plex-mono-latin-400.woff2", weight: "400" },
    { path: "../../fonts/ibm-plex-mono-latin-500.woff2", weight: "500" },
    { path: "../../fonts/ibm-plex-mono-latin-600.woff2", weight: "600" },
  ],
  variable: "--font-mono",
  display: "swap",
});

// Arabic-script faces cover both Arabic and Kurdish (Sorani).
const arDisplay = localFont({
  src: "../../fonts/noto-kufi-arabic-var.woff2",
  variable: "--font-ar-display",
  weight: "400 700",
  display: "swap",
});

const arBody = localFont({
  src: "../../fonts/noto-sans-arabic-var.woff2",
  variable: "--font-ar-body",
  weight: "400 700",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b1a",
};

// Structured data for local search, derived from the localized business info.
function buildJsonLd(business: Content["business"]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: business.email,
        telephone: [business.phone, business.phone2].map((p) => p.replace(/[^\d+]/g, "")),
        address: business.address,
        areaServed: ["Erbil", "Sulaymaniyah", "Duhok", "Kirkuk", "Baghdad", "Basra"],
        image: `${SITE_URL}/images/solar_1.jpeg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ["en", "ckb", "ar"],
      },
    ],
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ckb" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const t = await getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: SITE_NAME,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ckb: "/ckb",
        ar: "/ar",
      } as Record<string, string>,
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}`,
      siteName: SITE_NAME,
      type: "website",
      locale: lang === "ar" ? "ar" : lang === "ckb" ? "ckb" : "en_US",
      images: [
        {
          url: "/images/solar_1.jpeg",
          width: 1600,
          height: 1060,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/solar_1.jpeg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const dir = dirFor(locale as Lang);
  const t = hasLocale(lang) ? await getDictionary(lang) : null;

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${display.variable} ${body.variable} ${mono.variable} ${arDisplay.variable} ${arBody.variable}`}
    >
      <body>
        <ScrollProgress />
        {children}
        {t && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(t.business)) }}
          />
        )}
      </body>
    </html>
  );
}
