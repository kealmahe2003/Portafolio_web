"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Photo — 16:9 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border">
              <Image
                src="/kev.png"
                alt="Kevin Alexander Marín"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 200, damping: 28, delay: 0.08 }}
            className="flex flex-col gap-5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-loose">
              {t.body}
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-blue-400" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 shrink-0 text-blue-400" />
                <span>{t.education}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
