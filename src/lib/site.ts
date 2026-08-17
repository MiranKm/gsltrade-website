// Central site identity — used for SEO metadata, sitemap, robots, JSON-LD,
// and the brand mark in the header/footer.
// Update SITE_URL to the production domain before deploy.
export const SITE_URL = "https://www.goldensunline.iq";
export const SITE_NAME = "Golden Sunline Trade";

// Split the brand name into its last word ("Trade") and the rest, so the
// last word can be accented in the header/footer without hardcoding it.
export function brandNameParts(name: string): { prefix: string; suffix: string } {
  const i = name.lastIndexOf(" ");
  if (i === -1) return { prefix: name, suffix: "" };
  return { prefix: name.slice(0, i), suffix: name.slice(i + 1) };
}
