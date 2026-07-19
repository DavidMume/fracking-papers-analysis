import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";

const GITHUB_URL = "https://github.com/DavidMume/fracking-papers-analysis";

export function Reproducibility() {
  const { t } = useLanguage();

  return (
    <Section id="repro" eyebrow={t.repro.eyebrow} title={t.repro.title} intro={t.repro.intro}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-ink-hairline bg-ink-raised p-6">
          <h3 className="font-display text-base text-ink-primary">{t.repro.runPipeline}</h3>
          <pre className="tabular mt-4 overflow-x-auto rounded bg-ink-plane p-4 text-xs leading-relaxed text-ink-secondary">
{`git clone ${GITHUB_URL}.git
cd fracking-papers-analysis
pip install pymupdf spacy pandas pillow
python -m spacy download en_core_web_sm
python scripts/extract_lemmatize.py`}
          </pre>
        </div>

        <div className="rounded-md border border-ink-hairline bg-ink-raised p-6">
          <h3 className="font-display text-base text-ink-primary">{t.repro.runSite}</h3>
          <pre className="tabular mt-4 overflow-x-auto rounded bg-ink-plane p-4 text-xs leading-relaxed text-ink-secondary">
{`npm install
npm run dev
npm run build`}
          </pre>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-dashed border-ink-hairline p-6">
        <h3 className="font-display text-base text-ink-primary">{t.repro.dataLimitations}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{t.repro.dataLimitationsBody}</p>
      </div>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded border border-ink-hairline px-5 py-3 text-sm font-medium text-ink-primary transition-colors hover:border-theme-water hover:text-theme-water"
      >
        {t.common.github} → DavidMume/fracking-papers-analysis
      </a>
    </Section>
  );
}
