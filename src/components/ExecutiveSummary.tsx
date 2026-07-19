import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { convergentConclusions, synthesisTable } from "../data/synthesis";

export function ExecutiveSummary() {
  const { lang, t } = useLanguage();

  return (
    <Section id="summary" eyebrow={t.summary.eyebrow} title={t.summary.title} intro={t.summary.intro}>
      <ol className="grid gap-4 sm:grid-cols-2">
        {convergentConclusions.map((c, i) => (
          <li
            key={i}
            className="rounded-md border border-ink-hairline bg-ink-raised p-6 transition-colors hover:border-theme-water/50"
          >
            <span className="font-mono text-xs text-theme-water">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-primary">{c[lang]}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 overflow-x-auto rounded-md border border-ink-hairline">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-hairline bg-ink-raised">
              <th className="p-4 font-mono text-xs uppercase tracking-wide text-ink-muted">
                {lang === "en" ? "Dimension" : "Dimensión"}
              </th>
              {(["P01", "P02", "P03", "P04"] as const).map((id) => (
                <th key={id} className="p-4 font-mono text-xs uppercase tracking-wide text-theme-water">
                  {id}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {synthesisTable.map((row) => (
              <tr key={row.dimension.en} className="border-b border-ink-hairline last:border-0">
                <td className="p-4 text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  {row.dimension[lang]}
                </td>
                <td className="p-4 text-ink-primary">{row.P01[lang]}</td>
                <td className="p-4 text-ink-primary">{row.P02[lang]}</td>
                <td className="p-4 text-ink-primary">{row.P03[lang]}</td>
                <td className="p-4 text-ink-primary">{row.P04[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
