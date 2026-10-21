import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales, projectsPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { links, projects, skills } from "@/data/projects";
import { ProjectCard, StackList, StatusBadge } from "@/components/projects/project-card";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

const eyebrow = "font-mono text-xs uppercase tracking-widest text-muted";
const sectionTitle = `mb-6 ${eyebrow}`;

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [featured, ...others] = projects;

  return (
    <>
      <section className="py-20 sm:py-28">
        <p className="font-mono text-sm text-muted">{dict.hero.location}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Kevin Alexander Marín</h1>
        <p className="mt-3 text-xl text-accent sm:text-2xl">{dict.hero.title}</p>
        <p className="mt-6 max-w-2xl text-lg text-muted">{dict.hero.value}</p>
        <p className="mt-4 font-mono text-sm text-muted">React · TypeScript · Node.js · PostgreSQL</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/${locale}#projects`} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90">
            {dict.hero.viewProjects}
          </Link>
          <a href="/cv.pdf" download className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-surface">
            {dict.hero.downloadCv}
          </a>
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
