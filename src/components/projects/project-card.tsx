import Link from "next/link";
import { projectsPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, locale, dict }: { project: Project; locale: Locale; dict: Dictionary }) {
  return (
    <article className="relative flex flex-col gap-3 rounded-lg border border-border bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">
          {project.caseStudy ? (
            // Stretched link: the whole card is clickable while keeping one accessible link.
            <Link href={projectsPath(locale, project.slug)} className="after:absolute after:inset-0 hover:text-accent">
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        {project.status && <StatusBadge label={dict.projects.status[project.status]} />}
      </div>
      <p className="text-sm text-muted">{project.summary[locale]}</p>
      <StackList stack={project.stack} />
    </article>
  );
}

export function StatusBadge({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
      {label}
    </span>
  );
}

export function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-auto flex flex-wrap gap-1.5 font-mono text-xs text-muted">
      {stack.map((tech) => (
        <li key={tech} className="rounded bg-background px-1.5 py-0.5">
          {tech}
        </li>
      ))}
    </ul>
  );
}
