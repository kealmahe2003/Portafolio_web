export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const projectsSegment: Record<Locale, string> = { es: "proyectos", en: "projects" };

export const projectsPath = (locale: Locale, slug?: string) =>
  `/${locale}/${projectsSegment[locale]}${slug ? `/${slug}` : ""}`;

// Equivalent page in the other language; falls back to that language's home.
export function switchLocalePath(pathname: string, to: Locale) {
  const [, , section, slug] = pathname.split("/");
  return Object.values(projectsSegment).includes(section)
    ? projectsPath(to, slug)
    : `/${to}`;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
