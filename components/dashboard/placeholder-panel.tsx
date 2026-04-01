type PlaceholderPanelProps = {
  title: string;
  description: string;
  items: string[];
};

export function PlaceholderPanel({
  title,
  description,
  items,
}: PlaceholderPanelProps) {
  return (
    <article className="glass-panel rounded-[1.5rem] border border-border p-6">
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}