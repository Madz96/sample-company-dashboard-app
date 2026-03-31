import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 px-4 py-4 lg:flex-row">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <DashboardHeader session={session} />
        <main className="flex flex-1 flex-col gap-6 pb-6">{children}</main>
      </div>
    </div>
  );
}