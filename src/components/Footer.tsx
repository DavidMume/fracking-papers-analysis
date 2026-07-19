import { useLanguage } from "../context/LanguageContext";

const GITHUB_URL = "https://github.com/DavidMume/fracking-papers-analysis";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink-hairline bg-ink-plane px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-lg text-ink-primary">{t.footer.name}</p>
          <p className="mt-1 text-sm text-ink-secondary">{t.footer.role}</p>
          <p className="mt-4 max-w-md text-xs text-ink-muted">{t.footer.rights}</p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-ink-hairline px-4 py-2 text-sm text-ink-primary transition-colors hover:border-theme-water hover:text-theme-water"
        >
          {t.common.github}
        </a>
      </div>
    </footer>
  );
}
