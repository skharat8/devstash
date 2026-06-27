import { FolderPlus, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Display-only top bar for the dashboard. Search and buttons are not wired up yet.
export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b px-4">
      <span className="text-base font-semibold tracking-tight">DevStash</span>

      <div className="relative w-full max-w-md">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input type="search" placeholder="Search items..." className="pl-9" />
        <kbd className="text-muted-foreground bg-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded border px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline">
          <FolderPlus className="size-4" />
          New Collection
        </Button>
        <Button>
          <Plus className="size-4" />
          New Item
        </Button>
      </div>
    </header>
  );
}
