---
id: PP-IMG-XXXX-000
title: Short name of what this produces
category: image-gen
subcategory: hero-phantom
status: DRAFT
version: 0.1.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion]
output: PNG 2048×2560, flat off-white background, no text
aspect: 4:5
variables: [SUBJECT_DETAIL, CRIMSON_GESTURE]
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/ink-protocol.md
  - 10_DESIGN_SYSTEM/visual-language/the-phantom.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/global-avoid.md
  - 20_PROMPT_LIBRARY/negative/image-gen-negative.md
tags: [phantom]
updated: YYYY-MM-DD
---
# <Title>

## Use
When to reach for this prompt and what the result is for (which screen, asset folder, size).

## Prompt
```text
The prompt, written as plain prose. Put {{VARIABLES}} in double braces.
Describe the subject, composition, the three inks, mark-making, lighting, and margins.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{SUBJECT_DETAIL}}` | … | … |

## Negative
Append the shared lists in `negative_refs`, plus anything specific:
```text
…
```

## Tool notes
Per-tool parameters (Midjourney `--ar`, `--style raw`; Stable Diffusion steps/CFG; Firefly style settings). Keep the prose identical across tools.

## Review
Run [PP-AUD-IMAGE-001](../design-audit/PP-AUD-IMAGE-001-generated-image-review.md) on every result before it enters `30_ASSETS`.

## After generating
Save to the asset folder named above, then `python3 80_TOOLS/index-assets.py --new <file> --id <PP-…> --title "…"` and set `source.prompt_id` to this prompt's id. New assets start as DRAFT until the owner approves them.

## Changelog
- 0.1.0 — first draft.
