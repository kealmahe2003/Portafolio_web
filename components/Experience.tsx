"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12"
        >
          {t.title}
        </motion.h2>

        <div className="relative flex flex-col gap-0">
          {/* Vertical timeline line */}
          <div className="absolute left-3.5 top-2 bottom-2 w-px bg-border hidden sm:block" />

          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 28,
                delay: index * 0.1,
              }}
              className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex items-start pt-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-background z-10" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                      {item.role}
                    </h3>
                    <span className="text-sm text-blue-400 font-medium">
                      {item.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-base text-muted-foreground leading-loose">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-border text-muted-foreground bg-secondary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
