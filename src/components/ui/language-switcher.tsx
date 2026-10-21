"use client";

import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex font-mono text-xs">
      {locales.map((locale) => (
        // Plain <a> (not next/link): a document navigation lets the browser run the
        // cross-document view transition defined in globals.css. Each locale has its own root layout,
        // so Next.js would do a full page load here anyway.
        <a
          key={locale}
          href={switchLocalePath(pathname, locale)}
          hrefLang={locale}
          aria-current={locale === current ? "true" : undefined}
          className="rounded px-2 py-1 uppercase text-muted transition-colors hover:text-foreground aria-[current]:font-semibold aria-[current]:text-foreground"
        >
          {locale}
        </a>
      ))}
    </nav>
  );
}
