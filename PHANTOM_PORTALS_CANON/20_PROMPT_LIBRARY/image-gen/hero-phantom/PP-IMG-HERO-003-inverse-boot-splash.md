---
id: PP-IMG-HERO-003
title: The Phantom — inverse boot / splash
category: image-gen
subcategory: hero-phantom
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 1920×1080 (16:9), matte black ground #151519, centred figure, lower third empty
aspect: 16:9
variables: [LIGHT]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
  - 30_ASSETS/brand/phantom-hero/phantom-emblem-inverse-2048.png
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [phantom, inverse, boot, splash]
updated: 2026-10-29
---
# The Phantom — inverse boot / splash

## Use
Boot and splash screens, WinPE start-up, dark hero variants. Dark is allowed here (boot screens and dark heroes are the canon's exceptions); the loading bar and status line sit in the empty lower third, set live.

## Prompt
```text
A single hooded reaper figure centred on a deep matte black ground (#151519), waist-up, facing the viewer: pointed hood, faceted beaked mask with two narrow glowing crimson eye slits, layered angular pauldrons, segmented gauntlets cupping a small glowing crimson singularity. The silhouette is carried entirely by rim light — {{LIGHT}} — tracing the hood, the mask facets and the edges of the engraved, cross-hatched cloak; the hem tatters into ink drips that fade into the black.

Behind the figure, a large graduated ring in thin warm-white hairlines with fine tick marks, a dry-brush ensō in paper white left open at the top, faint isometric construction lines. One crimson dry-brush slash crosses the cloak diagonally beneath the mask, bristles separating, a fine crimson mist falling off it. The lower third of the frame is empty black.

Three inks only: black, warm paper white #F6F5F2 for the rim light and hairlines, blood crimson #A0112B / #B8143E for the slash, eyes and orb. Etching and screen-print texture, quiet, ceremonial, premium. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{LIGHT}}` | a single hairline of warm white light from the upper left | a second faint crimson rim from the orb below |

## Negative
Global + image + retired lists, plus:
```text
grey fog, smoke, glow bloom, neon edges, blue rim light, purple, gold, background scenery, text
```

## Tool notes
`--ar 16:9 --style raw` (Midjourney). Fix the ground to exactly `#151519` in post so it matches `surface-inverse`.

## Review
[PP-AUD-IMAGE-001](../../design-audit/PP-AUD-IMAGE-001-generated-image-review.md). Check the boot status line contrast: `ink-on-inverse-secondary` on `surface-inverse` is 8.61:1.

## After generating
`30_ASSETS/brand/phantom-hero/boot-splash-1920.png` + sidecar (`source.prompt_id: PP-IMG-HERO-003`), status DRAFT.

## Changelog
- 1.0.0 — first version.
