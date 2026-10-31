# Concepts — owner-generated concept art

AI-assisted concept sheets the owner made for Polka Portals. They show **direction**, not finished assets: small text is garbled and some colours break the three-ink rule. They are **REFERENCE**: on 2026-10-31 the owner adopted their name, **Polka Portals** ([ADR-0014](../../00_START_HERE/decisions/ADR-0014-rename-polka-portals.md)), and their **shield-mask logo**, now redrawn as clean vectors ([ADR-0015](../../00_START_HERE/decisions/ADR-0015-shield-logo.md), [logo.md](../../10_DESIGN_SYSTEM/visual-language/logo.md)). Never ship the sheets themselves.

## 2026-10-30
| Id | File | What | Measured (paper · black · crimson · off-palette) | Use in the canon |
|---|---|---|---|---|
| PP-CON-001 | [polka-portals-ui-inventory-concept.webp](2026-10-30/polka-portals-ui-inventory-concept.webp) | "Polka Portals — UI components": artifact inventory with category tabs, capacity meter, 24-item grid, detail panel, property meters, uses, actions | 56 % · 19 % · **16 %** · gold/purple/green rarity marks | Rebuilt on canon components as [screens/catalog/artifact-inventory.html](../screens/catalog/artifact-inventory.html); new components in the [backlog](../../10_DESIGN_SYSTEM/components/BACKLOG.md) |
| PP-CON-002 | [polka-portals-asset-pack-dark.webp](2026-10-30/polka-portals-asset-pack-dark.webp) | Asset pack: 4 shield-logo variants, icons, UI elements, frames, portal rings, textures, characters, environments, posters, palette, type | 8 % · 23 % · 18 % · 50 % grey ground | Source of the shield logo (redrawn as PP-BRAND-013 … 032); direction for portal rings and frames |
| PP-CON-003 | [polka-portals-asset-pack-light.webp](2026-10-30/polka-portals-asset-pack-light.webp) | Same layout on a light ground | 8 % · 25 % · 18 % · 49 % grey ground | As PP-CON-002 |
| PP-CON-004 | [phantom-portals-plate-01-operator-spec.webp](2026-10-30/phantom-portals-plate-01-operator-spec.webp) | Plate 01/07 — Fig. 1 The Operator, specimen sheet in the canon inks | 52 % · 14 % · **19 %** · 4 % warm orb glow | Reference for the specimen-plate prompt PP-IMG-HERO-001; second source for the shield redraw |
| PP-CON-005 | [polka-portals-asset-pack-trace.svg](2026-10-30/polka-portals-asset-pack-trace.svg) | Auto-traced vector of a third asset-pack layout (logos, icons, badges, HUD, frames, textures, portal elements) | 26 % · 41 % · 17 % · — | Layout reference; tracing degraded text and hairlines |

Measured by classifying every pixel of a 500 px thumbnail by hue and lightness (canon targets: paper 55–65 %, black 25–35 %, crimson 5–10 %). Duplicates in the upload (two identical PNGs, two identical SVGs) were kept once.

## What matches the canon
White-forward paper grounds with black architecture and blood-crimson points; the hooded Phantom with crimson eyes and a crimson singularity; dry-brush splatter, halftone, isometric cubes and graduated rings; the swatch labels `#151519 / #F6F5F2 / #A0112B`; wide-tracked geometric display type.

## What does not, and how the canon answers
| Issue | Where | Canon answer |
|---|---|---|
| Name **Polka Portals** | PP-CON-001, 002, 003, 005 | **Adopted** 2026-10-31 — ADR-0014 |
| **Shield-mask logo** (red/white faceted V-mask in a shield) | All five | **Adopted** 2026-10-31 — ADR-0015; redrawn in the canon inks by `80_TOOLS/generators/make-shield-logo.py` (the trace was not production quality) |
| Rarity in **gold, purple, green** | PP-CON-001 | Off-palette. The canon screen uses ink pips + words: 1–4 pips, legendary adds the crimson edge |
| Crimson at 16–19 % | All | Above 5–10 %; the canon screen keeps crimson to the selected item and the one primary action |
| `#686868` grey swatch | PP-CON-002, 003 | Not a token; nearest are `ink-secondary #55525A` and `border-control #86828A` |
| Garbled micro-text | All | AI artefact — never ship the images with text visible |
| Gaming vocabulary (artifacts, rarity, equip) in an IT command center | PP-CON-001 | Still open (the rename did not settle it): a game/fiction layer, or a skin over real tools? The canon screen keeps the concept's structure and labels its data SAMPLE |
