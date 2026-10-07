/**
 * Override these per-site. Consumed by BaseLayout (JSON-LD WebSite),
 * llms.txt, and llms-full.txt. Consumers may extend this module with
 * an AUTHOR and thread it through PostLayout / rss.
 */
export const SITE_NAME = "Lucas Lima Tavares";
export const SITE_BLURB =
  "Notes on Laravel, backend engineering, cloud infrastructure, and the systems behind reliable software.";

export const AUTHOR = {
  name: "Lucas Lima Tavares",
  url: "https://lucasltavares.github.io/",
} as const;
