import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AuroraBackgroundClient from "@/components/AuroraBackgroundClient";
import { PROJECTS, getProject } from "@/lib/projects-data";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.es.title} — Kevin Marín`,
    description: project.es.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-dvh flex flex-col">
      <AuroraBackgroundClient />
      <Navbar />
      <div className="flex-1 relative pt-16">
        <ProjectDetail project={project} />
      </div>
      <Footer />
    </main>
  );
}
