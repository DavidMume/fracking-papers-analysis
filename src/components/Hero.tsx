import { useLanguage } from "../context/LanguageContext";

const GITHUB_URL = "https://github.com/DavidMume/fracking-papers-analysis";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-hairline">
      {/* Stratigraphy background: layered gradient bands + core-sample hairlines */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0d0d0c 0%, #14130f 22%, #171410 42%, #14171a 64%, #101418 82%, #0d0d0c 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-core opacity-40" />
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.15] blur-3xl"
        style={{ background: "radial-gradient(circle, #3987e5 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #d95926 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-10 sm:pt-36 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-theme-water">{t.hero.eyebrow}</p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-ink-primary sm:text-6xl lg:text-7xl">
          {t.hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl italic leading-snug text-ink-secondary sm:text-2xl">
          {t.hero.subhead}
        </p>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-secondary">{t.hero.description}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-theme-water px-5 py-3 text-sm font-medium text-ink-plane transition-transform hover:scale-[1.02]"
          >
            <GithubIcon />
            {t.hero.ctaGithub}
          </a>
          <a
            href="#methodology"
            className="rounded border border-ink-hairline px-5 py-3 text-sm font-medium text-ink-primary transition-colors hover:border-theme-water hover:text-theme-water"
          >
            {t.hero.ctaMethodology}
          </a>
        </div>

        <div className="mt-20 flex items-center gap-2 text-xs text-ink-muted">
          <span className="h-8 w-px animate-pulse bg-ink-hairline" />
          {t.hero.scrollHint}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
