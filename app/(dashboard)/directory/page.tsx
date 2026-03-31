import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

export default function DirectoryPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Directory"
        title="Help employees find people and ownership fast"
        description="The directory should make it obvious who owns what, how teams are structured, and where employees can go for support or decisions."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Core directory features"
          description="Keep the first pass practical and searchable."
          items={[
            "Search by person, team, or function.",
            "Rich team cards with manager and support contacts.",
            "Ownership metadata for systems and company initiatives.",
          ]}
        />
        <PlaceholderPanel
          title="Potential integrations"
          description="This route becomes more useful as it is connected to your people systems."
          items={[
            "Sync with HRIS or identity provider profile data.",
            "Add office, timezone, and team filters.",
            "Expose profile links for collaboration tools and calendars.",
          ]}
        />
      </section>
    </>
  );
}