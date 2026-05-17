import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import AuroraBackgroundClient from "@/components/AuroraBackgroundClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — Kevin Marín",
  description: "Sistemas reales llevados a producción. POS y e-commerce construidos de cero.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-dvh flex flex-col">
      <AuroraBackgroundClient />
      <Navbar />
      <div className="flex-1 relative pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
