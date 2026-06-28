import { Pin } from "lucide-react";

import { ItemRow } from "@/components/dashboard/ItemRow";
import { pinnedItems } from "@/lib/dashboard";

// The "Pinned" section: items the user has pinned to the top.
export function PinnedItems() {
  if (pinnedItems.length === 0) return null;

  return (
    <section>
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Pin className="size-4" />
        Pinned
      </h2>
      <div className="mt-4 space-y-3">
        {pinnedItems.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
