import {
  Code,
  File,
  Image,
  Link,
  type LucideIcon,
  Sparkles,
  StickyNote,
  Terminal,
} from "lucide-react";

// Maps an ItemType.icon string (a lucide icon name from mock-data) to its
// component, so the sidebar can render the right icon for each item type.
export const itemTypeIcons: Record<string, LucideIcon> = {
  Code,
  Sparkles,
  StickyNote,
  Terminal,
  Link,
  File,
  Image,
};

// The route slug for an item type, e.g. "Snippet" -> "snippets".
export function itemTypeSlug(name: string): string {
  return `${name.toLowerCase()}s`;
}
