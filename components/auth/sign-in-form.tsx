"use client";

import { useActionState } from "react";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { authenticate } from "@/app/sign-in/actions";

export function SignInForm() {
  const [message, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue="admin@company.com"
          className="w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-ink">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          defaultValue="ChangeMe123!"
          className="w-full rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
        />
      </div>

      {message ? (
        <p className="rounded-2xl border border-danger/30 bg-[var(--danger-soft)] px-4 py-3 text-sm text-danger">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <LockKeyhole className="h-4 w-4" />
        )}
        Access dashboard
      </button>
    </form>
  );
}