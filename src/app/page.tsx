"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIJourney from "@/components/AIJourney";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-[#F1F5F9] overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-400">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <AIJourney />
      <CurrentFocus />
      <Contact />
      <Footer />
    </main>
  );
}
