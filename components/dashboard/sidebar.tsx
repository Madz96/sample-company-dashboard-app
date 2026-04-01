"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import { dashboardNavItems } from "@/lib/navigation";

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={classNames(
        // overflow-hidden clips content during the width animation so text
        // never bleeds out. transition-[width] avoids triggering transitions
        // on every property (e.g. border-color, padding) during collapse.
        "glass-panel flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-border p-4",
        "w-full transition-[width] duration-300 ease-in-out",
        "lg:h-[calc(100vh-2rem)] lg:sticky lg:top-4",
        collapsed ? "lg:w-[4.5rem]" : "lg:w-[17.5rem]",
      )}
    >
      {/* Brand header — single DOM node; CSS-only transitions so the card
          never jumps between two separate subtrees. */}
      <div
        className={classNames(
          "shrink-0 rounded-[1.5rem] border transition-all duration-300",
          collapsed
            ? "border-transparent bg-transparent px-0 py-3"
            : "border-border bg-surface-strong px-5 py-5",
        )}
      >
        <div
          className={classNames(
            "flex items-center transition-all duration-300",
            collapsed ? "justify-center gap-0" : "gap-3",
          )}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <Building2 className="h-5 w-5" />
          </div>
          {/* Fade out fast so it doesn't overlap the narrowing sidebar.
              whitespace-nowrap prevents line-wrapping during the transition. */}
          <div
            className={classNames(
              "min-w-0 overflow-hidden transition-opacity duration-150",
              collapsed ? "pointer-events-none opacity-0" : "opacity-100",
            )}
          >
            <p className="whitespace-nowrap text-xs uppercase tracking-[0.24em] text-muted">
              Company hub
            </p>
            <h1 className="whitespace-nowrap text-lg font-semibold tracking-[-0.03em]">
              Northstar
            </h1>
          </div>
        </div>

        {/* grid-rows trick: animates the block height smoothly to zero
            without needing JS-measured heights. */}
        <div
          className={classNames(
            "grid transition-all duration-200",
            collapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100",
          )}
        >
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-6 text-muted">
              Shared workspace for internal communications, approvals, reporting, and
              employee self-service.
            </p>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-2">
        {dashboardNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.title : undefined}
              className={classNames(
                // In collapsed mode the link is transparent so hover/active
                // effects don't stretch across the full sidebar width.
                // Those styles are moved down to the icon <span> instead.
                "group flex items-center rounded-2xl transition-all duration-300",
                collapsed
                  ? "h-10 justify-center border-0 bg-transparent p-0"
                  : classNames(
                      "gap-3 border px-4 py-3",
                      isActive
                        ? "border-transparent bg-accent text-white shadow-[var(--shadow-lg)]"
                        : "border-transparent bg-surface text-ink hover:border-border hover:bg-surface-strong",
                    ),
              )}
            >
              <span
                className={classNames(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition",
                  collapsed
                    ? isActive
                      ? "bg-accent text-white shadow-[var(--shadow-lg)]"
                      : "bg-accent-soft text-accent hover:bg-surface-strong"
                    : isActive
                      ? "bg-white/12 text-white"
                      : "bg-accent-soft text-accent",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              {/* whitespace-nowrap stops labels wrapping mid-transition */}
              <span
                className={classNames(
                  "min-w-0 overflow-hidden transition-opacity duration-150",
                  collapsed ? "pointer-events-none opacity-0" : "opacity-100",
                )}
              >
                <span className="block whitespace-nowrap text-sm font-semibold">
                  {item.title}
                </span>
                <span
                  className={classNames(
                    "mt-0.5 block overflow-hidden text-xs",
                    isActive ? "text-white/72" : "text-muted",
                  )}
                >
                  <span className="sidebar-marquee-track inline-flex min-w-max whitespace-nowrap">
                    <span>{item.description}</span>
                    <span aria-hidden="true" className="ml-8">
                      {item.description}
                    </span>
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Toggle button — same collapsed/expanded pattern as nav items */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={classNames(
          "group flex items-center rounded-2xl transition-all duration-300",
          collapsed
            ? "h-10 justify-center border-0 bg-transparent p-0"
            : "gap-3 border border-transparent bg-surface px-4 py-3 text-muted hover:border-border hover:bg-surface-strong hover:text-ink",
        )}
      >
        <span
          className={classNames(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition",
            collapsed ? "hover:bg-surface-strong" : "",
          )}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </span>
        <span
          className={classNames(
            "overflow-hidden transition-opacity duration-150",
            collapsed ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <span className="block whitespace-nowrap text-sm font-semibold">Collapse</span>
        </span>
      </button>
    </aside>
  );
}