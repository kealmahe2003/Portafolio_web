"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/lib/projects-data";

function PosVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0c0f0a]">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 32px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/8 rounded-full blur-2xl" />
      <div className="absolute bottom-8 left-8 font-mono text-[120px] font-black text-amber-400/8 leading-none select-none">
        POS
      </div>
    </div>
  );
}

function EcommerceVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080b14]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/8 rounded-full blur-2xl" />
      <div className="absolute bottom-8 left-8 font-mono text-[100px] font-black text-blue-400/8 leading-none select-none">
        E-COM
      </div>
    </div>
  );
}

const visuals = { pos: PosVisual, ecommerce: EcommerceVisual };
const dotColors = { pos: "bg-amber-400", ecommerce: "bg-blue-400" };
const accentText = { pos: "text-amber-400", ecommerce: "text-blue-400" };
const accentBorder = { pos: "border-amber-500/20", ecommerce: "border-blue-500/20" };
const accentBg = { pos: "bg-amber-500/5", ecommerce: "bg-blue-500/5" };

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const t = project[lang];
  const Visual = visuals[project.visual];
  const dot = dotColors[project.visual];
  const accent = accentText[project.visual];
  const border = accentBorder[project.visual];
  const bg = accentBg[project.visual];

  return (
    <article className="px-4 sm:px-6 pb-24">
      <div className="container mx-auto max-w-5xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pt-10 mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Todos los proyectos" : "All projects"}
          </Link>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-border/60 mb-10"
        >
          <Visual />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Company + period overlay */}
          <div className="absolute bottom-5 left-6">
            <p className="text-xs font-mono text-white/50 mb-1">
              {t.company} · {t.period}
            </p>
            <p className="text-sm font-medium text-white/70">{t.role}</p>
          </div>
        </motion.div>

        {/* Title + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-loose max-w-2xl">
            {t.tagline}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl border ${border} ${bg} p-4 flex flex-col gap-1`}
            >
              <span className={`font-mono text-xl sm:text-2xl font-black ${accent}`}>
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Two column: description + features */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4 tracking-tight">
                {lang === "es" ? "Contexto" : "Context"}
              </h2>
              <p className="text-base text-muted-foreground leading-loose">
                {t.description}
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4 tracking-tight">
                {lang === "es" ? "Stack tecnológico" : "Tech stack"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-mono rounded-full border border-border text-muted-foreground bg-secondary/30 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 28, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <h2 className="text-lg font-bold text-foreground mb-4 tracking-tight">
              {lang === "es" ? "Funcionalidades" : "Features"}
            </h2>
            <ul className="flex flex-col gap-3">
              {t.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accent}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="border border-border/60 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              {lang === "es"
                ? "¿Tienes un proyecto similar?"
                : "Have a similar project?"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {lang === "es"
                ? "Hablemos y vemos cómo puedo ayudarte."
                : "Let's talk and see how I can help."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${border} ${bg} text-sm font-semibold ${accent} hover:opacity-80 transition-opacity`}
              >
                <ExternalLink className="w-4 h-4" />
                {lang === "es" ? "Ver sitio" : "Live site"}
              </a>
            )}
            <a
              href="mailto:kealmahe@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              {lang === "es" ? "Escribir ahora" : "Get in touch"}
            </a>
          </div>
        </motion.div>

      </div>
    </article>
  );
}
