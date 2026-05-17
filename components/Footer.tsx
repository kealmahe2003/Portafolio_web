"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const tNav = translations[lang].nav;

  const navLinks = [
    { label: tNav.home, href: "/" },
    { label: tNav.about, href: "/#about" },
    { label: tNav.experience, href: "/#experience" },
    { label: tNav.projects, href: "/projects" },
    { label: tNav.contact, href: "/#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-4 h-4" />,
      href: "https://github.com/kealmahe2003",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/kevinmarin-fullstack-dev",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:kealmahe@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-lg font-black tracking-tight text-foreground hover:text-primary transition-colors w-fit"
            >
              km<span className="text-blue-400">.</span>dev
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase">
              {t.nav}
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase">
              {t.contact}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:kealmahe@gmail.com" className="hover:text-foreground transition-colors">
                  kealmahe@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kevinmarin-fullstack-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  kevinmarin-fullstack-dev
                </a>
              </li>
              <li className="text-muted-foreground/60 text-xs font-mono">
                Zarzal, Valle del Cauca, CO
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <span>{t.copyright}</span>
          <span className="opacity-50">
            {t.built} Next.js + Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
