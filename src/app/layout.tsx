import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Yoqubjonov — Full Stack Developer",
  description: "Full Stack Developer from Tashkent, Uzbekistan specializing in Next.js, TypeScript, Firebase, and modern web technologies.",
  keywords: ["Muhammad Yoqubjonov", "Full Stack Developer", "Frontend Developer", "Next.js", "TypeScript", "React", "Tashkent", "Uzbekistan"],
  authors: [{ name: "Muhammad Yoqubjonov" }],
  openGraph: {
    type: "website",
    title: "Muhammad Yoqubjonov — Full Stack Developer",
    description: "Full Stack Developer from Tashkent specializing in Next.js, TypeScript & Firebase.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="bg-[#080B14] text-[#F0F4FF] font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
