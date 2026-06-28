import { Star } from "lucide-react";

import { dominantType, typesInCollection } from "@/lib/dashboard";
import { itemTypeIcons } from "@/lib/item-icons";
import type { Collection } from "@/lib/mock-data";

// A color-coded collection card. The left accent is the type the collection
// holds most of (falls back to the default border when no items are loaded).
export function CollectionCard({ collection }: { collection: Collection }) {
  const dominant = dominantType(collection.id);
  const types = typesInCollection(collection.id);

  return (
    <div
      className="bg-card hover:bg-accent/40 flex min-h-[180px] flex-col
        rounded-xl border border-l-2 p-5 transition-colors"
      style={dominant ? { borderLeftColor: dominant.color } : undefined}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="font-medium">{collection.name}</h3>
        {collection.isFavorite && (
          <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
        )}
      </div>
      <p className="text-muted-foreground mt-0.5 text-sm">
        {collection.itemCount} items
      </p>

      {collection.description && (
        <p className="text-muted-foreground mt-4 line-clamp-2 text-sm">
          {collection.description}
        </p>
      )}

      {types.length > 0 && (
        <div className="mt-auto flex items-center gap-2 pt-4">
          {types.map((type) => {
            const Icon = itemTypeIcons[type.icon];
            return Icon ? (
              <Icon
                key={type.id}
                className="size-4"
                style={{ color: type.color }}
              />
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
