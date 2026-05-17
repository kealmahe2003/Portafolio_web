"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

const contactLinks = [
  {
    Icon: Mail,
    labelKey: "emailLabel" as const,
    value: "kealmahe@gmail.com",
    href: "mailto:kealmahe@gmail.com",
  },
  {
    Icon: LinkedinIcon,
    labelKey: "linkedinLabel" as const,
    value: "kevinmarin-fullstack-dev",
    href: "https://linkedin.com/in/kevinmarin-fullstack-dev",
  },
  {
    Icon: GithubIcon,
    labelKey: "githubLabel" as const,
    value: "kealmahe2003",
    href: "https://github.com/kealmahe2003",
  },
];

export function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-loose">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
            className="flex flex-col gap-3 mt-8"
          >
            {contactLinks.map(({ Icon, labelKey, value, href }, i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 + i * 0.06 }}
                className="group flex items-center gap-3 p-3 rounded-lg border border-transparent
                  hover:border-border hover:bg-secondary/40 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-muted-foreground">{t[labelKey]}</span>
                  <span className="text-sm text-foreground font-mono truncate">{value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.28 }}
            className="mt-8"
          >
            <a
              href="mailto:kealmahe@gmail.com"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 w-full sm:w-auto inline-flex")}
            >
              <Mail className="w-4 h-4" />
              {t.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
