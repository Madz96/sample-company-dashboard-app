import type { LucideIcon } from "lucide-react";
import {
  Bell,
  ChartNoAxesCombined,
  FolderClock,
  LayoutDashboard,
  Link2,
  Users,
} from "lucide-react";

export type DashboardNavItem = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const dashboardNavItems: DashboardNavItem[] = [
  {
    href: "/dashboard",
    title: "Home",
    description: "The command surface for daily updates, active work, and quick actions.",
    icon: LayoutDashboard,
  },
  {
    href: "/announcements",
    title: "Announcements",
    description: "Share leadership updates, launch notes, and company-wide reminders.",
    icon: Bell,
  },
  {
    href: "/tools",
    title: "Quick Tools",
    description: "Surface the most important internal links and self-service workflows.",
    icon: Link2,
  },
  {
    href: "/metrics",
    title: "Metrics",
    description: "Track the KPIs, targets, and operational health signals that matter.",
    icon: ChartNoAxesCombined,
  },
  {
    href: "/requests",
    title: "Requests",
    description: "Coordinate approvals, intake queues, and operational follow-through.",
    icon: FolderClock,
  },
  {
    href: "/directory",
    title: "Directory",
    description: "Help employees find teammates, teams, and the right owners quickly.",
    icon: Users,
  },
];