import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, Newspaper } from "lucide-react";
import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";
import { dashboardNavItems } from "@/lib/navigation";

const highlights = [
  {
    label: "Announcements queued",
    value: "03",
    tone: "text-accent",
    icon: Newspaper,
  },
  {
    label: "Requests awaiting review",
    value: "11",
    tone: "text-warning",
    icon: Clock3,
  },
  {
    label: "Systems healthy",
    value: "98%",
    tone: "text-success",
    icon: CheckCircle2,
  },
];

export default function DashboardPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Overview"
        title="A shell for cross-company work"
        description="Use this home view as the launch point for the rest of the product. The cards below are intentionally lightweight so each feature area can evolve independently without needing a new layout or auth model."
        aside={
          <div className="rounded-[1.5rem] border border-border bg-white/72 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Recommended next step
            </p>
            <p className="mt-3 text-sm leading-7 text-ink">
              Replace the demo metrics and queues with live API data once the first
              backend integration is ready.
            </p>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="glass-panel rounded-[1.5rem] border border-border px-5 py-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">{item.label}</p>
                <Icon className={`h-5 w-5 ${item.tone}`} />
              </div>
              <p className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-ink">
                {item.value}
              </p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Launchpad"
          description="Use the dashboard home to spotlight the workflows employees visit most often."
          items={[
            "Highlight the highest-priority announcement or policy change.",
            "Promote two or three quick links for everyday internal tools.",
            "Display the current KPI snapshot with trend context.",
          ]}
        />
        <PlaceholderPanel
          title="Delivery notes"
          description="This scaffold is intentionally organized around extension points rather than final feature detail."
          items={[
            "The left navigation is driven by a single metadata file.",
            "Every protected page already inherits the same authenticated layout.",
            "The credentials flow can be replaced by SSO with minimal route changes.",
          ]}
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {dashboardNavItems.slice(1).map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.href}
              className="glass-panel rounded-[1.5rem] border border-border px-5 py-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted transition hover:border-accent hover:text-accent"
                >
                  Open
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}