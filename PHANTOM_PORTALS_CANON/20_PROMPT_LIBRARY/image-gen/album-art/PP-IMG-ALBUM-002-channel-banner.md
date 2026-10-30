---
id: PP-IMG-ALBUM-002
title: Music channel banner art
category: image-gen
subcategory: album-art
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 2560×1440, all important art inside the central 1546×423 safe area
aspect: 16:9
variables: [ARRANGEMENT]
canon_refs:
  - 30_ASSETS/audio-visual/README.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [channel, banner, youtube]
updated: 2026-10-29
---
# Music channel banner art

## Use
Art layer for `30_ASSETS/audio-visual/channel-banner-2560x1440.svg`. YouTube crops differently per device: the central 1546 × 423 px band is the only area visible everywhere — keep the wordmark and focal point there.

## Prompt
```text
A very wide, calm Trash Polka composition on warm off-white paper. {{ARRANGEMENT}}. A long horizontal band through the vertical centre: a black dry-brush swash running most of the width, a thin blood-crimson (#A0112B) slash crossing it at one point, a coordinate ruler of fine hairline ticks running parallel beneath, faint isometric grid lines fading toward the edges. Wide outer areas of quiet paper with a halftone fade at the far left and right edges. Three inks only, screen-print texture. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{ARRANGEMENT}}` | Everything important sits in a narrow central horizontal band | add a small hooded mask motif at the band's right third |

## Negative
Global + image lists, plus `text, logos, icons, faces at the edges`.

## Changelog
- 1.0.0 — first version.
