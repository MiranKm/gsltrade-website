import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import "../globals.css";
import { dirFor, type Lang } from "@/i18n/config";
import { hasLocale } from "@/i18n/dictionaries";
import { ScrollProgress } from "@/components/ScrollProgress";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Arabic-script faces cover both Arabic and Kurdish (Sorani).
const arDisplay = Noto_Kufi_Arabic({
  variable: "--font-ar-display",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const arBody = Noto_Sans_Arabic({
  variable: "--font-ar-body",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Sunline Trade — Solar & storage for the Kurdistan Region & Iraq",
  description:
    "Golden Sunline Trade designs, supplies, and installs solar-and-battery systems across the Kurdistan Region and Iraq — power that keeps running through the outages.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Golden Sunline Trade",
    description:
      "Solar and battery power for the Kurdistan Region and Iraq — runs when the grid and the generator don't.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b1a",
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ckb" }, { lang: "ar" }];
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

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${display.variable} ${body.variable} ${mono.variable} ${arDisplay.variable} ${arBody.variable}`}
    >
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
