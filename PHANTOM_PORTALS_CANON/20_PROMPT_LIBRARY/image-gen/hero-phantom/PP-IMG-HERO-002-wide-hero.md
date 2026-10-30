---
id: PP-IMG-HERO-002
title: The Phantom — wide hero with left negative space
category: image-gen
subcategory: hero-phantom
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 2560×1080 (21:9) or 1920×1080 (16:9), warm off-white paper, left 50 % empty for live copy
aspect: 21:9
variables: [SIDE, ORB_STATE]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
  - 10_DESIGN_SYSTEM/components/signature.md
  - 10_DESIGN_SYSTEM/foundations/breakpoints.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [phantom, hero, web]
updated: 2026-10-29
---
# The Phantom — wide hero with left negative space

## Use
Landing pages, the Command Center hero band at very wide widths, installer and release banners. The live headline, copy and crimson primary action sit in the empty half on an `overlay-glass` plate — never baked into the image.

## Prompt
```text
An ultra-wide editorial print composition on warm off-white paper. The single hooded reaper figure sits in the {{SIDE}} 45 percent of the frame, waist-up, three-quarter view toward the centre: pointed hood, faceted beaked mask with two narrow glowing crimson eye slits, layered angular pauldrons, segmented gauntlets cupping a small crimson singularity ({{ORB_STATE}}). Engraved cross-hatched cloak, rim-lit by a hairline of light from the upper left, the hem tattering into ink drips.

Around the figure, a precision instrument in hairlines: part of a large graduated ring arcing behind the hood with fine tick marks, faint isometric construction lines at exactly thirty degrees, a small target reticle on the orb. One crimson dry-brush slash cuts diagonally across the cloak, bristles separating, ink splatter falling off into mist toward the outer edge. A halftone dot field fades from the outer edge toward the centre.

The other half of the frame is quiet, empty warm paper with only the faintest isometric grid at very low contrast — clean space reserved for text. Three inks only: near-black #151519 in many tones, paper #F6F5F2, blood crimson #A0112B / #B8143E used only for the slash, eyes and orb. Fine-art screen print and etching texture, premium, restrained. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{SIDE}}` | right | left (for right-aligned copy) |
| `{{ORB_STATE}}` | a tight spiral of crimson light | dormant dark sphere with a crimson rim · cracked open |

## Negative
Global + image + retired lists, plus:
```text
figure centred, figure filling the frame, busy left side, text, UI elements, buttons, browser chrome, landscape, horizon, sky
```

## Tool notes
- **Midjourney:** `--ar 21:9 --style raw --stylize 120`. For 16:9 use `--ar 16:9`.
- Check the empty half: if texture creeps in, paint it back to flat `#F6F5F2` — text must sit on a verified surface.
- Export a 512 px-high crop of the figure for phones (canon: below 768 px the hero shows the emblem alone).

## Review
[PP-AUD-IMAGE-001](../../design-audit/PP-AUD-IMAGE-001-generated-image-review.md); then put real copy on it and check contrast against the [contrast matrix](../../../10_DESIGN_SYSTEM/accessibility/contrast-matrix.md).

## After generating
Save to `30_ASSETS/brand/phantom-hero/hero-wide-<side>.png` with a sidecar (`source.prompt_id: PP-IMG-HERO-002`), status DRAFT.

## Changelog
- 1.0.0 — first version.
