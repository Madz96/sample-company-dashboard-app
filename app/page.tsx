import Link from "next/link";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { auth } from "@/auth";
import { dashboardNavItems } from "@/lib/navigation";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-12">
      <section className="glass-panel relative overflow-hidden rounded-[2rem] border border-border px-8 py-10 lg:px-12 lg:py-14">
        <div className="hero-glow absolute inset-y-0 right-0 hidden w-1/2 lg:block" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.9fr)] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-medium text-muted">
              <Sparkles className="h-4 w-4 text-accent" />
              Company operations dashboard starter
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">
                One place for the tools, signals, and workflows your teams use every day.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                Northstar Hub ships with a protected dashboard shell, reusable navigation,
                and route placeholders for company news, quick tools, KPIs, approvals, and
                the team directory.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                <LockKeyhole className="h-4 w-4" />
                Sign in to the dashboard
              </Link>
              <Link
                href="#sections"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-strong px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Explore the skeleton
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] border border-border bg-surface-strong p-5 text-ink shadow-[var(--shadow-lg)]">
            <div className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted">Access</p>
                <p className="mt-2 text-2xl font-semibold">Protected routes</p>
              </div>
              <div className="rounded-full border border-border bg-accent-soft px-3 py-1 text-sm font-medium text-ink">
                NextAuth
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-sm text-muted">Reusable layout</p>
                <p className="mt-2 text-lg font-semibold">Sidebar + command header</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-sm text-muted">Planned sections</p>
                <p className="mt-2 text-lg font-semibold">5 launch-ready route stubs</p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-accent-soft p-4 text-sm text-muted">
              Swap the demo credentials provider for your company SSO later without
              replacing the application shell.
            </div>
          </div>
        </div>
      </section>

      <section id="sections" className="grid gap-5 lg:grid-cols-3">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.href}
              className="glass-panel rounded-[1.5rem] border border-border p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
