---
id: PP-IMG-THUMB-002
title: YouTube thumbnail — Phantom feature / announcement
category: image-gen
subcategory: thumbnails
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: Background art 1280×720 (16:9), figure right, left clear for the title
aspect: 16:9
variables: [MOOD]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
  - 30_ASSETS/video/yt-thumbnail-templates/README.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [youtube, thumbnail, phantom]
updated: 2026-10-29
---
# YouTube thumbnail — Phantom feature

## Use
Releases, trailers, channel announcements. Prefer placing the existing emblem PNG (`30_ASSETS/brand/phantom-hero/phantom-emblem-2048.png`) in the template; generate only for a new pose.

## Prompt
```text
A tight crop of a single hooded reaper figure on the right of a 16:9 frame, head and shoulders filling the right 40 percent, {{MOOD}}: pointed hood, faceted beaked mask with two narrow glowing crimson eye slits, engraved cross-hatched cloak rim-lit from the upper left. A large blood-crimson (#A0112B) dry-brush slash cuts diagonally behind the figure; a graduated ring in thin black hairlines arcs behind the hood. The left 60 percent is clean warm off-white paper. Bold, high-contrast, three inks only, screen-print texture, readable at thumbnail size. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{MOOD}}` | head slightly lowered, eyes burning | looking straight at the viewer · turned three-quarters toward the empty space |

## Negative
Global + image + retired lists, plus `full body, small figure, busy background, text`.

## Changelog
- 1.0.0 — first version.
