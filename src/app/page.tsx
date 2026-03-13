import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Education, CertificationsAndPublications } from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effect */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Areas */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <CertificationsAndPublications />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
