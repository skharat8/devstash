import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { recentCollections } from "@/lib/dashboard";

// The "Collections" section: a grid of the most recently updated collections.
export function RecentCollections() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Collections</h2>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground text-sm
            transition-colors"
        >
          View all
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {recentCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
