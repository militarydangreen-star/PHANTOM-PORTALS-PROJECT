---
id: PP-IMG-TEX-003
title: Halftone fields and torn-paper edges
category: image-gen
subcategory: textures
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 4096×4096 on pure white
aspect: 1:1
variables: [FOCUS]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [texture, halftone, torn-paper, source]
updated: 2026-10-29
---
# Halftone fields and torn-paper edges

## Use
Source for collage pieces. Note: true halftone is better made procedurally (a rotated 45° dot screen in a vector tool) than generated — use this for the *printed, imperfect* look of a real screen.

## Prompt
```text
A printmaking specimen sheet on pure white: {{FOCUS}}. Halftone fields are printed on a 45-degree dot screen, dots shrinking smoothly from solid black to nothing across the field, slightly imperfect like a real screen print. Torn paper pieces are black paper torn by hand with ragged fibrous edges, lying flat with no shadows. Everything separated by white space, flat lighting. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{FOCUS}}` | three circular halftone discs and two long halftone fade bands, plus three torn black paper strips | only halftone · only torn paper, including one strip torn over blood-crimson (#A0112B) paper |

## Negative
Global + image lists, plus `perfect vector dots, colour dots, comic book Ben-Day dots in colour, drop shadows, paper curl`.

## After generating
`30_ASSETS/textures/halftone/` or `torn-paper/` + sidecar, DRAFT.

## Changelog
- 1.0.0 — first version.
