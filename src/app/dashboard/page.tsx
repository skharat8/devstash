import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <TopBar />

        <main className="flex-1 p-6">
          <h2 className="text-lg font-semibold">Main</h2>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
