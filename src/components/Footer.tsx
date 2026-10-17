"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-black text-xs flex items-center justify-center">
                MY
              </div>
              <h3 className="text-base font-bold text-white">
                Muhammad Yoqubjonov
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Artificial Intelligence Student at PDP University • Building practical AI and full-stack software solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-zinc-400">
            <button onClick={() => scrollTo("#hero")} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo("#about")} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("#education")} className="hover:text-white transition-colors">
              Education
            </button>
            <button onClick={() => scrollTo("#skills")} className="hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollTo("#projects")} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo("#ai-journey")} className="hover:text-white transition-colors">
              AI Journey
            </button>
            <button onClick={() => scrollTo("#focus")} className="hover:text-white transition-colors">
              Focus
            </button>
            <button onClick={() => scrollTo("#contact")} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} Muhammad Yoqubjonov. All rights reserved.</p>
          <p>
            Built with <span className="text-white">Next.js</span> • <span className="text-white">React</span> • <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
