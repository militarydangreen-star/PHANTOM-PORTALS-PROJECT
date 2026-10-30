---
id: PP-IMG-BG-002
title: Section divider band (torn edge + ruler)
category: image-gen
subcategory: backgrounds
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 3200×400 (8:1) on transparent or #F6F5F2
aspect: 8:1
variables: [CRIMSON_AMOUNT]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
  - 30_ASSETS/textures/torn-paper/torn-edge.svg
  - 30_ASSETS/hud-geometry/callouts/coordinate-ruler.svg
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [divider, torn-paper, transition]
updated: 2026-10-29
---
# Section divider band

## Use
Long-scroll pages, docs, decks and videos: a transition between sections. Pairs a chaos mark (torn paper) with a precision mark (a ruler), the canon's 50/50 in one strip.

## Prompt
```text
A long horizontal strip on warm off-white paper: a torn paper edge running the full width, black ink paper torn over {{CRIMSON_AMOUNT}} of blood crimson (#A0112B), the tear ragged with fibres and a few dry-brush flecks. Running exactly parallel just above it, a precise technical ruler drawn in thin black hairlines with evenly spaced tick marks, longer ticks every tenth mark, and tiny isometric registration crosses at each end. Flat, printmaking texture, three inks only (black #151519, paper #F6F5F2, crimson). Nothing else. No text or numbers.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{CRIMSON_AMOUNT}}` | a thin band | no crimson at all · a wide band |

## Negative
Global + image lists, plus `numbers on the ruler, labels, 3D paper curl, drop shadow`.

## Tool notes
`--ar 8:1` is beyond some tools: generate 4:1 twice and join on the paper, or extend with generative fill.

## After generating
`30_ASSETS/textures/torn-paper/divider-band-<n>.png` + sidecar, DRAFT. Prefer the vector `torn-edge.svg` in the product UI.

## Changelog
- 1.0.0 — first version.
