import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

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

// Set dir/lang before paint so returning RTL visitors don't see a layout flip.
const dirScript = `try{var l=localStorage.getItem('gsl-lang');if(l==='ar'||l==='ckb'){document.documentElement.dir='rtl';document.documentElement.lang=l;}else if(l){document.documentElement.lang=l;}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} ${arDisplay.variable} ${arBody.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: dirScript }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
