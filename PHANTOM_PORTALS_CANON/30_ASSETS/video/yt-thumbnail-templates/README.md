# YouTube thumbnail template (PP-TPL-001)

`youtube-thumbnail-1280x720.svg` — 1280 × 720, 16:9.

| Layer | Holds | Edit |
|---|---|---|
| TEXT | Episode label (JetBrains Mono 500, crimson), two-line title (Space Grotesk 700, 104 px, ink), crimson rule, subtitle (Inter 400, ink-secondary), wordmark | Replace the words; keep sizes |
| ART | Isometric grid, halftone fade, graduated ring with a crimson arc, the crimson slash, splatter | Keep, or replace with art from [PP-IMG-THUMB-001](../../../20_PROMPT_LIBRARY/image-gen/thumbnails/PP-IMG-THUMB-001-tutorial-thumbnail.md) / [002](../../../20_PROMPT_LIBRARY/image-gen/thumbnails/PP-IMG-THUMB-002-phantom-feature-thumbnail.md) |
| GUIDES (hidden) | 64 px margin, art zone line at x = 704, timestamp overlay box bottom-right | Show while editing |

## Rules
- Readable at 160 px wide (the search-results size): two title lines, ≤ 18 characters each, nothing smaller than the subtitle.
- Keep the bottom-right 180 × 70 px free — YouTube draws the duration there.
- One crimson cut, three inks, one Phantom at most (use `brand/phantom-hero/phantom-emblem-2048.png` rather than generating a new one).
- No arrows, shocked faces, emoji or UI screenshots.

## Export
PNG or JPG, 1280 × 720, ≤ 2 MB (YouTube's limit). Inkscape: *File → Export → Page*, 96 dpi. Save reused exports to `exports/` with a sidecar.

## Checks
Run [PP-AUD-BALANCE-001](../../../20_PROMPT_LIBRARY/design-audit/PP-AUD-BALANCE-001-trash-polka-balance.md) on the export. Verified 2026-10-29: renders in Chromium from disk with fonts and the linked wordmark loading, zero failed requests.
