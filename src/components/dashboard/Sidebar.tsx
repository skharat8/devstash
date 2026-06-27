"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Boxes, ChevronDown, Folder, Settings, Star } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  Sidebar as SidebarRoot,
} from "@/components/ui/sidebar";
import { itemTypeIcons, itemTypeSlug } from "@/lib/item-icons";
import { collections, currentUser, itemTypes, items } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

// How many of the most recently-updated collections to surface.
const RECENT_LIMIT = 5;

// Styling for the small "FAVORITES" / "RECENT" sub-headings inside Collections.
const SUB_LABEL =
  "text-sidebar-foreground/60 px-2 pt-1.5 pb-0.5 text-[0.65rem] font-medium uppercase tracking-wider";

// Styling shared by the "Types" / "Collections" collapsible category headers.
const CATEGORY_LABEL =
  "group/collapsible hover:text-sidebar-foreground cursor-pointer";

const CHEVRON =
  "ml-auto transition-transform group-data-[panel-open]/collapsible:rotate-180";

// Number of items per type, used for the badge counts in the Types group.
const itemCountByType = items.reduce<Record<string, number>>((acc, item) => {
  acc[item.itemTypeId] = (acc[item.itemTypeId] ?? 0) + 1;
  return acc;
}, {});

const favoriteCollections = collections
  .filter((collection) => collection.isFavorite)
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

// Most recently updated collections, excluding favorites (already shown above).
const recentCollections = collections
  .filter((collection) => !collection.isFavorite)
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  .slice(0, RECENT_LIMIT);

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarRoot collapsible="icon">
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2 px-1 py-1.5">
          <div
            className={cn(
              `bg-primary text-primary-foreground flex size-7 shrink-0
              items-center justify-center rounded-lg`,
            )}
          >
            <Boxes className="size-4" />
          </div>
          <span
            className={cn(
              `text-base font-semibold tracking-tight
              group-data-[collapsible=icon]:hidden`,
            )}
          >
            DevStash
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {/* Types — a collapsible category. Its icons stay visible when the
            sidebar is collapsed to the icon rail. */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel
              render={<CollapsibleTrigger />}
              className={cn(CATEGORY_LABEL)}
            >
              Types
              <ChevronDown className={cn(CHEVRON)} />
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {itemTypes.map((type) => {
                    const Icon = itemTypeIcons[type.icon];
                    const href = `/items/${itemTypeSlug(type.name)}`;
                    return (
                      <SidebarMenuItem key={type.id}>
                        <SidebarMenuButton
                          isActive={pathname === href}
                          tooltip={`${type.name}s`}
                          render={<Link href={href} />}
                        >
                          {Icon ? <Icon style={{ color: type.color }} /> : null}
                          <span>{type.name}s</span>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>
                          {itemCountByType[type.id] ?? 0}
                        </SidebarMenuBadge>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Collections — a collapsible category, hidden entirely when the
            sidebar is collapsed to the icon rail. */}
        <Collapsible
          defaultOpen
          className="group-data-[collapsible=icon]:hidden"
        >
          <SidebarGroup>
            <SidebarGroupLabel
              render={<CollapsibleTrigger />}
              className={cn(CATEGORY_LABEL)}
            >
              Collections
              <ChevronDown className={cn(CHEVRON)} />
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {favoriteCollections.length > 0 && (
                  <>
                    <div className={SUB_LABEL}>Favorites</div>
                    <SidebarMenu>
                      {favoriteCollections.map((collection) => (
                        <SidebarMenuItem key={collection.id}>
                          <SidebarMenuButton tooltip={collection.name}>
                            <Folder />
                            <span>{collection.name}</span>
                            <Star
                              className="ml-auto fill-amber-400 text-amber-400"
                            />
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </>
                )}

                {recentCollections.length > 0 && (
                  <>
                    <div className={SUB_LABEL}>Recent</div>
                    <SidebarMenu>
                      {recentCollections.map((collection) => (
                        <SidebarMenuItem key={collection.id}>
                          <SidebarMenuButton tooltip={collection.name}>
                            <Folder />
                            <span>{collection.name}</span>
                          </SidebarMenuButton>
                          <SidebarMenuBadge>
                            {collection.itemCount}
                          </SidebarMenuBadge>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </>
                )}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip={currentUser.name}>
              <div
                className={cn(
                  `bg-muted text-foreground flex size-8 shrink-0 items-center
                  justify-center rounded-full text-xs font-medium`,
                )}
              >
                {initials(currentUser.name)}
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-sm font-medium">
                  {currentUser.name}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {currentUser.email}
                </span>
              </div>
              <Settings className="text-muted-foreground ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </SidebarRoot>
  );
}
