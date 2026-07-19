interface StatCardProps {
  value: string;
  label: string;
  note?: string;
}

export function StatCard({ value, label, note }: StatCardProps) {
  return (
    <div className="rounded-md border border-ink-hairline bg-ink-raised p-6 transition-colors hover:border-theme-water/50">
      <div className="tabular font-display text-3xl font-medium text-ink-primary sm:text-4xl">{value}</div>
      <div className="mt-2 text-sm text-ink-secondary">{label}</div>
      {note && <div className="mt-1 text-xs text-ink-muted">{note}</div>}
    </div>
  );
}
