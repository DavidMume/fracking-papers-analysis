import { useState } from "react";

export interface BarDatum {
  label: string;
  value: number;
  detail?: string;
}

interface BarChartProps {
  data: BarDatum[];
  valueSuffix?: string;
  color?: string;
  height?: number;
}

export function BarChart({ data, valueSuffix = "", color = "#3987e5", height = 200 }: BarChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full">
      <div className="flex items-end gap-3 sm:gap-4" style={{ height }}>
        {data.map((d, i) => {
          const h = max > 0 ? (d.value / max) * 100 : 0;
          const isHovered = hovered === i;
          return (
            <div
              key={d.label}
              className="group relative flex flex-1 flex-col items-center justify-end"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {isHovered && (
                <div className="tabular absolute -top-9 z-10 whitespace-nowrap rounded border border-ink-hairline bg-ink-raised px-2 py-1 text-xs text-ink-primary shadow-lg">
                  {d.value.toLocaleString()}
                  {valueSuffix}
                  {d.detail && <span className="ml-1 text-ink-muted">{d.detail}</span>}
                </div>
              )}
              <div
                className="w-full rounded-t transition-[filter] duration-150"
                style={{
                  height: `${Math.max(h, 2)}%`,
                  backgroundColor: color,
                  filter: isHovered ? "brightness(1.25)" : "brightness(1)",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-3 sm:gap-4">
        {data.map((d) => (
          <div key={d.label} className="flex-1 text-center font-mono text-xs text-ink-muted">
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
