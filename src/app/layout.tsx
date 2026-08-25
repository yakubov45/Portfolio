import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Turg'unboyev Ismoil — Cybersecurity, Web Dev, SMM & AI Workflows",
  description: "Multidisciplinary Digital Specialist from Tashkent specializing in IT/Cybersecurity (Kali Linux, Pentesting, Nmap, Burp Suite), Web & Python Development, Instagram SMM, and AI Workflows.",
  keywords: [
    "Turg'unboyev Ismoil",
    "Turgunboyev Ismoil",
    "Ismoil Turgunboyev",
    "Cybersecurity",
    "Pentesting",
    "Kali Linux",
    "Python Developer",
    "Web Developer",
    "Instagram SMM",
    "AI Workflows",
    "Tashkent",
    "Uzbekistan"
  ],
  authors: [{ name: "Turg'unboyev Ismoil" }],
  openGraph: {
    type: "website",
    title: "Turg'unboyev Ismoil — Cybersecurity, Web Dev, SMM & AI Workflows",
    description: "Specializing in Cybersecurity (Kali Linux, Burp Suite, Nmap), Python & Web Development, Instagram SMM, and AI Workflows.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${outfit.variable} ${grotesk.variable} ${jetbrains.variable}`}>
      <body className="bg-[#050811] text-[#F0F6FF] font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
