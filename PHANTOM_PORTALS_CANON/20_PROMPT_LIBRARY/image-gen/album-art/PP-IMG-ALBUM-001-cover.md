---
id: PP-IMG-ALBUM-001
title: Album / single cover (square)
category: image-gen
subcategory: album-art
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 3000×3000 (1:1), title set in the album template, not generated
aspect: 1:1
variables: [CENTREPIECE, GROUND]
canon_refs:
  - 30_ASSETS/audio-visual/README.md
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [album, music, cover]
updated: 2026-10-29
---
# Album / single cover

## Use
Covers for the project's music channel and soundtrack releases. The square must read at 64 px in a streaming list: one centrepiece, one crimson cut, strong silhouette. Set titles with the template (`30_ASSETS/audio-visual/album-cover-3000.svg`).

## Prompt
```text
A square fine-art Trash Polka print on {{GROUND}}. Centred: {{CENTREPIECE}}. Behind it a large dry-brush ensō in black ink left open at the top, and a thin graduated ring in hairlines. One thick blood-crimson (#A0112B / #B8143E) dry-brush slash cuts diagonally across the whole square from upper right to lower left, bristles separating, splatter falling off into mist toward the lower left corner; a halftone dot field fades in from the lower right. Strong silhouette, generous margins, three inks only, screen-print and etching texture. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{CENTREPIECE}}` | the hooded reaper figure's faceted beaked mask with two crimson eye slits, close-up, engraved | the crimson singularity orb held in segmented gauntlets · an isometric cube engraved with hatching |
| `{{GROUND}}` | warm off-white paper (#F6F5F2) | matte black (#151519) with paper-white hairlines (dark edition) |

## Negative
Global + image + retired lists, plus `vinyl record, headphones, music notes, speakers, text`.

## Changelog
- 1.0.0 — first version.
