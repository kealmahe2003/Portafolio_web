import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const anchors = [
    ["projects", dict.nav.projects],
    ["about", dict.nav.about],
    ["contact", dict.nav.contact],
  ] as const;

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5">
        <Link href={`/${locale}`} className="font-mono text-sm font-semibold">
          kevin.marín
        </Link>
        <nav className="hidden gap-6 text-sm text-muted sm:flex">
          {anchors.map(([id, label]) => (
            <Link key={id} href={`/${locale}#${id}`} className="hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} label={dict.nav.language} />
          <ThemeToggle label={dict.nav.toggleTheme} />
        </div>
      </div>
    </header>
  );
}
