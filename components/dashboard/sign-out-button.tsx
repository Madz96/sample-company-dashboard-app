import { LogOut } from "lucide-react";
import { signOut } from "@/auth";

export function SignOutButton() {
  async function handleSignOut() {
    "use server";

    await signOut({
      redirectTo: "/sign-in",
    });
  }

  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </button>
    </form>
  );
}