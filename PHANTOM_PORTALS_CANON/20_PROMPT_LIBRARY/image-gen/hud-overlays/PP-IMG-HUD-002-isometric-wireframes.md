---
id: PP-IMG-HUD-002
title: Isometric wireframe set
category: image-gen
subcategory: hud-overlays
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 4096×4096, black hairlines on white
aspect: 1:1
variables: [OBJECTS]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/isometric-hud-rules.md
  - 30_ASSETS/hud-geometry/isometric-grids/iso-cube.svg
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [isometric, wireframe, module-art]
updated: 2026-10-29
---
# Isometric wireframe set

## Use
Module illustrations for empty states, docs and tool pages (a drive, a network node, a memory module) — the precision partner to a Trash Polka mark.

## Prompt
```text
A technical illustration sheet on pure white paper: {{OBJECTS}}, each drawn as a clean isometric wireframe in exactly thirty-degree isometric projection with thin uniform black hairlines; hidden edges dashed; one face of each object filled with fine parallel engraving hatching; small registration crosses at the corners of the sheet. Objects well separated on a faint isometric grid. Engineering drafting quality, flat, no shading gradients, no colour except black. No text or labels.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{OBJECTS}}` | a solid-state drive, a server rack unit, a USB flash drive, a network switch, a memory module and a CPU package | any set of hardware relevant to the module |

## Negative
Global + image lists, plus `perspective projection, rendered 3D, shiny metal, brand logos, labels`.

## After generating
Vectorise to `30_ASSETS/hud-geometry/isometric-grids/<object>.svg` + sidecar, DRAFT.

## Changelog
- 1.0.0 — first version.
