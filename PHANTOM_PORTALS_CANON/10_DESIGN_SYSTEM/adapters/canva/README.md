# Canva kit — Polka Portals

What lives in the owner's Canva account, where it came from in this canon, and how to rebuild it. Built 2026-10-30 through the Canva connector.

> **Canon 1.3.0 (2026-10-31): not yet synced.** The project is now **Polka Portals** and the logo is the shield ([ADR-0014](../../../00_START_HERE/decisions/ADR-0014-rename-polka-portals.md), [ADR-0015](../../../00_START_HERE/decisions/ADR-0015-shield-logo.md)). The Canva items below still carry the old name and the retired reaper marks. To sync (needs the owner's approval in Canva): rename the folder and board, replace the board with the 10-page `brand-board.pdf` (it now opens with a logo page), upload `30_ASSETS/brand/shield/polka-shield-2048.png`, `polka-app-icon-1024.png` and PNG renders of the lockups and wordmark, and delete the five retired uploads marked † below. The Brand Kit sheet ([brand-kit.md](brand-kit.md)) already lists the new files.

## In Canva
| Item | Canva ID | Link | Status |
|---|---|---|---|
| Folder **Phantom Portals — Design System** | `FAHZgFGFBXM` | https://www.canva.com/folder/FAHZgFGFBXM | Created |
| Design **Phantom Portals — Design System Board (canon 1.1.0)** — 9 pages, 1920 × 1080 | `DAHZgGGuS2c` | https://www.canva.com/d/7O2wUFTkXY6VPPD | **Saved** 2026-10-30 with the owner's approval; every page is the exact canon render; filed in the folder |
| Uploaded image assets (14) | see below | Canva → **Uploads** | Uploaded. Canva's API does not allow moving agent uploads into folders — drag them into the folder in Canva if wanted |

## Uploaded assets (transparent PNG renders of the canon vectors)
Canva does not reliably render the SVG filters and masks the Ink Protocol vectors use, so each was rasterised at 1024–2400 px with a transparent background by Chromium before upload. The SVG masters in `30_ASSETS` stay the source of truth.

| Canva media ID | File | Canon source |
|---|---|---|
| `MAHZgPG2-oc` | phantom-emblem-2048.png | `30_ASSETS/brand/phantom-hero/phantom-emblem-2048.png` (as is) |
| `MAHZgIRSNGo` | phantom-lockup.png † | retired — `90_ARCHIVE/brand-marks-phantom-2026-10-31/phantom-lockup.svg` |
| `MAHZgLJ9h5s` | phantom-monogram.png † | retired — `90_ARCHIVE/brand-marks-phantom-2026-10-31/phantom-monogram.svg` |
| `MAHZgAtjFaM` | phantom-app-icon.png † | retired — `90_ARCHIVE/brand-marks-phantom-2026-10-31/phantom-app-icon.svg` |
| `MAHZgMp8emw` | phantom-wordmark.png † | retired — `90_ARCHIVE/brand-marks-phantom-2026-10-31/phantom-wordmark.svg` |
| `MAHZgI-YhBA` | phantom-wordmark-inverse.png † | retired — `90_ARCHIVE/brand-marks-phantom-2026-10-31/phantom-wordmark-inverse.svg` |
| `MAHZgLyQmAQ` | brush-slash.png | `30_ASSETS/textures/brush-strokes/brush-slash.svg` |
| `MAHZgJ1gb74` | enso-ring.png | `30_ASSETS/textures/brush-strokes/enso-ring.svg` |
| `MAHZgC-k-40` | splatter-crimson.png | `30_ASSETS/textures/ink-splash/splatter-crimson.svg` |
| `MAHZgALSgfg` | halftone-fade.png | `30_ASSETS/textures/halftone/halftone-fade.svg` |
| `MAHZgEBg3_4` | torn-edge.png | `30_ASSETS/textures/torn-paper/torn-edge.svg` |
| `MAHZgJsMCtw` | hud-ring.png | `30_ASSETS/hud-geometry/callouts/hud-ring.svg` |
| `MAHZgKVp5wk` | target-reticle.png | `30_ASSETS/hud-geometry/callouts/target-reticle.svg` |
| `MAHZgM7lb7A` | iso-grid.png | `30_ASSETS/hud-geometry/isometric-grids/iso-grid.svg` |

Board page images: 1 `MAHZgJ_Gb1o`, 2 `MAHZgNWkgn4`, 3 `MAHZgD3TqeY`, 4 `MAHZgHORJGs`, 5 `MAHZgF6ggZg`, 6 `MAHZgCA-OOI`, 7 `MAHZgBLeAyQ`, 8 `MAHZgNzHj14`, 9 `MAHZgK-tIOg`.

## Why the board pages are images
Canva's API cannot set a font family on text it adds, and Canva could not import the canon PDF without public hosting (which the canon must not use). The board is a reference document, so fidelity wins: each page is the exact render of [`brand-board.html`](brand-board.html) as the page background — fonts, swatches and live components exactly as the canon builds them. For **editable** on-brand designs in Canva, set up the Brand Kit from [`brand-kit.md`](brand-kit.md) (Canva's API cannot create Brand Kits), then build from the uploaded assets.

## Rebuild
1. `node 80_TOOLS/generators/render-brand-board.cjs --png` — regenerates `brand-board.pdf` and the 9 page PNGs here.
2. Upload the PNGs (Canva → Uploads), replace each page background in the board design, and re-upload any changed asset PNG.
