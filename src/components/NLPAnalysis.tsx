import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { RangeBar } from "./ui/RangeBar";
import { recoveryRateRanges } from "../data/metrics";

export function NLPAnalysis() {
  const { t } = useLanguage();

  return (
    <Section id="nlp" eyebrow={t.nlp.eyebrow} title={t.nlp.title} intro={t.nlp.intro}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-md border border-ink-hairline bg-ink-raised p-6">
          <h3 className="font-display text-lg text-ink-primary">{t.nlp.pipeline}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{t.nlp.pipelineDesc}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-wide text-ink-muted">
            {t.nlp.recoveryRateLabel}
          </h4>
          <div className="mt-4">
            <RangeBar
              data={recoveryRateRanges.map((r) => ({ label: r.label, min: r.min, max: r.max }))}
              color="#199e70"
            />
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">{t.nlp.recoveryRateCaption}</p>
          </div>
        </div>

        <div className="rounded-md border border-dashed border-ink-hairline bg-ink-plane p-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-theme-economy" />
            <h3 className="font-display text-lg text-ink-primary">{t.nlp.notYet}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {t.nlp.notYetItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-ink-muted">{t.nlp.notYetDesc}</p>
          <span className="mt-5 inline-block rounded-full border border-ink-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
            {t.common.pending}
          </span>
        </div>
      </div>
    </Section>
  );
}
