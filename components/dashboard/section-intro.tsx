import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  aside,
}: SectionIntroProps) {
  return (
    <section className="glass-panel rounded-[1.75rem] border border-border px-6 py-6 lg:px-8 lg:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{description}</p>
        </div>
        {aside ? <div className="lg:max-w-xs">{aside}</div> : null}
      </div>
    </section>
  );
}