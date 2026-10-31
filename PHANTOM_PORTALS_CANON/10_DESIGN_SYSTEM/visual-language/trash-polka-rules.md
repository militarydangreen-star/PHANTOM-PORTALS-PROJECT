# Trash Polka rules

Trash Polka is the expressive half of the formula: red, black and white collage — brush cuts, ink splatter, halftone dots, torn paper, ensō rings, hex fragments, typewriter fragments. In Polka Portals it **enhances the interface and never overwhelms it**.

## The parts
All shipped marks are project-original Ink Protocol vectors in [`30_ASSETS/textures`](../../30_ASSETS/textures/) and [`30_ASSETS/hud-geometry`](../../30_ASSETS/hud-geometry/).

| Mark | File | Character |
|---|---|---|
| Crimson cut | `brush-slash.svg` | A single diagonal dry-brush slash that runs out of pigment |
| Ink swash | `brush-stroke.svg` | Horizontal dry-brush drag with separating bristles |
| Crimson cross | `brush-x.svg` | Two crossed cuts — use for strike / cancel moments, rarely |
| Ensō | `enso-ring.svg` | Dry-brush ring left open at the top |
| Engraved hatch | `engraved-hatch.svg` | Cross-hatched disc — engraving texture |
| Splatter | `splatter-ink.svg`, `splatter-crimson.svg` | Power-law falloff from an impact point, tadpole droplets and mist |
| Drips | `ink-drips.svg` | A bar of ink with gravity-pulled drips |
| Halftone | `halftone-fade.svg`, `halftone-disc.svg` | 45° screen resolving from solid to nothing |
| Torn paper | `torn-edge.svg` | Ink over crimson torn edge — dividers and transitions |

## Where
- **Allowed:** the hero band, page-header edges, empty states, section dividers (`torn-edge`, `coordinate-ruler`), transitions, splash and boot, posters, thumbnails, album art.
- **Forbidden:** behind or inside controls, tables, search results, terminal output, forms, toasts or body text.
- Essential text over art needs a verified surface: `overlay-glass` (alpha ≥ 0.85) or a solid panel.

## How much
- At most **three vectors in one composition, one of them crimson**.
- **Pair every chaos mark with a precision mark** — a brush cut with an iso grid, a splatter with a target reticle, an ensō with a graduated ring. That pairing *is* the 50/50 formula.
- Grunge is strongest at the edges and fades toward the work.
- The gesture is singular and diagonal and **cuts across** the geometry rather than sitting inside it.

## Craft
- Marks are simulated, not drawn: dry-brush strokes are dozens of individual bristles; splatter falls off with distance; halftone is a rotated screen. Generated or hand-made additions must reach the same density — see [ink-protocol.md](ink-protocol.md).
- Recolour vectors only within the canon inks (`#151519`, `#A0112B`, `#B8143E`, `#F6F5F2`; `#EE5367` for light only). Record the derivative with its own sidecar.
- Never trace or sample third-party Trash Polka art ([ADR-0007](../../00_START_HERE/decisions/ADR-0007-third-party-references.md)).
