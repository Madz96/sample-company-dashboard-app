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
];