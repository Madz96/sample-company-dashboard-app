import { Camera, KeyRound, ShieldCheck, UserRound } from "lucide-react";
import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

const identityFields = [
  { label: "Full name", value: "Jordan Lee" },
  { label: "Work email", value: "jordan.lee@northstar.demo" },
  { label: "Job title", value: "Operations Lead" },
  { label: "Team", value: "People Operations" },
];

export default function ProfilePage() {
  return (
    <>
      <SectionIntro
        eyebrow="Profile"
        title="Your account essentials"
        description="Use this page as the home for personal account changes. The layout is ready for identity, password, and profile media settings before persistence is wired in."
        aside={
          <div className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Current status
            </p>
            <p className="mt-3 text-sm leading-7 text-ink">
              Profile content is scaffolded and ready for real save actions, uploads, and
              validation rules.
            </p>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="glass-panel rounded-[1.5rem] border border-border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                Identity details
              </h2>
              <p className="mt-1 text-sm text-muted">
                Keep the most important account fields visible and easy to update.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {identityFields.map((field) => (
              <label key={field.label} className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {field.label}
                </span>
                <input
                  defaultValue={field.value}
                  className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                />
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
            >
              Save profile changes
            </button>
            <button
              type="button"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Cancel edits
            </button>
          </div>
        </article>

        <div className="grid gap-4">
          <article className="glass-panel rounded-[1.5rem] border border-border p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                  Profile image
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Reserve this area for avatar uploads, cropping, and preview controls.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-dashed border-border-strong bg-surface-strong px-5 py-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Camera className="h-8 w-8" />
              </div>
              <p className="mt-4 text-sm font-medium text-ink">Upload a new headshot</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Ideal for SSO-backed avatars, manual uploads, and role-based approval flows.
              </p>
            </div>
          </article>

          <PlaceholderPanel
            title="Security touchpoints"
            description="Password and authentication controls should stay adjacent to profile edits so users can manage account trust in one place."
            items={[
              "Password reset with strength guidance and last-updated timestamp.",
              "Two-factor enrollment status and backup recovery options.",
              "Active sessions across devices with revoke controls.",
            ]}
          />
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="glass-panel rounded-[1.5rem] border border-border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                Password preferences
              </h2>
              <p className="mt-1 text-sm text-muted">
                This section is ready for password rotation and recovery settings.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Current password
              </span>
              <input
                type="password"
                defaultValue="placeholder"
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                New password
              </span>
              <input
                type="password"
                defaultValue="placeholder"
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              />
            </label>
          </div>
        </article>

        <article className="glass-panel rounded-[1.5rem] border border-border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-success">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                Visibility and trust
              </h2>
              <p className="mt-1 text-sm text-muted">
                Keep the core account controls grouped with clear security context.
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {[
              "Choose which contact details are visible in the internal directory.",
              "Decide whether your profile image appears in approvals and announcements.",
              "Review authentication events and recent sensitive account changes.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}