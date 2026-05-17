"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/lib/projects-data";

function PosVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0c0f0a]">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 32px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-16 left-8">
        <div className="font-mono text-7xl font-black text-amber-400/10 leading-none select-none">
          1.4k+
        </div>
      </div>
    </div>
  );
}

function EcommerceVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080b14]">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-16 left-8">
        <div className="font-mono text-7xl font-black text-blue-400/10 leading-none select-none">
          3wks
        </div>
      </div>
    </div>
  );
}

const visuals = { pos: PosVisual, ecommerce: EcommerceVisual };
const accentColors = { pos: "bg-amber-400", ecommerce: "bg-blue-400" };

export function Projects() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {lang === "es" ? "Proyectos" : "Projects"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {lang === "es"
              ? "Sistemas reales, en producción."
              : "Real systems, in production."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PROJECTS.map((project, index) => {
            const t = project[lang];
            const Visual = visuals[project.visual];
            const dot = accentColors[project.visual];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 28,
                  delay: index * 0.1,
                }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-border/60 h-[400px] flex flex-col transition-all duration-300 group-hover:border-border group-hover:shadow-lg group-hover:shadow-black/20">
                    {/* Visual */}
                    <div className="relative flex-1 overflow-hidden">
                      <Visual />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Stat badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                        <span className="text-xs font-mono text-white/75">
                          {t.stats[0].value}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 border-t border-border/40 flex flex-col gap-2.5">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-0.5">
                          {t.company} · {t.period}
                        </p>
                        <h3 className="text-lg font-bold text-foreground leading-snug">
                          {t.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {t.tagline}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[11px] font-mono rounded border border-border text-muted-foreground bg-secondary/30"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground/60">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-blue-400 transition-colors shrink-0">
                          {lang === "es" ? "Ver más" : "View"}
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
