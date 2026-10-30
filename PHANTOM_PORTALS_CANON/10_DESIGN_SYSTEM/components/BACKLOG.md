# Component backlog

Pieces the product needs that the library does not ship yet. Status **DRAFT** until built, documented and added to the gallery. Build each with tokens, all states, keyboard support and reduced motion; then add a reference card and an entry in [README.md](README.md).

| Component | Why | Source of the requirement | Notes |
|---|---|---|---|
| **BottomDock** | Rail replacement below 768 px | layout.md, agent brief | 5 items, 60 px + safe area, active = crimson top bar + crimson label. Prototyped in `40_MOCKUPS/screens/shell/command-center-phone.dc.html` |
| **TabSwitcher** | Tab strip replacement on phones | agent brief | Labelled count button + sheet listing tabs |
| **InspectorDrawer** | Optional right-side inspector (320 px) | agent brief | Drawer below `lg`; Escape closes; focus trap |
| **Dialog / CommandPalette** | Modal confirmation, command palette | design system (depth-3, overlay-scrim) | `radius-12`, `depth-3`, scrim, focus trap, Escape |
| **TextField / TextArea** | Forms beyond the omnibox | design system controls list | 40 px, `border-control`, `inset-well`, crimson focus spine |
| **FileExplorer** | File and resource browsers | design system technical components | Dense rows, mono paths, no art |
| **Chart (telemetry)** | System monitoring charts | design system, agent brief | Monochrome with sparing crimson focal data; axes, legends, units, text alternative |
| **EmptyState** | Every panel's empty state | design system (empty states may carry art) | One Trash Polka mark + precision mark, a sentence, an action |
| **PageSidebar / IntelligenceRail / AIWorkbench** | Codex v3.1 information architecture | Codex handoff v3.1 | Blocked on [C-03](../../00_START_HERE/CANON_REGISTER.md#open-conflicts) |
| **BrainHud** | Optional 3D neural HUD | [brain-hud.md](../motion-vfx/brain-hud.md) | Only on request; static fallback |

## Known gaps in the shipped library (found while building the gallery, 2026-10-29)

`bundle.css` contains **no breakpoint rules** (only `prefers-reduced-motion` and `forced-colors`), so the responsive behaviour described in [breakpoints.md](../foundations/breakpoints.md) is not built in yet:

| Component | Below 768 px today | Canon says |
|---|---|---|
| `PhantomHero` | Art stays 420 px wide and absolutely positioned; headline stays 56 px; 48 px padding — the glass plate keeps copy readable, but the art is mostly clipped | Art drops to the emblem alone; hero 180–300 px tall; display size steps down |
| `TabStrip` | Tabs overflow the strip | Strip scrolls horizontally, or becomes a tab switcher |
| `UtilityRail` | Stays a vertical rail | Becomes a 5-item bottom dock |
| `StatusPanel` (any width) | A word value such as "Unavailable" is set at the 40 px stat size and is clipped in columns under ~120 px | Word values step down to `h3` size (`.pp-metric b:not(:has(+ …))` or a `kind="text"` prop) |

Interim fix (consumer-side until the library adopts it). Tested 2026-10-29 in [`60_TEMPLATES/html-css-starter`](../../60_TEMPLATES/html-css-starter/index.html) at 390 and 1440 px in headless Chromium: no overflow, no clipping, 0 console errors.
```css
@media (max-width: 767px) {
  .pp-tabstrip { overflow-x: auto; scrollbar-width: none; }
  .pp-hero { min-height: 0; padding: var(--space-16); }
  .pp-hero h1 { font: var(--text-h1); }
  .pp-hero__art { width: 120px !important; height: 120px !important; top: var(--space-8) !important; right: var(--space-8) !important; transform: none !important; }
  .pp-hero__copy { max-width: none; padding: var(--space-16); } /* the glass plate over the art keeps copy readable */
}
```
The phone hero still measures ~340 px with the starter's copy (canon target 180–300): shorten the description or drop it below `sm`.

**Layout gotcha:** a `PhantomHero` inside a fixed-height scrolling grid (`overflow: auto`) collapses — the hero is `overflow: hidden`, so its minimum grid contribution is ~0 and auto rows shrink when content exceeds the container. Give the scrolling grid `grid-auto-rows: max-content`. Likewise give app-level grids `grid-template-columns: minmax(0, 1fr)` so the tab strip cannot widen the page on phones.
