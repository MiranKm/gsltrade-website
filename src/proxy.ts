import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "ckb", "ar"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

// Map a browser Accept-Language header onto one of our supported locales.
function preferredLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const scored = header
    .split(",")
    .map((part) => {
      const [rawCode, ...params] = part.trim().split(";");
      const code = (rawCode || "").split("-")[0].toLowerCase();
      const qParam = params.find((p) => p.trim().toLowerCase().startsWith("q="));
      const q = qParam ? parseFloat(qParam.trim().slice(2)) : 1;
      return { code, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of scored) {
    if ((LOCALES as readonly string[]).includes(code)) return code as Locale;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = preferredLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals and any file-like path (assets, favicon, etc.).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
