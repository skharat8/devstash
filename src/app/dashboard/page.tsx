import { TopBar } from "@/components/dashboard/TopBar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <div className="flex flex-1">
        <aside className="bg-sidebar w-64 shrink-0 border-r p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
        </aside>

        <main className="flex-1 p-6">
          <h2 className="text-lg font-semibold">Main</h2>
        </main>
      </div>
    </div>
  );
}
