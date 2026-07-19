import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const GITHUB_URL = "https://github.com/DavidMume/fracking-papers-analysis";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: [string, string][] = [
    [t.nav.summary, "summary"],
    [t.nav.corpus, "corpus"],
    [t.nav.nlp, "nlp"],
    [t.nav.findings, "findings"],
    [t.nav.map, "map"],
    [t.nav.sources, "sources"],
    [t.nav.methodology, "methodology"],
    [t.nav.repro, "repro"],
  ];

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "border-ink-hairline bg-ink-plane/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a href="#top" className="font-display text-lg font-medium text-ink-primary">
          Fracking<span className="text-theme-water">.</span>lit
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded border border-ink-hairline px-3 py-1.5 text-sm text-ink-primary transition-colors hover:border-theme-water hover:text-theme-water sm:inline-block"
          >
            {t.common.github}
          </a>
          <button
            className="text-ink-primary lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-hairline bg-ink-plane px-6 py-4 lg:hidden">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-secondary hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="py-2 text-sm text-theme-water">
            {t.common.github}
          </a>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: "en" | "es"; setLang: (l: "en" | "es") => void }) {
  return (
    <div className="flex items-center rounded-full border border-ink-hairline p-0.5 font-mono text-xs">
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l ? "bg-theme-water text-ink-plane" : "text-ink-secondary hover:text-ink-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
