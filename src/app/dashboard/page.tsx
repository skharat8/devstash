import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PinnedItems } from "@/components/dashboard/PinnedItems";
import { RecentCollections } from "@/components/dashboard/RecentCollections";
import { RecentItems } from "@/components/dashboard/RecentItems";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { TopBar } from "@/components/dashboard/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <TopBar />

        <main className="flex-1 space-y-10 p-6">
          <DashboardHeader />
          <StatsCards />
          <RecentCollections />
          <PinnedItems />
          <RecentItems />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
