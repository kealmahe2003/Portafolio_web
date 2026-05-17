"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
  lang: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  return (
    <LanguageContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === "es" ? "en" : "es")) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
