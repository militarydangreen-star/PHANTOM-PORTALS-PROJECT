# Owner directions

Dated statements of direction from the project owner, kept **verbatim**. They outrank older directions; where one disagrees with a token or rule in this canon, the disagreement is logged as a conflict in the [register](../CANON_REGISTER.md#open-conflicts) and decided by an ADR. The canon does not silently follow either side.

| Date | File | Says | Canon status |
|---|---|---|---|
| 2026-10-29 | [2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md](2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md) | White-forward Trash Polka × isometric is the visual authority for every Phantom Portals and PHANTOM USB surface; supersedes the 2026-10-17 Cyberpunk direction and the Forest, Ruby, Blood Badger and alpine looks; truthful status labels; reduced motion; never invent measurements | **CURRENT** (CR-008). Agrees with the canon; its eight-value palette maps onto the tokens (C-08 resolved 2026-10-30: canon tokens stay, [ADR-0011](../decisions/ADR-0011-palette-reconciliation-v31.md) accepted) |

## How the 2026-10-29 palette compares with the canon tokens
Measured (CIE ΔE76; under ~2 is invisible side by side, over ~10 is an obvious different colour):

| Role in the direction | Direction | Canon token | Canon | ΔE |
|---|---|---|---|---:|
| Matte black | `#121316` | `surface-inverse` | `#151519` | 1.5 |
| Main text | `#17181B` | `ink-primary` | `#151519` | 1.6 |
| Paper | `#F7F7F7` | `surface-canvas` | `#F6F5F2` | 1.7 |
| White | `#FFFFFF` | `surface-primary` | `#FFFFFF` | 0.0 |
| Border | `#DFE1E3` | `border-default` | `#D8D5D6` | 4.3 |
| Blood crimson | `#A00920` | `accent-crimson` | `#A0112B` | 6.3 |
| Secondary text | `#697078` | `ink-secondary` | `#55525A` | 12.2 |
| Primary red | `#CE102B` | — (nearest: `accent-hero`) | `#B8143E` | 18.8 |

Contrast of the direction's own pairings (WCAG 2.2): main text on paper 16.57 · secondary text on paper **4.68** (passes AA by 0.18; the canon's is 7.03) · blood crimson on white 8.22 · white on primary red 5.62 · primary red on paper 5.25 · primary red on matte black 3.30 (large text only) · blood crimson on matte black 2.26 (fails, same as the canon's).
