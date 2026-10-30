# Browser shell

The application frame keeps the familiar browser model — the Phantom treatment never reduces usability.

## Regions (desktop)
| Region | Component | Surface | Size token |
|---|---|---|---|
| Tab strip | `TabStrip` | `surface-inverse` | `tabstrip-height` 40 |
| Omnibox row | `IconButton` (back, forward, reload) + `Omnibox` | `surface-primary` | `omnibox-height` 44 |
| Favorites | `BookmarksBar` | `surface-primary` | `bookmarks-height` 32 |
| Utility rail | `UtilityRail` | `surface-inverse` | `rail-width` 56 |
| Workspace | anything | `surface-canvas` | fluid |
| Inspector (optional) | — (backlog) | `surface-primary` | 320 wide; a drawer below `lg` |

Black forms the frame (tab strip + rail ≈ 25–35 % of the view's weight); white holds the work. The active tab opens onto the canvas with a 2 px crimson top edge and a chamfered top-right corner — the only crimson in the frame.

> Dimensions follow the tokens. The agent brief's 56 / 36 / 72 values are an open conflict ([C-01](../../00_START_HERE/CANON_REGISTER.md#open-conflicts), [ADR-0008](../../00_START_HERE/decisions/ADR-0008-shell-dimensions.md)).

## TabStrip
Chromium-style tabs on black. Middle-click closes, Ctrl+T opens, drag reorders (consumer implements drag). Titles truncate in `.pp-btab__title`.
```tsx
<TabStrip tabs={tabs} activeId={active} onSelect={setActive}
  onClose={(id) => setTabs(tabs.filter((t) => t.id !== id))} onNew={openTab} />
```
`tabs: { id, title, icon? }[]`. Keyboard: tabs are focusable; Enter/Space selects.

## BookmarksBar
32 px favorites bar on white: 16 px icons, 12 px medium labels, hover `surface-sunken`; separate groups with `'separator'`.
```tsx
<BookmarksBar items={[{ label: 'PowerShell Toolkit', href: '/tools/ps', icon: 'terminal' }, 'separator',
  { label: 'SOP Library', href: '/sop', icon: 'folder' }]} />
```

## Command Center home
1. **Hero band** — `PhantomHero`, once: emblem right, copy on glass left, one crimson primary action.
2. **Command field** — `Omnibox` at full width: the central AI / search entry.
3. **Quick launch** — `ToolTile` grid, 3–4 columns; the last-used tile gets `crimson-edge`.
4. **Status row** — `StatusPanel` (black HUD) beside a `HudRing` for overall health.
5. **Work surfaces** — `Terminal`, `DiagnosticTable`, `AIResponse` in a two-column grid; `CommandModule`s collapse in a right sidebar.

Sections 32–48 apart; asymmetric splits (8/4, 7/5) in a 12-column grid with 24 gutters.

## Responsive
See [breakpoints](../foundations/breakpoints.md). Below 768 px the rail becomes a **bottom dock of 5 items**, the tab strip becomes a labelled switcher (or scrolls), the hero drops to the emblem, tables scroll inside their panel. The command field and primary action stay above the fold.

## Where art may go
Allowed: hero band, page-header edges, empty states, section dividers, transitions. Forbidden: tables, terminals, forms, search results, toasts. An `iso-grid` at ≤ 0.35 opacity may sit under a hero, never under working panels.

## Open question
The Codex v3.1 handoff describes eight top-level app pages, a page-specific left sidebar, a right intelligence rail and a bottom AI workbench ([C-03](../../00_START_HERE/CANON_REGISTER.md#open-conflicts)). Those pieces are in the [backlog](BACKLOG.md) until the owner settles the information architecture.
