# Isometric and HUD rules

The engineered half of the formula: precision that proves the gesture was measured.

## The parts
| Mark | File | Use |
|---|---|---|
| Iso grid | `isometric-grids/iso-grid.svg` | Under a hero canvas at ≤ 0.35 opacity — never under working panels |
| Iso cube | `isometric-grids/iso-cube.svg` | Hatched and solid faces; module art, empty states |
| Hex cluster | `isometric-grids/hex-cluster.svg` | Portal motif, edges |
| Circuit trace | `circuitry/circuit-trace.svg` | Connection lines, transitions |
| Laser lines | `circuitry/laser-lines.svg` | `accent-electric`, decorative only, one per view |
| HUD ring | `callouts/hud-ring.svg` | Graduated ring — pair with an ensō or a splatter |
| Target reticle | `callouts/target-reticle.svg` | Targeting marker; pair with a splatter |
| Coordinate ruler | `callouts/coordinate-ruler.svg` | Dividers, plate margins |

## Geometry
- One isometric projection: **30°**, without exception. Wireframes are hairlines (`stroke-1`).
- Rings are compass-perfect; scales are graduated (ticks every 3°–6°, longer every 30°).
- Technical labelling is instrument labelling: `mono-label` or tracked Space Grotesk, small, aligned to a scale or margin, naming a plate, coordinate or module (`MOD-04`, `PP-01 / PHANTOM`, `FIG. 1`).
- Coordinates and readings in art are decorative and must not imitate real telemetry inside the product UI.

## In the interface
- HUD framing is used sparingly; **data stays the primary content**.
- Tactical frames: `radius-0` with the Phantom Cut on important panels. Fine technical lines, directional geometry, layered panels.
- Scanning and targeting effects only signal real activity (the scan sweep on indeterminate progress, the HUD arc while data is live).
- No neon wireframe overload, no "hacker" green, no glowing everything — premium over excessive.
