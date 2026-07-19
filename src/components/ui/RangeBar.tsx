import { useState } from "react";

export interface RangeDatum {
  label: string;
  min: number;
  max: number;
}

export function RangeBar({ data, color = "#3987e5" }: { data: RangeDatum[]; color?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      {data.map((d, i) => (
        <div key={d.label} className="flex items-center gap-4">
          <div className="w-10 shrink-0 font-mono text-xs text-ink-muted">{d.label}</div>
          <div
            className="relative h-2 flex-1 rounded-full bg-ink-hairline"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="absolute top-0 h-2 rounded-full transition-[filter] duration-150"
              style={{
                left: `${d.min}%`,
                width: `${d.max - d.min}%`,
                backgroundColor: color,
                filter: hovered === i ? "brightness(1.25)" : "brightness(1)",
              }}
            />
            {hovered === i && (
              <div
                className="tabular absolute -top-9 whitespace-nowrap rounded border border-ink-hairline bg-ink-raised px-2 py-1 text-xs text-ink-primary shadow-lg"
                style={{ left: `${(d.min + d.max) / 2}%`, transform: "translateX(-50%)" }}
              >
                {d.min}–{d.max}%
              </div>
            )}
          </div>
          <div className="tabular w-16 shrink-0 text-right text-xs text-ink-secondary">
            {d.min}–{d.max}%
          </div>
        </div>
      ))}
    </div>
  );
}
