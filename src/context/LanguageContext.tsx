"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import t, { Lang } from "@/translations";

type CtxType = { lang: Lang; setLang: (l: Lang) => void; tr: typeof t.en };

const Ctx = createContext<CtxType>({ lang: "en", setLang: () => {}, tr: t.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && ["en", "uz", "ru"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return <Ctx.Provider value={{ lang, setLang, tr: t[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
