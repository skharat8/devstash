# Current Feature

<!-- Feature name and short description -->

## Status

<!-- Not Started | In Progress | Completed -->

## Goals

<!-- Goals and requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest. -->

- **Dashboard UI Phase 1** — Completed. ShadCN setup, `/dashboard` route, top bar + sidebar/main placeholders, dark mode by default. Spec: @context/features/dashboard-phase-1-spec.md
- **Dashboard UI Phase 2** — Completed. Functional collapsible sidebar: shadcn sidebar + collapsible (Base UI), collapsible Types/Collections categories, item types linking to `/items/TYPE`, favorite + recent collections, user avatar footer, sidebar toggle in the top bar, mobile drawer. Fade/height animation on category toggle. Spec: @context/features/dashboard-phase-2-spec.md
- **Dashboard UI Phase 3** — Completed. Main content area driven from `src/lib/mock-data.ts`: page header, 4 stats cards (items, collections, favorite items, favorite collections), recent collections grid (color-coded by derived dominant type, with favorite star + type-icon row), pinned items, and 10 recent items. Section components live in `src/components/dashboard/`; derived data in `src/lib/dashboard.ts`. Spec: @context/features/dashboard-phase-3-spec.md
