# Composition ratios

| Axis | Ratio | Read it as |
|---|---|---|
| Style | **50 % Trash Polka / 50 % isometric precision** | Across a screen, not inside each component. Controls are 100 % precise; the hero may be 80 % gesture. |
| Colour | **55–65 % white · 25–35 % black · 5–10 % crimson** | Measured over the whole view. Black is the frame (tab strip + rail ≈ 25–35 % of the shell's weight); white holds the work. |
| Vectors | **≤ 3 per composition, one crimson** | Plus the Phantom, if present. |
| Phantom | **≤ 1 per surface** | Never repeated across panels. |
| Primary actions | **1 crimson primary per context** | Secondary actions are matte black; everything else ghost. |
| Crimson edge | **1 `crimson-edge` per view** | The last-used tile or the selected item. |
| Glow | **1 hottest point** | `laser-glow` or the eyes — never both competing. |

## Layering (back to front)
1. Paper — `surface-canvas`, quiet, never decorated behind work.
2. Precision — grids, rings, scales (low opacity).
3. Gesture — the single diagonal cut, splatter, halftone.
4. Figure — the Phantom, rendered like an engraving.
5. Glass / panels — `overlay-glass` plates or solid surfaces.
6. Text and controls — always on a verified surface.

## Checking a composition
Squint test: the black frame and the one crimson focal point should be visible first, then the white working area. If crimson reads as a wash rather than a point, cut it back. If the screen reads as a dark UI, it is off-canon.
