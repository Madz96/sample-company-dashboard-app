import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

export default function ToolsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Quick tools"
        title="Make the common tasks frictionless"
        description="Use this route for high-frequency internal links, lightweight self-service flows, and shortcuts to systems employees open every day."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Examples to prioritize"
          description="Choose tools that remove search time and reduce repetitive support requests."
          items={[
            "IT support and device request links.",
            "Benefits, payroll, and HR system shortcuts.",
            "Travel, expense, and reimbursement workflows.",
          ]}
        />
        <PlaceholderPanel
          title="Design considerations"
          description="The skeleton already supports card-based navigation and can evolve into richer workflow surfaces."
          items={[
            "Group tools by employee journey rather than by owning department.",
            "Add popularity and recency signals to keep the list relevant.",
            "Promote critical utilities with search or command-style entry points.",
          ]}
        />
      </section>
    </>
  );
}