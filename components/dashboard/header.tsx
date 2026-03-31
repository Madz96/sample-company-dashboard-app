import type { Session } from "next-auth";
import { ShieldCheck, Sparkles } from "lucide-react";
import { SignOutButton } from "@/components/dashboard/sign-out-button";

type DashboardHeaderProps = {
  session: Session;
};

export function DashboardHeader({ session }: DashboardHeaderProps) {
  return (
    <header className="glass-panel flex flex-col gap-4 rounded-[1.75rem] border border-border px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/72 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Dashboard skeleton
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink">
          Welcome back, {session.user?.name ?? "team member"}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Protected routes, shared navigation, and section placeholders are ready for
          feature teams to extend.
        </p>
      </div>

      <div className="flex items-center gap-3 self-start md:self-center">
        <div className="hidden rounded-2xl border border-border bg-white/72 px-4 py-3 text-sm text-muted md:block">
          <div className="flex items-center gap-2 font-medium text-ink">
            <ShieldCheck className="h-4 w-4 text-success" />
            Authenticated session
          </div>
          <div className="mt-1 font-mono text-xs">{session.user?.email}</div>
        </div>
        <SignOutButton />
      </div>
    </header>
  );
}