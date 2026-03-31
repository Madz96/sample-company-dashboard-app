import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

export default function AnnouncementsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Announcements"
        title="Broadcast what the company needs to know"
        description="This area is intended for leadership updates, launch notes, policy changes, and time-sensitive reminders. Keep it editorially simple so communication owners can publish without engineering intervention."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <PlaceholderPanel
          title="Suggested modules"
          description="The section can start small and grow as communication needs mature."
          items={[
            "Pinned announcement for high-priority updates.",
            "Recent posts feed with audience tags.",
            "Acknowledgement state for required reads.",
          ]}
        />
        <PlaceholderPanel
          title="Editorial workflow"
          description="A practical rollout usually separates message creation from message delivery."
          items={[
            "Drafting and approvals for leadership communications.",
            "Scheduled publish windows for planned launches.",
            "Audience targeting by office, function, or region.",
          ]}
        />
      </section>
    </>
  );
}