# Elevation, borders and shape

## Radius
| Token | Value | Use |
|---|---|---|
| `radius-0` | 0 | Tactical frames, buttons, inputs, terminals, HUD panels — sharp or chamfered |
| `radius-8` | 8 | Cards, tool tiles, notifications |
| `radius-12` | 12 | Dialogs, AI response panel, hero card |
| `radius-full` | 999 | Pills, toggles, status dots, HUD rings |

## The Phantom Cut (chamfer)
A diagonal corner cut on the **top-right and bottom-left**. It is the system's signature geometry.

```css
.cut::before {               /* draw the fill on ::before so focus rings are never clipped */
  content: ""; position: absolute; inset: 0; z-index: -1; background: var(--surface-inverse);
  --c: var(--chamfer-10);
  clip-path: polygon(0 0, calc(100% - var(--c)) 0, 100% var(--c), 100% 100%, var(--c) 100%, 0 calc(100% - var(--c)));
}
```
| Token | Value | Use |
|---|---|---|
| `chamfer-6` | 6 | Small controls, badges |
| `chamfer-10` | 10 | Buttons, inputs, HUD frames |
| `chamfer-16` | 16 | Hero frames, terminal panels, the StatusPanel |

Use the cut selectively — important panels and controls, never every element. Under `forced-colors`, chamfers drop to plain rectangles with a system border.

## Stroke
`stroke-1` (1 px) for default borders and technical lines; `stroke-2` (2 px) for heavier framing of major surfaces, focus rings and active indicators.

## Depth
| Token | Value | Use |
|---|---|---|
| `depth-1` | `0 1px 2px` ink 8 % + `0 1px 1px` ink 4 % | Resting cards and tiles |
| `depth-2` | `0 8px 24px` ink 10 % + `0 2px 6px` ink 6 % | Hovered tiles, dropdowns, tooltips |
| `depth-3` | `0 18px 48px` ink 16 % + `0 4px 12px` ink 8 % | Dialogs, command palette, floating panels |
| `crimson-edge` | 1 px crimson ring + `0 6px 18px` crimson 20 % | The signature selected edge — **once per view** |
| `laser-glow` | `0 0 10px` electric 45 % | Laser lines and scan sweeps only |
| `inset-well` | inset `0 1px 2px` ink 8 % | Input wells and sunken fields |

Layered panels and subtle shadows create depth; heavy glow does not. Glow belongs to the single hottest point on a surface.

## Sizes
| Token | Value | Use |
|---|---|---|
| `control-sm` | 32 | Compact toolbar controls (pointer only; ≥ 24 px target) |
| `control-md` | 40 | Default buttons and inputs |
| `control-lg` | 44 | Primary and touch actions |
| `tabstrip-height` | 40 | Browser tab strip |
| `omnibox-height` | 44 | Omnibox / command field |
| `bookmarks-height` | 32 | Favorites bar |
| `rail-width` | 56 | Left utility rail |

Borders are 1–2 px; heavier framing is reserved for major surfaces. `border-default` never stands alone as a control boundary — use `border-control`.
