"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black relative">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[100]"
      />

      {/* Interactive Ambient Cursor Spotlight (Desktop) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.045), transparent 80%)`,
        }}
      />

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
