import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, projectsPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export async function generateMetadata({ params }: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    title: meta.projectsTitle,
    description: meta.projectsDescription,
    alternates: {
      canonical: projectsPath(locale),
      languages: Object.fromEntries(locales.map((l) => [l, projectsPath(l)])),
    },
  };
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.projects.allTitle}</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
        ))}
      </div>
    </section>
  );
}
