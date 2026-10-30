# Screens (mockups)

Six artboards from the Claude Design canvas **Phantom Portals** — live at https://claude.ai/artifact/6jk64Yyaaq6JU2Uy41jXv6 — exported on 2026-10-29 and filed by module.

| Module | File | Canvas board | Size |
|---|---|---|---|
| shell | [command-center-desktop.dc.html](shell/command-center-desktop.dc.html) | Command Center · Home | 1440 × 1320 |
| shell | [command-center-phone.dc.html](shell/command-center-phone.dc.html) | Command Center · Phone | 390 × 844 |
| diagnostics | [full-scan.dc.html](diagnostics/full-scan.dc.html) | Diagnostics · Full Scan | 1440 × 1440 |
| boot | [boot-screen.dc.html](boot/boot-screen.dc.html) | Boot Screen | 1440 × 900 |
| catalog | [artifact-inventory.html](catalog/artifact-inventory.html) | — (built on the canon library, not the canvas) | responsive |
| marketing | [poster-light.dc.html](marketing/poster-light.dc.html) | Trash Polka Poster | 1080 × 1350 |
| marketing | [poster-dark.dc.html](marketing/poster-dark.dc.html) | Trash Polka Poster · Dark | 1080 × 1350 |

[`_canvas/canvas.json`](_canvas/canvas.json) is the canvas's own index (board positions, titles, the design-system version it copied). [`_assets/`](_assets/) holds four recoloured v1 vectors the boards use (PP-MOCK-001…004).

## Why these are UNCLEAR
- They were built against design system version `1793295428-b8ae` (2026-10-29 17:37), **before** the Ink Protocol artwork replaced the v1 flat vectors (17:52). The art layers use v1 vectors; the canon now uses the Ink Protocol set in `30_ASSETS`.
- Telemetry, sessions and log lines in them are **sample data** for layout.
- The phone board prototypes a BottomDock and tab switcher the library does not ship yet ([BACKLOG](../../10_DESIGN_SYSTEM/components/BACKLOG.md)).

Layout, hierarchy and composition in them are on-canon and are the reference for building the real screens with [PP-UI-BUILD-001](../../20_PROMPT_LIBRARY/ui-build/PP-UI-BUILD-001-module-screen.md).

## Opening them
The `.dc.html` files are canvas documents: they need the canvas runtime (`support.js`) and the design system copied under `ds/phantomportals/`, which only the Claude Design canvas provides. Opened from disk they show unstyled markup. To view or edit them, open the live canvas link above; to change the canon copy, re-export from the canvas and replace the files here (then log it in the CHANGELOG).

## Promoting a mockup
Rebuild the screen with the component library and the Ink Protocol art, take a dated screenshot into `screenshots/`, run [PP-AUD-CANON-001](../../20_PROMPT_LIBRARY/design-audit/PP-AUD-CANON-001-canon-compliance.md), and update the register entry.
