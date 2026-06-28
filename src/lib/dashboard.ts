// Derived data for the dashboard main area. Sourced from mock-data until the
// database is wired up. Shapes follow the Prisma schema in
// context/project-overview.md.
import {
  type Collection,
  type Item,
  type ItemType,
  collections,
  itemTypes,
  items,
} from "@/lib/mock-data";

// How many recent collections / items to surface in the main area.
const RECENT_COLLECTIONS_LIMIT = 6;
const RECENT_ITEMS_LIMIT = 10;

// Look up an ItemType by id (for colors and icons).
export const itemTypeById: Record<string, ItemType> = Object.fromEntries(
  itemTypes.map((type) => [type.id, type]),
);

// Items that belong to a given collection (via the item's collectionIds).
function itemsInCollection(collectionId: string): Item[] {
  return items.filter((item) => item.collectionIds.includes(collectionId));
}

// The type a collection holds most of — drives the card's accent color.
// Derived from loaded items; null when the collection has no loaded items.
export function dominantType(collectionId: string): ItemType | null {
  const members = itemsInCollection(collectionId);
  if (members.length === 0) return null;

  const counts = members.reduce<Record<string, number>>((acc, item) => {
    acc[item.itemTypeId] = (acc[item.itemTypeId] ?? 0) + 1;
    return acc;
  }, {});

  const [topId] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return itemTypeById[topId] ?? null;
}

// Distinct types present in a collection — drives the icon row on the card.
export function typesInCollection(collectionId: string): ItemType[] {
  const seen = new Set<string>();
  const result: ItemType[] = [];
  for (const item of itemsInCollection(collectionId)) {
    if (seen.has(item.itemTypeId)) continue;
    seen.add(item.itemTypeId);
    const type = itemTypeById[item.itemTypeId];
    if (type) result.push(type);
  }
  return result;
}

// Top-of-page summary counts.
export const stats = {
  items: items.length,
  collections: collections.length,
  favoriteItems: items.filter((item) => item.isFavorite).length,
  favoriteCollections: collections.filter((collection) => collection.isFavorite)
    .length,
};

function byRecentlyUpdated<T extends { updatedAt: string }>(
  a: T,
  b: T,
): number {
  return b.updatedAt.localeCompare(a.updatedAt);
}

export const recentCollections: Collection[] = [...collections]
  .sort(byRecentlyUpdated)
  .slice(0, RECENT_COLLECTIONS_LIMIT);

export const pinnedItems: Item[] = items
  .filter((item) => item.isPinned)
  .sort(byRecentlyUpdated);

export const recentItems: Item[] = [...items]
  .sort(byRecentlyUpdated)
  .slice(0, RECENT_ITEMS_LIMIT);

// "Jan 15"-style short date for item cards.
export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
