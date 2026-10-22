"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  // Land on the same section in the other language: section ids are shared across locales.
  function keepSection(event: MouseEvent<HTMLAnchorElement>) {
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    // At the bottom of the page the last section can't reach the top of the viewport, so pick it directly.
    const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    const current = atBottom
      ? sections.at(-1)
      : sections.findLast((section) => section.getBoundingClientRect().top <= innerHeight / 3);
    event.currentTarget.hash = current?.id ?? "";
  }

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
          onClick={keepSection}
          aria-current={locale === current ? "true" : undefined}
          className="rounded px-2 py-1 uppercase text-muted transition-colors hover:text-foreground aria-[current]:font-semibold aria-[current]:text-foreground"
        >
          {locale}
        </a>
      ))}
    </nav>
  );
}
