"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

type NavLink = {
  label: string;
  // page links use href, home-anchor links use anchor (only when on "/")
  href?: string;
  anchor?: string;
};

export function Navbar() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Ordered: Inicio, Sobre mí, Experiencia, Proyectos, Contacto
  const links: NavLink[] = [
    { label: t.home,       href: "/",         anchor: "#top"        },
    { label: t.about,      href: "/#about",   anchor: "#about"      },
    { label: t.experience, href: "/#experience", anchor: "#experience" },
    { label: t.projects,   href: "/projects"                         },
    { label: t.contact,    href: "/#contact", anchor: "#contact"     },
  ];

  const handleClick = (link: NavLink) => {
    setMenuOpen(false);
    if (isHome && link.anchor) {
      if (link.anchor === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(link.anchor)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    // if not home, navigation is handled by <Link> in the render
  };

  const key = (link: NavLink) => link.href ?? link.anchor ?? link.label;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border/60"
            : "bg-background/50 backdrop-blur-md border-b border-white/5"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <nav className="container mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => {
              setMenuOpen(false);
              if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
            aria-label="Inicio"
          >
            {!isHome ? (
              <Link href="/" className="flex items-center gap-3">
                <LogoText cursorVisible={cursorVisible} lang={lang} />
              </Link>
            ) : (
              <LogoText cursorVisible={cursorVisible} lang={lang} />
            )}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" onMouseLeave={() => setHovered(null)}>
            {links.map((link) => {
              const k = key(link);
              const cls =
                "relative px-4 py-5 text-[0.875rem] font-semibold text-foreground/55 hover:text-foreground transition-colors cursor-pointer tracking-wide";

              const inner = (
                <>
                  {hovered === k && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 inset-x-4 h-px bg-blue-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </>
              );

              // On home page + has anchor → button with smooth scroll
              if (isHome && link.anchor) {
                return (
                  <button
                    key={k}
                    onClick={() => handleClick(link)}
                    onMouseEnter={() => setHovered(k)}
                    className={cls}
                  >
                    {inner}
                  </button>
                );
              }

              // Otherwise → Link (page navigation or cross-page anchor)
              return (
                <Link
                  key={k}
                  href={link.href!}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => setHovered(k)}
                  className={cls}
                >
                  {inner}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="font-mono text-xs h-7 px-3 rounded-full border border-border/60 bg-white/3 hover:bg-white/8 hover:border-border text-muted-foreground hover:text-foreground transition-all"
              aria-label="Toggle language"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.12 }}
                >
                  {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="fixed top-16 inset-x-0 z-40 bg-background/96 backdrop-blur-lg border-b border-border md:hidden"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {links.map((link, i) => {
                const k = key(link);
                const cls =
                  "text-left px-2 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors border-b border-border/40 last:border-0 block w-full";

                if (isHome && link.anchor) {
                  return (
                    <motion.button
                      key={k}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30, delay: i * 0.05 }}
                      onClick={() => handleClick(link)}
                      className={cls}
                    >
                      {link.label}
                    </motion.button>
                  );
                }

                return (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, delay: i * 0.05 }}
                  >
                    <Link href={link.href!} onClick={() => setMenuOpen(false)} className={cls}>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="flex items-center gap-1.5 px-2 py-3 text-[11px] text-green-400/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                {lang === "es" ? "Disponible para proyectos" : "Available for projects"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoText({ cursorVisible, lang }: { cursorVisible: boolean; lang: string }) {
  return (
    <span className="font-mono font-black tracking-tight leading-none text-[1.25rem]">
      <span className="text-foreground">km</span>
      <span className="text-blue-400">.</span>
      <span className="text-foreground/60 group-hover:text-foreground/85 transition-colors">dev</span>
      <span
        className="text-blue-400 ml-0.5 transition-opacity"
        style={{ opacity: cursorVisible ? 1 : 0 }}
        aria-hidden
      >
        _
      </span>
    </span>
  );
}
