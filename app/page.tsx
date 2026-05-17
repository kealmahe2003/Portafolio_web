import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import AuroraBackgroundClient from "@/components/AuroraBackgroundClient";

export default function Home() {
  return (
    <main className="relative">
      <AuroraBackgroundClient />
      <Navbar />
      <Hero />

      <div className="relative">
        <About />
        <hr className="border-border mx-auto max-w-5xl" />
        <Skills />
        <hr className="border-border mx-auto max-w-5xl" />
        <Experience />
        <hr className="border-border mx-auto max-w-5xl" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
