import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";

export function Methodology() {
  const { t } = useLanguage();
  const blocks = [t.methodology.collection, t.methodology.cleaning, t.methodology.nlpMethod, t.methodology.sentiment, t.methodology.mapping];

  return (
    <Section id="methodology" eyebrow={t.methodology.eyebrow} title={t.methodology.title} tone="surface">
      <div className="grid gap-8 lg:grid-cols-2">
        <ol className="space-y-8">
          {blocks.map((b, i) => (
            <li key={b.title} className="flex gap-4">
              <span className="tabular font-mono text-sm text-theme-water">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-base text-ink-primary">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{b.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-8">
          <div className="rounded-md border border-ink-hairline bg-ink-raised p-6">
            <h3 className="font-display text-base text-ink-primary">{t.methodology.limitations.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {t.methodology.limitations.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-theme-seismicity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-dashed border-ink-hairline bg-ink-plane p-6">
            <h3 className="font-display text-base text-ink-primary">{t.methodology.future.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {t.methodology.future.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-theme-water" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
