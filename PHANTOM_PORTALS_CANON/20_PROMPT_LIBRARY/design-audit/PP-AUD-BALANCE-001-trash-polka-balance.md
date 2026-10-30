---
id: PP-AUD-BALANCE-001
title: Trash Polka balance review (art direction)
category: design-audit
subcategory: art-direction
status: CURRENT
version: 1.0.0
targets: [claude, any-llm]
output: Measured colour weights, a vector count, a layering check, and specific cuts or additions — for screens, posters, thumbnails and covers
variables: [TARGET]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/composition-ratios.md
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
  - 10_DESIGN_SYSTEM/visual-language/isometric-hud-rules.md
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
tags: [audit, art-direction, composition]
updated: 2026-10-29
---
# Trash Polka balance review

## Use
Art direction check for anything visual: a hero, a poster, a thumbnail, a cover, a full screen. It measures instead of guessing where it can.

## Prompt
```text
Review the composition of {{TARGET}} against the Phantom Portals visual language (composition-ratios.md, trash-polka-rules.md, isometric-hud-rules.md, the-phantom.md).

Measure (with code where you can — e.g. Python + Pillow on a screenshot or the image):
1. Colour weight: classify every pixel to the nearest of paper #F6F5F2 / white, ink #151519 / black, crimson #A0112B–#B8143E, other. Report percentages. Target 55–65 % white · 25–35 % black · 5–10 % crimson; "other" should be near zero apart from anti-aliasing and photo-free greys.
2. Vector count: count distinct art marks (slash, splatter, ensō, halftone field, ring, grid, reticle, torn edge). Target ≤ 3 per composition, exactly one crimson.
3. Phantom: count figures (≤ 1); check anatomy against the-phantom.md (hood, faceted beaked mask, two crimson eye slits, engraved cloak, segmented gauntlets, orb); check clear space ≥ ¼ emblem width.
4. Hottest point: identify the single brightest/most saturated focal point; flag any competitor (glow vs eyes).
5. Layering: paper → precision → gesture → figure → glass → text. Flag art behind text or controls, or text not on a verified surface.
6. Squint test: describe what reads first, second, third at 10 % size. Expected: black frame and the crimson point, then the white working area.
7. Gesture vs precision: is the 50/50 balance held across the whole view (controls 100 % precise, hero may be 80 % gesture)?

Output: the measurements, a verdict (ON CANON / DRIFTING / OFF CANON), and at most five concrete edits ordered by impact (what to cut, move, recolour or add).
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{TARGET}}` | a PNG screenshot or exported artwork | an HTML page (screenshot it at 1440 × 900 first) |

## Changelog
- 1.0.0 — first version.
