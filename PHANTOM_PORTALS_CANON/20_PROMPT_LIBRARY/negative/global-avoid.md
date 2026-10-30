---
id: PP-NEG-GLOBAL-001
title: Global avoid-list (every prompt)
category: negative
status: CURRENT
version: 1.0.0
targets: [any-image, any-llm]
output: Text appended to every prompt
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/do-dont.md
tags: [negative, shared]
updated: 2026-10-29
---
# Global avoid-list

Append to **every** prompt — image or UI. It encodes the canon's hard "never" rules.

```text
Avoid: an all-dark interface or composition; neon colours; gold, purple, violet, cyan, teal, green, orange or blue accents; rainbow or gradient washes; glassmorphism; lens flares and overwhelming glow; generic cyberpunk, gaming HUD, esports or crypto-dashboard styling; cartoon or mascot styling; a second character, crowds, operator personas; the Phantom repeated; emoji; watermarks, signatures, stock-agency marks; fake telemetry, fake logos, gibberish text; cluttered decorative noise; distressed or decorative fonts for readable text.
```

Short form for tools with tight negative fields:
```text
all-dark, neon, gold, purple, cyan, green, orange, gradient wash, glassmorphism, lens flare, cyberpunk, gaming HUD, esports, cartoon, mascot, second character, emoji, watermark, signature, gibberish text, clutter
```
