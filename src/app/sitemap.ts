import type { MetadataRoute } from "next";
import { locales, projectsPath, siteUrl, type Locale } from "@/i18n/config";
import { caseStudies } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    (l: Locale) => `/${l}`,
    ...caseStudies.map(({ slug }) => (l: Locale) => projectsPath(l, slug)),
  ];

  return pages.flatMap((path) =>
    locales.map((locale) => ({
      url: siteUrl + path(locale),
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, siteUrl + path(l)])) },
    })),
  );
}
