---
id: PP-IMG-TEX-001
title: Dry-brush stroke source sheet
category: image-gen
subcategory: textures
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 4096×4096 on pure white, strokes separated for cutting out and vectorising
aspect: 1:1
variables: [INK, STROKE_SET]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
  - 10_DESIGN_SYSTEM/visual-language/ink-protocol.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [texture, brush, source]
updated: 2026-10-29
---
# Dry-brush stroke source sheet

## Use
Raw material for new brush marks. Cut out, vectorise (e.g. Illustrator Image Trace, Inkscape Trace Bitmap, `potrace`) and recolour to the canon inks, then save as SVG beside the existing Ink Protocol vectors. The current set already covers slash, stroke, X and ensō — generate only when a new gesture is needed.

## Prompt
```text
A specimen sheet of {{STROKE_SET}}, painted in {{INK}} with a large, nearly dry flat brush on smooth pure white paper. Each stroke is fast and confident, starting loaded and running out of pigment mid-stroke so the bristle marks separate into dozens of individual hairs, with white paper streaks opening as the brush dries. Strokes are well separated from each other with generous white space between them, none touching the edges. High-resolution scan, flat even lighting, no shadows, no paper texture beyond the dry-brush breaks. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{STROKE_SET}}` | six single diagonal slashes of different lengths, two horizontal swashes and one open circular ensō | a crossed X pair · short dabs · long vertical drags with drips |
| `{{INK}}` | pure black ink | blood crimson ink (#A0112B) |

## Negative
Global + image lists, plus `coloured paper, texture background, splatter everywhere, outlines, calligraphy letters, kanji`.

## After generating
Vectorise, recolour to `#151519` / `#A0112B` / `#B8143E`, save to `30_ASSETS/textures/brush-strokes/<name>.svg` + sidecar (`source.prompt_id: PP-IMG-TEX-001`), DRAFT.

## Changelog
- 1.0.0 — first version.
