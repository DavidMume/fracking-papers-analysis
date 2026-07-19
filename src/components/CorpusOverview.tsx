import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { StatCard } from "./ui/StatCard";
import { BarChart } from "./ui/BarChart";
import { corpusTotals, corpusByPaper } from "../data/metrics";

export function CorpusOverview() {
  const { t } = useLanguage();

  return (
    <Section id="corpus" eyebrow={t.corpus.eyebrow} title={t.corpus.title} intro={t.corpus.intro} tone="surface">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard value={String(corpusTotals.papers)} label={t.corpus.papers} />
        <StatCard value={corpusTotals.pages.toLocaleString()} label={t.corpus.pages} />
        <StatCard value={corpusTotals.tokens.toLocaleString()} label={t.corpus.tokens} />
        <StatCard
          value={`~${corpusTotals.vocab.toLocaleString()}`}
          label={t.corpus.vocab}
        />
        <StatCard value={String(corpusTotals.figures)} label={t.corpus.figures} />
        <StatCard value={corpusTotals.yearRange} label={t.corpus.period} />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="font-display text-lg text-ink-primary">{t.corpus.perPaper}</h3>
          <div className="mt-6 rounded-md border border-ink-hairline bg-ink-raised p-6">
            <BarChart
              data={corpusByPaper.map((p) => ({ label: p.id, value: p.tokens }))}
              color="#3987e5"
            />
            <p className="tabular mt-4 text-xs text-ink-muted">{t.corpus.tokens}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 rounded-md border border-ink-hairline bg-ink-raised p-6">
          <table className="tabular w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-ink-muted">
                <th className="pb-2 font-normal">ID</th>
                <th className="pb-2 font-normal">{t.corpus.pages}</th>
                <th className="pb-2 font-normal">{t.corpus.figures}</th>
              </tr>
            </thead>
            <tbody>
              {corpusByPaper.map((p) => (
                <tr key={p.id} className="border-t border-ink-hairline">
                  <td className="py-2 font-mono text-ink-primary">{p.id}</td>
                  <td className="py-2 text-ink-secondary">{p.pages}</td>
                  <td className="py-2 text-ink-secondary">{p.figures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
