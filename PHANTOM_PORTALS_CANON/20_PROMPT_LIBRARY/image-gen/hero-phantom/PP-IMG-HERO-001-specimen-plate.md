---
id: PP-IMG-HERO-001
title: The Phantom — Ink Protocol specimen plate
category: image-gen
subcategory: hero-phantom
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux]
output: PNG 2400×3000 (4:5), warm off-white paper, no text (labels added in layout)
aspect: 4:5
variables: [POSE, ORB_STATE, PLATE_NUMBER]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
  - 10_DESIGN_SYSTEM/visual-language/ink-protocol.md
  - 30_ASSETS/brand/phantom-hero/plate-01-the-operator.png
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [phantom, plate, key-visual]
updated: 2026-10-29
---
# The Phantom — Ink Protocol specimen plate

## Use
New key visuals in the series that Plate 01 — The Operator started: posters, about pages, print. The result is the figure and its instrument only; the field-manual typography (POLKA PORTALS, PLATE 0N, FIG. labels, colour specimens) is added in layout with the real fonts — see `60_TEMPLATES`.

## Prompt
```text
A museum-quality printmaking plate of a single hooded reaper figure, centred, waist-up, {{POSE}}. A pointed hood over a faceted, beaked mask with two narrow glowing crimson eye slits; layered angular pauldrons; segmented armoured gauntlets cupping a small glowing crimson singularity, {{ORB_STATE}}. The cloak is rendered like an engraving — dense parallel hatching and cross-hatching that turns the form, darkness built from accumulated strokes, never flat fill — rim-lit by a single hairline of light from the upper left; the hem tatters downward into ink drips.

Behind the figure, a precision instrument drawn with compass-perfect hairlines: a large graduated ring with fine tick marks every few degrees and longer ticks every thirty, a dry-brush ink ensō left open at the top, faint isometric construction lines at exactly thirty degrees, a small target-lock reticle on the orb.

One violent gesture: a single crimson dry-brush slash crossing the cloak diagonally beneath the mask, its bristles separating and running out of pigment mid-stroke, with a burst of ink splatter that falls off from its point of impact into fine mist. A halftone dot field on a 45-degree screen fading from solid to nothing at the lower left.

Strict three-ink economy: ink black #151519 with many near-black tones, warm paper #F6F5F2 left quiet and undecorated, blood crimson #A0112B / #B8143E spent only on the slash, the eyes and the orb. Generous margins on all sides, the figure occupying the middle sixty percent, nothing touching the edges. Fine-art screen print and etching texture, meticulous, labour-intensive, field manual crossed with a tattoo flash sheet. No text.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{POSE}}` | facing the viewer, head slightly lowered | three-quarter view to the left · head raised toward the viewer · one gauntlet extended forward |
| `{{ORB_STATE}}` | a tight spiral of crimson light | dormant, a dark sphere with a crimson rim · cracked open, light leaking through fissures |
| `{{PLATE_NUMBER}}` | 02 | Used only in the layout file name: `plate-{{PLATE_NUMBER}}-<title>.png` |

## Negative
Append the three lists in `negative_refs`. Specific to this prompt:
```text
second figure, full body, legs, background scenery, landscape, smoke clouds, gold trim, glossy armour, sci-fi helmet visor, open mouth, teeth, skull face
```

## Tool notes
- **Midjourney:** `--ar 4:5 --style raw --stylize 150 --quality 1`. Upscale, then clean the paper to `#F6F5F2`.
- **OpenAI image / Firefly:** portrait 4:5, ask for "white background" if the paper comes out grey; correct tone in post.
- **Stable Diffusion / Flux:** 1024×1280 base, then upscale ×2.34 to 2400×3000; CFG 5–6; put the short-form negatives in the negative field.
- Expect to repaint the eyes and orb crimson by hand if the model drifts toward red-orange.

## Review
[PP-AUD-IMAGE-001](../../design-audit/PP-AUD-IMAGE-001-generated-image-review.md) — anatomy, three inks, one gesture, margins.

## After generating
Save to `30_ASSETS/brand/phantom-hero/plate-{{PLATE_NUMBER}}-<title>.png`, write its sidecar (`source.prompt_id: PP-IMG-HERO-001`), status DRAFT until approved.

## Changelog
- 1.0.0 — written from the Ink Protocol philosophy and Plate 01.
