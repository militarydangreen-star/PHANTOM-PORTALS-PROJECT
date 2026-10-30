# Breakpoints

Six ranges in CSS pixels. This merges the design system's layout table (four ranges) with the agent brief's finer six ([C-02](../../00_START_HERE/CANON_REGISTER.md#open-conflicts)). **1440 px is the primary design reference.**

| Range | Name | Columns | Gutter | Shell | Command Center |
|---|---|---:|---:|---|---|
| 0–479 | `xs` | 4 | 16 | Tabs → a labelled tab switcher; rail → a 5-item bottom dock (60 px + safe area); favorites → collapsible shortcuts | Single column; hero art drops to the emblem alone; tables scroll in their panel |
| 480–767 | `sm` | 4 | 20 | Same as `xs` | Single column; compact tiles may pair |
| 768–1023 | `md` | 8 | 24 | Rail icons only (default); tab strip scrolls horizontally; inspector becomes a drawer | Tiles in 2 columns; hero art scales down, copy keeps its glass plate |
| 1024–1279 | `lg` | 12 | 24 | Full shell; inspector collapsed by default | Sidebar modules move below the work surfaces; tiles in 3 columns |
| 1280–1599 | `xl` | 12 | 32 | Full shell | 12 columns; sidebar modules visible; tiles 3–4 columns |
| 1600+ | `2xl` | 12 | 40 | Full shell | Max content width 1680 px; intentional open space |

Hierarchy survives every width: the command field and the primary action stay above the fold. Crop or simplify the Phantom art before shrinking an essential control.

**Hero height:** 360–560 spacious desktop · 320–440 laptop · 280–400 tablet · 180–300 phone; less on short screens. **Command field:** 560–760 max on desktop, full width on phones.

**Validate at** 320, 360, 390, 768, 1024, 1280, 1440 and 1920 px, at short heights, at 200 % text size and 400 % zoom.

```css
/* Media queries use min-width, mobile first */
@media (min-width: 480px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1600px) { /* 2xl */ }
```
Prefer container queries for panels whose width depends on where they are placed.
