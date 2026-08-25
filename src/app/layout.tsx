import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Yoqubjonov — Cybersecurity, Web Dev, SMM & AI Workflows",
  description: "Multidisciplinary Specialist from Tashkent specializing in IT/Cybersecurity (Kali Linux, Pentesting, Nmap, Burp Suite), Web & Python Development, Instagram SMM, and AI Workflows.",
  keywords: [
    "Muhammad Yoqubjonov",
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
  authors: [{ name: "Muhammad Yoqubjonov" }],
  openGraph: {
    type: "website",
    title: "Muhammad Yoqubjonov — Cybersecurity, Web Dev, SMM & AI Workflows",
    description: "Specializing in Cybersecurity (Kali Linux, Burp Suite, Nmap), Python & Web Development, Instagram SMM, and AI Workflows.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="bg-[#080B14] text-[#F0F4FF] font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
