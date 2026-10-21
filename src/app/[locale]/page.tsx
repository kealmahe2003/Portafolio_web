import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales, projectsPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { links, projects, skills } from "@/data/projects";
import { ProjectCard, StackList, StatusBadge } from "@/components/projects/project-card";
import { siNestjs, siNodedotjs, siPostgresql, siReact, siTypescript } from "simple-icons";
import portrait from "../../../public/images/profile/kevin.png";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

// Inline icon paths (map pin, graduation cap, briefcase); brand logos come from simple-icons.
const factIcons = {
  location: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  studies: "M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6",
  experience: "M3 8h18v11H3zM8 8V5h8v3M3 13h18",
};

const heroStack = [siReact, siTypescript, siNodedotjs, siNestjs, siPostgresql];

const eyebrow = "font-mono text-xs uppercase tracking-widest text-muted";
const sectionTitle = `mb-6 ${eyebrow}`;

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [featured, ...others] = projects;

  return (
    <>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-surface sm:mt-10">
        <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_19rem] lg:gap-12 lg:p-12">
          <Image
            src={portrait}
            alt={dict.hero.photoAlt}
            placeholder="blur"
            preload
            sizes="(min-width: 1024px) 19rem, 8rem"
            className="aspect-[4/5] w-32 rounded-2xl border border-border object-cover shadow-2xl shadow-black/20 lg:col-start-2 lg:row-start-1 lg:w-full"
          />
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Kevin Alexander Marín</h1>
            <p className="mt-3 text-xl text-accent sm:text-2xl">{dict.hero.title}</p>
            <p className="mt-6 max-w-xl text-lg text-muted">{dict.hero.value}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}#projects`} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
                {dict.hero.viewProjects}
              </Link>
              <a href="/cv.pdf" download className="rounded-md border border-border bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-background">
                {dict.hero.downloadCv} ↓
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              {heroStack.map((icon) => (
                <li key={icon.title} className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    <path d={icon.path} />
                  </svg>
                  {icon.title}
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid gap-5 border-t border-border pt-8 sm:grid-cols-3 lg:col-span-2">
            {(["location", "studies", "experience"] as const).map((key) => {
              const fact = dict.hero.facts[key];
              return (
                <div key={key}>
                  <dt className="flex items-center gap-3 font-medium">
                    <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={factIcons[key]} />
                    </svg>
                    {fact.label}
                  </dt>
                  <dd className="mt-1 pl-8 text-sm text-muted">{fact.value}</dd>
                  {fact.detail && <dd className="pl-8 font-mono text-xs text-muted">{fact.detail}</dd>}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 py-12">
        <article className="relative overflow-hidden rounded-xl border border-border bg-surface">
          {featured.image && (
            <Image
              src={featured.image.src}
              alt={featured.image.alt[locale]}
              placeholder="blur"
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="aspect-[16/9] w-full object-cover"
            />
          )}
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className={eyebrow}>{dict.featured.eyebrow}</p>
              {featured.status && <StatusBadge label={dict.projects.status[featured.status]} />}
            </div>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{featured.name}</h2>
            <p className="mt-3 max-w-2xl text-muted">{featured.summary[locale]}</p>
            <p className="mt-6 text-lg font-medium">{dict.featured.metric}</p>
            <div className="mt-6">
              <StackList stack={featured.stack} />
            </div>
            <Link href={projectsPath(locale, featured.slug)} className="mt-8 inline-block font-medium text-accent after:absolute after:inset-0 hover:underline">
              {dict.featured.readCase} →
            </Link>
          </div>
        </article>

        <h2 className={`${sectionTitle} mt-16`}>{dict.projects.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-12">
        <h2 className={sectionTitle}>{dict.about.title}</h2>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className={sectionTitle}>{dict.skills.title}</h2>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <dt className="mb-2 text-sm font-medium">{dict.skills.groups[group as keyof typeof skills]}</dt>
              <dd className="text-sm text-muted">{items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-12">
        <h2 className={sectionTitle}>{dict.experience.title}</h2>
        <ol className="border-l border-border">
          {dict.experience.items.map((item, i) => (
            <li key={item.period} className="relative pb-8 pl-6 last:pb-0">
              <span className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ${i === 0 ? "bg-accent" : "bg-border"}`} aria-hidden="true" />
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <p className={i === 0 ? "mt-1 font-semibold" : "mt-1 font-medium"}>{item.role}</p>
              <p className="text-sm text-muted">{item.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="scroll-mt-20 py-16">
        <h2 className={sectionTitle}>{dict.contact.title}</h2>
        <p className="text-2xl font-semibold">{dict.contact.body}</p>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm">
          <li>
            <a href={`mailto:${links.email}`} className="rounded-md bg-accent px-4 py-2 font-medium text-accent-foreground hover:opacity-90">
              {links.email}
            </a>
          </li>
          <li>
            <a href={links.github} className="rounded-md border border-border px-4 py-2 font-medium hover:bg-surface">GitHub</a>
          </li>
          <li>
            <a href={links.linkedin} className="rounded-md border border-border px-4 py-2 font-medium hover:bg-surface">LinkedIn</a>
          </li>
        </ul>
      </section>
    </>
  );
}
