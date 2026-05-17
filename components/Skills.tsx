"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway,
  SiPostman,
  SiFigma,
  SiJira,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

type SkillEntry = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const skillData: Record<"frontend" | "backend" | "tools", SkillEntry[]> = {
  frontend: [
    { label: "React",        Icon: SiReact },
    { label: "Next.js",      Icon: SiNextdotjs },
    { label: "Angular",      Icon: SiAngular },
    { label: "Tailwind CSS", Icon: SiTailwindcss },
    { label: "TypeScript",   Icon: SiTypescript },
  ],
  backend: [
    { label: "Node.js",      Icon: SiNodedotjs },
    { label: "Express",      Icon: SiExpress },
    { label: "Java",         Icon: FaJava },
    { label: "Python",       Icon: SiPython },
    { label: "Prisma ORM",   Icon: SiPrisma },
    { label: "PostgreSQL",   Icon: SiPostgresql },
  ],
  tools: [
    { label: "Git",      Icon: SiGit },
    { label: "GitHub",   Icon: SiGithub },
    { label: "Vercel",   Icon: SiVercel },
    { label: "Railway",  Icon: SiRailway },
    { label: "Postman",  Icon: SiPostman },
    { label: "Figma",    Icon: SiFigma },
    { label: "Jira",     Icon: SiJira },
  ],
};

function SkillBadge({
  label,
  Icon,
  delay,
}: SkillEntry & { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 400, damping: 30, delay }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono
        bg-secondary/60 border border-border text-muted-foreground
        hover:border-blue-400/40 hover:text-foreground hover:bg-secondary
        transition-colors duration-200 cursor-default select-none"
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {label}
    </motion.span>
  );
}

export function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
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

        <div className="flex flex-col gap-10">
          {(["frontend", "backend", "tools"] as const).map((category) => (
            <div key={category} className="flex flex-col gap-3">
              <motion.h3
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="text-xs font-mono uppercase tracking-widest text-blue-400"
              >
                {t[category]}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {skillData[category].map(({ label, Icon }, i) => (
                  <SkillBadge
                    key={label}
                    label={label}
                    Icon={Icon}
                    delay={i * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
