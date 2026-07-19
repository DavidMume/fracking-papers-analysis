import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { findings, type Theme } from "../data/findings";

const THEME_COLOR: Record<Theme, string> = {
  environment: "#199e70",
  health: "#e66767",
  water: "#3987e5",
  economy: "#c98500",
  justice: "#9085e9",
  seismicity: "#d95926",
};

const THEME_ORDER: Theme[] = ["water", "health", "environment", "economy", "justice", "seismicity"];

export function Findings() {
  const { lang, t } = useLanguage();

  return (
    <Section id="findings" eyebrow={t.findings.eyebrow} title={t.findings.title} intro={t.findings.intro} tone="surface">
      <div className="space-y-14">
        {THEME_ORDER.map((theme) => {
          const items = findings.filter((f) => f.theme === theme);
          if (items.length === 0) return null;
          const color = THEME_COLOR[theme];
          return (
            <div key={theme}>
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                <h3 className="font-display text-xl text-ink-primary">{t.findings.themes[theme]}</h3>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((f) => (
                  <article
                    key={f.id}
                    className="flex flex-col justify-between rounded-md border border-ink-hairline bg-ink-raised p-5 transition-colors hover:border-white/20"
                    style={{ borderLeft: `3px solid ${color}` }}
                  >
                    <p className="text-sm leading-relaxed text-ink-primary">{f.claim[lang]}</p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                      {t.findings.sourceLabel} · {f.paperId}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
