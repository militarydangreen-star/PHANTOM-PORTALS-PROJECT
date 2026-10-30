# Layout: Browser Shell & Command Center

How the components assemble into the application frame. The browser-shell interaction model stays familiar; the Phantom treatment never reduces usability.

## The shell

| Region | Component | Surface | Size |
|---|---|---|---|
| Tab strip | TabStrip | `surface-inverse` | `tabstrip-height` 40px |
| Omnibox row | IconButton (back, forward, reload) + Omnibox | `surface-primary` | `omnibox-height` 44px |
| Favorites | BookmarksBar | `surface-primary` | `bookmarks-height` 32px |
| Utility rail | UtilityRail | `surface-inverse` | `rail-width` 56px |
| Workspace | anything | `surface-canvas` | fluid |

Black forms the frame (tab strip and rail, about 25–35% of the view's weight), and white holds the work. The active tab opens onto the canvas, with its crimson top edge as the only crimson in the frame.

## Command Center home

1. **Hero band:** PhantomHero, once. The Phantom emblem sits right, with copy on glass at left and one crimson primary action.
2. **Command field:** the Omnibox at full width, which is the central AI/search entry.
3. **Quick launch:** ToolTile grid with 3–4 columns. The last-used tile gets `crimson-edge`.
4. **Status row:** StatusPanel (black HUD) beside a HudRing for overall health.
5. **Work surfaces:** Terminal, DiagnosticTable and AIResponse dock in a two-column grid below; CommandModules collapse in a right sidebar.

Separate sections with `space-32`–`space-48`. Use asymmetric column splits (8/4, 7/5) inside a 12-column grid with `space-24` gutters.

## Responsive behaviour

| Width | Change |
|---|---|
| ≥ 1280 | Full shell; Command Center at 12 columns; sidebar modules visible. |
| 1024–1279 | Sidebar modules move below the work surfaces; tiles drop to 3 columns. |
| 768–1023 | Rail collapses to icons only (already the default); tiles go to 2 columns; hero art scales down, copy keeps its glass plate. |
| < 768 | Rail becomes a bottom bar of 5 items; tab strip scrolls horizontally; hero art drops to the emblem alone; tables scroll inside their panel. |

Hierarchy survives every width: the command field and the primary action stay above the fold.

## Where the art goes

- **Allowed:** the hero band, page-header edges, empty states, section dividers (`torn-edge`, `coordinate-ruler`) and transitions.
- **Forbidden:** inside tables, terminals, forms, search results or toasts.
- An isometric `iso-grid` at ≤ 0.35 opacity may sit under the canvas of a hero, but never under working panels.
