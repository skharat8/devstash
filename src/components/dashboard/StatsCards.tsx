import {
  Folder,
  FolderHeart,
  LayoutGrid,
  type LucideIcon,
  Star,
} from "lucide-react";

import { stats } from "@/lib/dashboard";

const CARDS: { label: string; value: number; Icon: LucideIcon }[] = [
  { label: "Items", value: stats.items, Icon: LayoutGrid },
  { label: "Collections", value: stats.collections, Icon: Folder },
  { label: "Favorite Items", value: stats.favoriteItems, Icon: Star },
  {
    label: "Favorite Collections",
    value: stats.favoriteCollections,
    Icon: FolderHeart,
  },
];

// Four summary cards above the Collections section. Not in the reference
// screenshot — added per the Phase 3 spec.
export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {CARDS.map(({ label, value, Icon }) => (
        <div
          key={label}
          className="bg-card flex items-center gap-4 rounded-xl border p-4"
        >
          <div
            className="bg-muted text-muted-foreground flex size-10 shrink-0
              items-center justify-center rounded-lg"
          >
            <Icon className="size-5" />
          </div>
          <div>
            <div className="text-2xl leading-none font-semibold">{value}</div>
            <div className="text-muted-foreground mt-1 text-sm">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
