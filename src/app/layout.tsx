import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Yoqubjonov | AI Student & Developer",
  description:
    "Personal portfolio of Muhammad Yoqubjonov, an Artificial Intelligence student and developer interested in Machine Learning, Deep Learning, Computer Vision, and Full-Stack Development.",
  keywords: [
    "Muhammad Yoqubjonov",
    "AI Student",
    "Artificial Intelligence",
    "PDP University",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Uzbekistan",
  ],
  authors: [{ name: "Muhammad Yoqubjonov" }],
  openGraph: {
    type: "website",
    title: "Muhammad Yoqubjonov | AI Student & Developer",
    description:
      "Personal portfolio of Muhammad Yoqubjonov, an Artificial Intelligence student and developer interested in Machine Learning, Deep Learning, Computer Vision, and Full-Stack Development.",
    siteName: "Muhammad Yoqubjonov Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${grotesk.variable} ${jetbrains.variable}`}>
      <body className="bg-[#0B0F19] text-[#F1F5F9] font-sans antialiased selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
        {children}
      </body>
    </html>
  );
}
