import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales, projectsPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { caseStudies } from "@/data/projects";
import { StackList, StatusBadge } from "@/components/projects/project-card";

export const generateStaticParams = () => caseStudies.map(({ slug }) => ({ slug }));

const findProject = (slug: string) => caseStudies.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findProject(slug);
  if (!hasLocale(locale) || !project) return {};
  return {
    title: project.name,
    description: project.summary[locale],
    alternates: {
      canonical: projectsPath(locale, slug),
      languages: Object.fromEntries(locales.map((l) => [l, projectsPath(l, slug)])),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  const project = findProject(slug);
  if (!hasLocale(locale) || !project?.caseStudy) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="py-16">
      <Link href={projectsPath(locale)} className="font-mono text-sm text-muted hover:text-foreground">
        ← {dict.projects.back}
      </Link>
      <header className="mt-8 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
          {project.status && <StatusBadge label={dict.projects.status[project.status]} />}
        </div>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary[locale]}</p>
        <div className="mt-6">
          <StackList stack={project.stack} />
        </div>
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt[locale]}
            placeholder="blur"
            preload
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mt-10 aspect-[16/9] w-full rounded-xl border border-border object-cover"
          />
        )}
      </header>
      <div className="max-w-2xl">
        {project.caseStudy.map((section) => (
          <section
            key={section.title.en}
            id={section.title.en.toLowerCase().replace(/\W+/g, "-")}
            className="scroll-mt-20 border-b border-border py-8 last:border-0"
          >
            <h2 className="text-lg font-semibold">{section.title[locale]}</h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body[locale]}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
