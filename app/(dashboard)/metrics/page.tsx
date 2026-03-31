import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

export default function MetricsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Metrics"
        title="Turn the dashboard into an operating rhythm"
        description="Start with a small KPI set that helps leadership and teams understand progress at a glance. Add richer trend views only after the source data is stable."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Metrics foundation"
          description="The first release should emphasize trustworthy reporting rather than visual complexity."
          items={[
            "Company-wide KPI cards with clear owners.",
            "Trend vs target deltas for each headline metric.",
            "Timestamped refresh status for operational confidence.",
          ]}
        />
        <PlaceholderPanel
          title="Data integration notes"
          description="Plan the shape of your data contracts early so the dashboard pages stay simple."
          items={[
            "Normalize source definitions before wiring charts.",
            "Expose summary endpoints tailored to dashboard use cases.",
            "Keep business rules out of the page layer where possible.",
          ]}
        />
      </section>
    </>
  );
}