import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { sources } from "../data/sources";

export function Sources() {
  const { lang, t } = useLanguage();

  return (
    <Section id="sources" eyebrow={t.sources.eyebrow} title={t.sources.title} intro={t.sources.intro} tone="surface">
      <div className="grid gap-5 lg:grid-cols-2">
        {sources.map((s) => (
          <article
            key={s.id}
            className="flex flex-col rounded-md border border-ink-hairline bg-ink-raised p-6 transition-colors hover:border-theme-water/50"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-theme-water">{s.id}</span>
              <span className="font-mono text-xs text-ink-muted">{s.year}</span>
            </div>
            <h3 className="mt-3 font-display text-lg leading-snug text-ink-primary">{s.title[lang]}</h3>
            <p className="mt-2 text-xs text-ink-secondary">{s.authors}</p>
            <p className="mt-1 text-xs italic text-ink-muted">{s.journal}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{s.focus[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-wide text-ink-muted">
              <span>{t.sources.table.type}: {s.type[lang]}</span>
              <span>{s.institutions}</span>
            </div>
            {s.link && (
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1 text-sm text-theme-water hover:underline"
              >
                {t.common.link} →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
