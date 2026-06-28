import { Pin, Star } from "lucide-react";

import { formatShortDate, itemTypeById } from "@/lib/dashboard";
import { itemTypeIcons } from "@/lib/item-icons";
import type { Item } from "@/lib/mock-data";

// A horizontal item card used in the Pinned and Recent lists. The left accent
// and leading icon are colored by the item's type.
export function ItemRow({ item }: { item: Item }) {
  const type = itemTypeById[item.itemTypeId];
  const Icon = type ? itemTypeIcons[type.icon] : null;

  return (
    <div
      className="bg-card hover:bg-accent/40 flex items-start gap-4 rounded-xl
        border border-l-2 p-4 transition-colors"
      style={type ? { borderLeftColor: type.color } : undefined}
    >
      <div
        className="bg-muted flex size-9 shrink-0 items-center justify-center
          rounded-lg"
      >
        {Icon ? (
          <Icon className="size-4" style={{ color: type?.color }} />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h4 className="truncate font-medium">{item.title}</h4>
          {item.isPinned && (
            <Pin className="text-muted-foreground size-3.5 shrink-0" />
          )}
          {item.isFavorite && (
            <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
          )}
        </div>

        {item.description && (
          <p className="text-muted-foreground mt-0.5 truncate text-sm">
            {item.description}
          </p>
        )}

        {item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground rounded px-1.5 py-0.5
                  text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <span className="text-muted-foreground shrink-0 text-xs">
        {formatShortDate(item.updatedAt)}
      </span>
    </div>
  );
}
