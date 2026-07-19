import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "plane" | "surface";
}

export function Section({ id, eyebrow, title, intro, children, tone = "plane" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-ink-hairline px-6 py-20 sm:px-10 lg:px-16 ${
        tone === "surface" ? "bg-ink-surface" : "bg-ink-plane"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-theme-water">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight text-ink-primary sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
