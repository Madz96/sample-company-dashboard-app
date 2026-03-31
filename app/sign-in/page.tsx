import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { auth, demoCredentials } from "@/auth";
import { SignInForm } from "@/components/auth/sign-in-form";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-10 lg:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.1fr)_28rem]">
        <section className="glass-panel rounded-[2rem] border border-border px-8 py-9 lg:px-10 lg:py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to overview
          </Link>

          <div className="mt-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/72 px-4 py-2 text-sm font-medium text-muted">
              <ShieldCheck className="h-4 w-4 text-success" />
              Authentication starter wired with NextAuth
            </div>
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-ink">
              Sign in to enter the company dashboard.
            </h1>
            <p className="text-base leading-8 text-muted">
              This skeleton uses a credentials provider for local development so route
              protection and session handling work immediately. Replace it with your
              company identity provider when SSO details are available.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border bg-white/72 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Included now
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink">
                <li>Protected dashboard routes</li>
                <li>Session-aware redirects</li>
                <li>Server-side sign-in and sign-out flows</li>
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-[#13231f] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Default demo login
              </p>
              <div className="mt-4 space-y-2 font-mono text-sm text-white/80">
                <p>{demoCredentials.email}</p>
                <p>{demoCredentials.password}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-[2rem] border border-border px-6 py-7 lg:px-7 lg:py-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Sign in
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink">
              Access Northstar Hub
            </h2>
            <p className="text-sm leading-7 text-muted">
              The defaults can be changed with environment variables in local or hosted
              environments.
            </p>
          </div>

          <div className="mt-8">
            <SignInForm />
          </div>
        </section>
      </div>
    </main>
  );
}