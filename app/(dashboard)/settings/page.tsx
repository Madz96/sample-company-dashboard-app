import { Clock3, Globe2, MoonStar, SunMedium } from "lucide-react";
import { PlaceholderPanel } from "@/components/dashboard/placeholder-panel";
import { SectionIntro } from "@/components/dashboard/section-intro";

const timezoneOptions = [
  "Pacific Time (UTC-08:00)",
  "Eastern Time (UTC-05:00)",
  "Greenwich Mean Time (UTC+00:00)",
  "Central European Time (UTC+01:00)",
];

export default function SettingsPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Settings"
        title="Tune the workspace to fit your day"
        description="This page is designed for application-level preferences such as timezone, language, visual theme, and notification defaults."
        aside={
          <div className="rounded-[1.5rem] border border-border bg-surface-strong px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Suggested rollout
            </p>
            <p className="mt-3 text-sm leading-7 text-ink">
              Connect the inputs here to per-user preference storage after the first real
              feature area ships.
            </p>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="glass-panel rounded-[1.5rem] border border-border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Clock3 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                Regional defaults
              </h2>
              <p className="mt-1 text-sm text-muted">
                Keep scheduling, date formatting, and locale preferences in one block.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Timezone
              </span>
              <select
                defaultValue={timezoneOptions[0]}
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              >
                {timezoneOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Language
              </span>
              <select
                defaultValue="English (US)"
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              >
                <option value="English (US)">English (US)</option>
                <option value="English (UK)">English (UK)</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
            >
              Save preferences
            </button>
            <button
              type="button"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Restore defaults
            </button>
          </div>
        </article>

        <PlaceholderPanel
          title="Where this can grow"
          description="The settings surface should cover the knobs that affect the whole application experience without mixing in identity details."
          items={[
            "Notification channel preferences for email, in-app, and digest cadence.",
            "Default landing page after sign-in for different user personas.",
            "Accessibility toggles such as reduced motion and denser layouts.",
          ]}
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="glass-panel rounded-[1.5rem] border border-border p-6 xl:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                Language and formatting
              </h2>
              <p className="mt-1 text-sm text-muted">
                Group display language, numeric separators, and date formatting decisions.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Date format
              </span>
              <select
                defaultValue="Apr 2, 2026"
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              >
                <option value="Apr 2, 2026">Apr 2, 2026</option>
                <option value="02 Apr 2026">02 Apr 2026</option>
                <option value="2026-04-02">2026-04-02</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Number format
              </span>
              <select
                defaultValue="1,234.56"
                className="mt-2 w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              >
                <option value="1,234.56">1,234.56</option>
                <option value="1.234,56">1.234,56</option>
                <option value="1 234,56">1 234,56</option>
              </select>
            </label>
          </div>
        </article>

        <article className="glass-panel rounded-[1.5rem] border border-border p-6">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
            Theme mode
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted">
            Reserve this area for light, dark, and system preferences with live preview.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { label: "Light", icon: SunMedium, defaultChecked: false },
              { label: "Dark", icon: MoonStar, defaultChecked: false },
              { label: "System", icon: Globe2, defaultChecked: true },
            ].map((option) => {
              const Icon = option.icon;

              return (
                <label
                  key={option.label}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink"
                >
                  <input
                    type="radio"
                    name="theme"
                    defaultChecked={option.defaultChecked}
                    className="h-4 w-4 accent-[var(--accent)]"
                  />
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="font-medium">{option.label}</span>
                </label>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}