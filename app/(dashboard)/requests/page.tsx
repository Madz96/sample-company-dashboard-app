import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

export default function RequestsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Requests"
        title="Centralize approvals and intake"
        description="This section is designed for operational workflows that move across teams: approvals, onboarding requests, procurement, access reviews, and service intake queues."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Good first workflows"
          description="Start with processes that are currently handled by spreadsheets or email chains."
          items={[
            "Manager approvals and policy exceptions.",
            "Department request forms with queue routing.",
            "Status tracking so employees can self-serve follow-up.",
          ]}
        />
        <PlaceholderPanel
          title="Architecture notes"
          description="Requests often expand quickly, so plan for lifecycle state early."
          items={[
            "Define submit, review, approve, reject, and fulfill states.",
            "Log timestamps and owners for every transition.",
            "Keep notifications and approvals decoupled from the UI shell.",
          ]}
        />
      </section>
    </>
  );
}