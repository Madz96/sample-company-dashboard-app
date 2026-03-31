"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";
import { dashboardNavItems } from "@/lib/navigation";

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass-panel flex w-full max-w-xs flex-col gap-8 rounded-[2rem] border border-border p-5 lg:h-[calc(100vh-2rem)] lg:sticky lg:top-4 lg:max-w-[17.5rem]">
      <div className="rounded-[1.5rem] bg-[#142723] px-5 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">Company hub</p>
            <h1 className="text-lg font-semibold tracking-[-0.03em]">Northstar</h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/68">
          Shared workspace for internal communications, approvals, reporting, and
          employee self-service.
        </p>
      </div>

      <nav className="space-y-2">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "group flex items-center gap-3 rounded-2xl border px-4 py-3 transition",
                isActive
                  ? "border-transparent bg-accent text-white shadow-[0_18px_40px_rgba(15,118,110,0.24)]"
                  : "border-transparent bg-white/55 text-ink hover:border-border hover:bg-white",
              )}
            >
              <span
                className={classNames(
                  "flex h-10 w-10 items-center justify-center rounded-xl transition",
                  isActive ? "bg-white/12 text-white" : "bg-accent-soft text-accent",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{item.title}</span>
                <span
                  className={classNames(
                    "mt-0.5 block truncate text-xs",
                    isActive ? "text-white/72" : "text-muted",
                  )}
                >
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}