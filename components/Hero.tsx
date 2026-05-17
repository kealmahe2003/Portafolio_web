"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => t.rotatingWords, [t.rotatingWords]);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2000);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  // Reset index when language changes to avoid out-of-bounds
  useEffect(() => {
    setTitleNumber(0);
  }, [lang]);

  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex gap-6 py-20 lg:py-32 items-center justify-center flex-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Button
              variant="default"
              size="sm"
              neon={false}
              className="gap-2 text-xs sm:text-sm font-medium cursor-default"
              tabIndex={-1}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              {t.badge}
            </Button>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
            className="flex gap-2 flex-col"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl tracking-tighter text-center font-semibold leading-tight">
              <span className="text-foreground">{t.headline}</span>

              {/* Rotating words */}
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={`${lang}-${index}`}
                    className="absolute font-bold text-blue-400"
                    initial={{ opacity: 0, y: -60 }}
                    transition={{ type: "spring", stiffness: 200, damping: 28 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -80 : 80,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-loose tracking-tight text-muted-foreground max-w-2xl text-center mx-auto">
              {t.description}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link href="/projects">
              <Button variant="solid" size="lg" className="w-full sm:w-auto">
                {t.cta.primary}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.cta.secondary}
              <Mail className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 rounded-full bg-muted-foreground" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
