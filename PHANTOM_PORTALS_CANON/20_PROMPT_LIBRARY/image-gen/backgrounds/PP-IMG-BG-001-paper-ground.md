---
id: PP-IMG-BG-001
title: Paper ground with faint isometric grid
category: image-gen
subcategory: backgrounds
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: Seamless PNG 2048×2048, #F6F5F2 paper, grid ≤ 6 % contrast
aspect: 1:1
variables: [GRID_DENSITY]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/isometric-hud-rules.md
  - 10_DESIGN_SYSTEM/foundations/color.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [background, paper, isometric]
updated: 2026-10-29
---
# Paper ground with faint isometric grid

## Use
Behind hero bands, posters, slides and thumbnails — **never behind working panels** (canon: an iso grid at ≤ 0.35 opacity may sit under a hero canvas only). Usually the vector `iso-grid.svg` is better; use this when a print-like paper texture is wanted.

## Prompt
```text
A seamless, tileable texture of warm off-white printmaking paper (#F6F5F2) with a very subtle cotton fibre grain, perfectly even lighting, no shadows or vignette. Over it, an extremely faint isometric grid of hairlines at exactly thirty degrees, {{GRID_DENSITY}}, printed in pale grey ink at about five percent contrast so it reads only on close inspection. Clean, quiet, technical. No stains, no marks, no text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{GRID_DENSITY}}` | cells about 48 pixels across | cells about 96 pixels across · no grid, paper only |

## Negative
Global + image lists, plus `vignette, shadows, coffee stains, yellowed paper, folds, creases, visible tiling seams`.

## Tool notes
Midjourney `--tile --ar 1:1 --style raw`. Stable Diffusion: enable tiling. Level the paper to exactly `#F6F5F2` afterwards.

## Review
Overlay real body text on it at 100 %: contrast must stay ≥ 16:1 for `ink-primary`.

## After generating
`30_ASSETS/textures/paper/paper-ground-<density>.png` + sidecar, DRAFT.

## Changelog
- 1.0.0 — first version.
