---
id: PP-IMG-THUMB-001
title: YouTube thumbnail — tutorial / how-to
category: image-gen
subcategory: thumbnails
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: Background art 1280×720 (16:9), left 55 % clear for the title set in the template
aspect: 16:9
variables: [TOPIC_OBJECT]
canon_refs:
  - 30_ASSETS/video/yt-thumbnail-templates/README.md
  - 10_DESIGN_SYSTEM/visual-language/composition-ratios.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [youtube, thumbnail]
updated: 2026-10-29
---
# YouTube thumbnail — tutorial

## Use
Art layer for the thumbnail template (`30_ASSETS/video/yt-thumbnail-templates/youtube-thumbnail-1280x720.svg`). The title, episode number and logo are set in the template with real fonts — never generated. Thumbnails must read at 160 px wide: one object, one crimson cut, big shapes.

## Prompt
```text
A bold editorial print composition on warm off-white paper, 16:9. On the right 45 percent: {{TOPIC_OBJECT}}, drawn as a precise isometric black-ink line illustration with engraved hatching on one face, large and simple enough to read at small size. A single thick blood-crimson (#A0112B) dry-brush slash cuts diagonally across the object from upper right to lower left, its bristles separating, with ink splatter falling off toward the right edge. A halftone dot field fades in from the bottom right corner. The left 55 percent is clean empty paper. Three inks only, high contrast, screen-print texture. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{TOPIC_OBJECT}}` | a solid-state drive | a USB flash drive · a network router · a terminal window frame · a memory module · a shield |

## Negative
Global + image + retired lists, plus `faces, shocked expressions, arrows, emoji, text, UI screenshots`.

## After generating
Place in the template, export PNG ≤ 2 MB, save under `30_ASSETS/video/yt-thumbnail-templates/exports/` with a sidecar if it is reused.

## Changelog
- 1.0.0 — first version.
