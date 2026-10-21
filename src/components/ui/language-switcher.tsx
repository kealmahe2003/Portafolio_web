"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex font-mono text-xs">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={switchLocalePath(pathname, locale)}
          hrefLang={locale}
          aria-current={locale === current ? "true" : undefined}
          className="rounded px-2 py-1 uppercase text-muted hover:text-foreground aria-[current]:font-semibold aria-[current]:text-foreground"
        >
          {locale}
        </Link>
      ))}
    </nav>
  );
}
