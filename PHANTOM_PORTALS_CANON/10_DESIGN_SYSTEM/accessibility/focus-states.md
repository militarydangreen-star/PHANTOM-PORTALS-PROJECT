# Focus states

| Surface | Focus indicator | Token |
|---|---|---|
| Light (canvas, white, crimson-soft) | 2 px solid crimson outline, 2 px offset | `focus-ring` (`#A0112B`) — 8.05:1 on white |
| Black (rail, tab strip, terminal, HUD panels) | 2 px solid white outline, 2 px offset | `focus-ring-inverse` (`#FFFFFF`) — 18.2:1 on ink |
| Crimson fills (primary button) | The outline sits outside the chamfered fill on the offset, so it is drawn against the surrounding surface | — |
| Omnibox | Boundary becomes a 2 px crimson inset ring + a crimson spine on the left edge | `accent-crimson` |

The library applies this inside `PortalRoot`:
```css
.pp :focus-visible { outline: var(--stroke-2) solid var(--focus-ring); outline-offset: 2px; }
.pp-inverse :focus-visible { outline-color: var(--focus-ring-inverse); }
```

Rules:
- Use `:focus-visible`, never remove outlines without an equal replacement, never replace focus with glow alone.
- Chamfers are drawn on `::before`, so `clip-path` never clips the focus ring.
- Focus must not be hidden by sticky headers, toasts or drawers (WCAG 2.4.11).
- Focus order follows the visual order: tab strip → omnibox → bookmarks → rail → workspace (skip link first).
