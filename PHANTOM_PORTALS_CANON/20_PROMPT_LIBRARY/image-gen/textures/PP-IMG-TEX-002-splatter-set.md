---
id: PP-IMG-TEX-002
title: Ink splatter source set
category: image-gen
subcategory: textures
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 4096×4096 on pure white, splatters separated
aspect: 1:1
variables: [INK]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [texture, splatter, source]
updated: 2026-10-29
---
# Ink splatter source set

## Use
Raw splatters for vectorising. Remember the rule: splatter is strongest at the edges of a composition and never behind controls or text.

## Prompt
```text
Four separate ink splatters in {{INK}} on smooth pure white paper, each from a single impact: a dense core with droplets falling off in size and density with distance, elongated tadpole-shaped droplets pointing away from the centre, and a fine mist of tiny specks at the outer edge — physically plausible, asymmetric, not decorative. Splatters well separated, none touching the edges. High-resolution scan, flat lighting, no shadows. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{INK}}` | pure black ink | blood crimson ink (#A0112B) |

## Negative
Global + image lists, plus `paint drips running down, blood, gore, symmetrical radial burst, glossy liquid, 3D droplets`.

## After generating
Vectorise to `30_ASSETS/textures/ink-splash/<name>.svg` + sidecar, DRAFT.

## Changelog
- 1.0.0 — first version.
