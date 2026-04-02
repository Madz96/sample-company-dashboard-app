"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronUp,
  LogOut,
  Settings2,
  UserCircle2,
} from "lucide-react";
import { signOutUser } from "@/lib/auth-actions";

type DashboardAccountMenuProps = {
  collapsed: boolean;
  userName: string;
  userEmail?: string | null;
  roleLabel: string;
};

type MenuPosition = {
  left: number;
  top: number;
  transform: string;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function DashboardAccountMenu({
  collapsed,
  userName,
  userEmail,
  roleLabel,
}: DashboardAccountMenuProps) {
  const menuId = useId();
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function updateMenuPosition() {
      const rect = triggerRef.current?.getBoundingClientRect();

      if (!rect) {
        return;
      }

      setMenuPosition({
        left: collapsed ? rect.right + 12 : rect.left,
        top: rect.top - 8,
        transform: "translateY(-100%)",
      });
    }

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [collapsed, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;

      if (
        !triggerRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isProfileActive = pathname === "/profile";
  const isSettingsActive = pathname === "/settings";

  const menu =
    typeof document !== "undefined" && open && menuPosition
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label="Account actions"
            className="glass-panel fixed z-50 w-[min(20rem,calc(100vw-2rem))] rounded-[1.5rem] border border-border p-2 shadow-[var(--shadow-lg)]"
            style={menuPosition}
          >
            <div className="rounded-[1.25rem] border border-border bg-surface-strong px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Signed in as
              </p>
              <p className="mt-3 text-base font-semibold tracking-[-0.03em] text-ink">
                {userName}
              </p>
              <p className="mt-1 text-sm text-muted">{roleLabel}</p>
              {userEmail ? (
                <p className="mt-3 font-mono text-xs text-muted">{userEmail}</p>
              ) : null}
            </div>

            <div className="mt-2 space-y-1">
              <Link
                href="/profile"
                role="menuitem"
                onClick={() => setOpen(false)}
                className={classNames(
                  "flex items-center gap-3 rounded-[1.25rem] px-4 py-3 text-sm font-medium transition",
                  isProfileActive
                    ? "bg-accent text-white"
                    : "text-ink hover:bg-surface-strong",
                )}
              >
                <UserCircle2 className="h-4 w-4" />
                <span className="flex-1">Profile</span>
              </Link>

              <Link
                href="/settings"
                role="menuitem"
                onClick={() => setOpen(false)}
                className={classNames(
                  "flex items-center gap-3 rounded-[1.25rem] px-4 py-3 text-sm font-medium transition",
                  isSettingsActive
                    ? "bg-accent text-white"
                    : "text-ink hover:bg-surface-strong",
                )}
              >
                <Settings2 className="h-4 w-4" />
                <span className="flex-1">Settings</span>
              </Link>

              <form action={signOutUser}>
                <button
                  type="submit"
                  role="menuitem"
                  className="flex w-full items-center gap-3 rounded-[1.25rem] px-4 py-3 text-left text-sm font-medium text-danger transition hover:bg-[var(--danger-soft)]"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="flex-1">Sign out</span>
                </button>
              </form>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          title={collapsed ? `${userName} account menu` : undefined}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          onClick={() => setOpen((current) => !current)}
          className={classNames(
            "group flex w-full items-center rounded-2xl transition-all duration-300",
            collapsed
              ? "h-10 justify-center border-0 bg-transparent p-0"
              : "gap-3 border border-transparent bg-surface px-4 py-3 text-left hover:border-border hover:bg-surface-strong",
          )}
        >
          <span
            className={classNames(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition",
              open
                ? "bg-accent text-white shadow-[var(--shadow-lg)]"
                : "bg-accent-soft text-accent",
            )}
          >
            <UserCircle2 className="h-5 w-5" />
          </span>
          <span
            className={classNames(
              "overflow-hidden transition-[width,opacity] duration-150",
              collapsed
                ? "pointer-events-none w-0 opacity-0"
                : "min-w-0 flex-1 opacity-100",
            )}
          >
            <span className="block truncate text-sm font-semibold text-ink">{userName}</span>
            <span className="mt-0.5 block truncate text-xs text-muted">{roleLabel}</span>
          </span>
          <span
            className={classNames(
              "shrink-0 overflow-hidden transition-[width,opacity,transform,color] duration-200",
              collapsed ? "pointer-events-none w-0 opacity-0" : "w-4 opacity-100",
              open ? "rotate-0 text-accent" : "rotate-180 text-muted",
            )}
          >
            <ChevronUp className="h-4 w-4" />
          </span>
        </button>
      </div>
      {menu}
    </>
  );
}