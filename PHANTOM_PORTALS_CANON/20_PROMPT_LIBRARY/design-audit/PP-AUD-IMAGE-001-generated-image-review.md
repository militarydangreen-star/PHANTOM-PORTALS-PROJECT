---
id: PP-AUD-IMAGE-001
title: Generated image review (gate into 30_ASSETS)
category: design-audit
subcategory: image-review
status: CURRENT
version: 1.0.0
targets: [claude, any-llm]
output: ACCEPT / REWORK / REJECT with reasons, the checks that failed, and the sidecar fields to record
variables: [IMAGE, PROMPT_ID]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
  - 00_START_HERE/decisions/ADR-0007-third-party-references.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [audit, image, gate]
updated: 2026-10-29
---
# Generated image review

## Use
Every AI-generated image passes this before it is saved into `30_ASSETS` (where it then starts as DRAFT). Run it with a vision-capable model and the image attached.

## Prompt
```text
Review the attached image, generated with prompt {{PROMPT_ID}} from the Phantom Portals prompt library, before it enters the asset library. Be strict; a rejected image costs one more generation, an accepted bad one costs the brand.

Hard gates — any failure is REJECT:
1. Palette: only ink black, warm paper and blood crimson (plus at most a tiny electric #EE5367 point of light). No gold, purple, teal, neon, rainbow, or obsidian-dark full-bleed backgrounds unless the prompt was an inverse/dark variant.
2. No legible text, letters, numbers, watermarks, signatures or logos (unless the prompt asked for text).
3. No recognisable likeness of a real person, brand, character or existing artwork; nothing that looks copied from a specific tattoo artist or stock image (ADR-0007).
4. One Phantom at most; no extra figures, faces in the background or duplicated limbs.
5. No gore, blood pools, weapons pointed at the viewer, or hate symbols.

Quality checks — failures mean REWORK (regenerate or fix in an editor):
6. Phantom anatomy matches the-phantom.md: pointed hood, faceted beaked mask, two narrow crimson eye slits, engraved cross-hatched cloak, segmented gauntlets, crimson singularity orb.
7. Mark-making: dry-brush bristle separation, splatter falloff, halftone dots, hairline precision — not airbrushed, not glossy 3D, not digital-painting soft.
8. Composition: margins and clear space as the prompt asked; one crimson cut; ≤ 3 art marks; the negative space the layout needs (e.g. left 55 % clear for a thumbnail title) is actually clear.
9. Technical: requested size and aspect; no visible tiling seams, JPEG artefacts, or stray specks in clear areas; clean edges where it will be cut out or vectorised.

Output:
- Verdict: ACCEPT / REWORK / REJECT.
- Each check with PASS/FAIL and one line of evidence (where in the image).
- If ACCEPT: the sidecar fields — title, kind, status DRAFT, source.prompt_id {{PROMPT_ID}}, source.tool, license (record the tool's terms), and suggested tags.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{IMAGE}}` | the attached image | a path in a staging folder |
| `{{PROMPT_ID}}` | e.g. PP-IMG-HERO-001 | any prompt id |

## After review
Accepted: `python3 80_TOOLS/index-assets.py --new <file> --id <PP-…> --title "…" --kind <kind>` (status defaults to DRAFT), then fill `source.prompt_id` and `source.tool` in the sidecar.

## Changelog
- 1.0.0 — first version.
