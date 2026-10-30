---
id: PP-IMG-HUD-001
title: Graduated ring and target lock overlay
category: image-gen
subcategory: hud-overlays
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 4096×4096, black hairlines on white (for vectorising) or on #151519 inverted
aspect: 1:1
variables: [ACCENT]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/isometric-hud-rules.md
  - 30_ASSETS/hud-geometry/callouts/hud-ring.svg
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [hud, ring, precision]
updated: 2026-10-29
---
# Graduated ring and target lock

## Use
The precision half of a composition: behind the Phantom, around a feature badge, in thumbnails. Generation is mostly useful for reference — precise rings are better drawn as vectors (the canon `hud-ring.svg`). Use this to explore new instrument designs, then redraw.

## Prompt
```text
A precise technical instrument drawing on pure white paper, centred: three concentric circles drawn with compass-perfect thin black hairlines; the outer ring graduated with a fine tick every three degrees, longer ticks every thirty degrees; a dotted middle ring; a small target-lock reticle with four short corner brackets at the centre; faint isometric construction lines at exactly thirty degrees crossing behind; {{ACCENT}}. Engineering drafting quality, perfectly symmetrical, clean, no shading. No numbers, no letters.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{ACCENT}}` | one short arc of the outer ring thickened in blood crimson (#A0112B) | no crimson · a crimson dot at the reticle centre |

## Negative
Global + image lists, plus `glowing rings, neon, sci-fi interface, holographic, 3D perspective, numbers, labels`.

## After generating
Redraw as SVG in `30_ASSETS/hud-geometry/callouts/` + sidecar, DRAFT.

## Changelog
- 1.0.0 — first version.
