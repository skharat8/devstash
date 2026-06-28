import { ItemRow } from "@/components/dashboard/ItemRow";
import { recentItems } from "@/lib/dashboard";

// The "Recent" section: the 10 most recently updated items.
export function RecentItems() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Recent</h2>
      <div className="mt-4 space-y-3">
        {recentItems.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
