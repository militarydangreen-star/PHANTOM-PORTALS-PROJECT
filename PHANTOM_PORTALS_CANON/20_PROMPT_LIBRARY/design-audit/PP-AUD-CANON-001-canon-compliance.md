---
id: PP-AUD-CANON-001
title: Canon compliance review (screens, components, pages)
category: design-audit
subcategory: canon
status: CURRENT
version: 1.0.0
targets: [claude, codex, any-llm]
output: A findings table (severity, rule, evidence, fix) and a pass/fail verdict; no edits unless asked
variables: [TARGET]
canon_refs:
  - 00_START_HERE/CANON_REGISTER.md
  - 10_DESIGN_SYSTEM/README.md
  - 10_DESIGN_SYSTEM/visual-language/composition-ratios.md
  - 10_DESIGN_SYSTEM/visual-language/do-dont.md
  - 10_DESIGN_SYSTEM/accessibility/contrast-matrix.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [audit, compliance, review]
updated: 2026-10-29
---
# Canon compliance review

## Use
Before a screen, component or page is promoted from DRAFT to CURRENT, and after any coding-agent build. It reviews; it does not fix unless asked.

## Prompt
```text
Audit {{TARGET}} against the Phantom Portals canon. Read the files, then open the page in a headless browser where possible — judge the rendered result, not only the source.

Sources of truth, in order: 10_DESIGN_SYSTEM/tokens/tokens.json → 10_DESIGN_SYSTEM docs → 00_START_HERE/CANON_REGISTER.md (CURRENT/RETIRED) → 50_AGENTS/project-instructions.md.

Check each item and record PASS / FAIL / N/A with evidence (file:line, selector, or screenshot region):

Tokens and type
1. Every colour, size, radius, shadow and font comes from a token; no raw hex except in token files.
2. Fonts are Space Grotesk (display/headings), Inter (body/UI), JetBrains Mono (data/code) only.
3. No retired value from retired-canon-negative.md (gold, purple, obsidian, operator colours, retired fonts).
Composition
4. White-forward: paper work area, black frame; colour weight ≈ 55–65 % white · 25–35 % black · 5–10 % crimson (estimate from a screenshot).
5. One crimson primary action per context; one crimson-edge per view; one hottest glow point.
6. ≤ 3 art vectors per composition, one crimson; ≤ 1 Phantom per surface; no art behind controls, tables, terminals, forms or body text.
Components
7. Library components are used where one exists; no hand-built duplicates.
8. Every state exists and is distinguishable (hover, focus-visible, active, selected, disabled, loading, empty, error).
Accessibility (quick pass — run PP-AUD-ACCESS-001 for the full one)
9. Text pairings appear in the APPROVED list of accessibility/contrast-matrix.md; no FORBIDDEN pairing.
10. Visible crimson focus ring on every interactive element; icon-only buttons named; status not colour-only; reduced motion respected.
Honesty and offline
11. No invented telemetry, logs, sessions or tool output; sample data is labelled SAMPLE.
12. No network requests (fonts, scripts, icons, images all local); works from file://.

Output:
- Findings table: # · severity (blocker / major / minor) · rule # · evidence · suggested fix.
- Verdict: PASS (no blocker, no major), PASS WITH NOTES, or FAIL.
- What you could not check and why.
Do not edit files unless I ask.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{TARGET}}` | a screen file path | a component folder · a whole app directory · a screenshot (rules 4–6 and 9 only) |

## Negative
Use [ui-negative.md](../negative/ui-negative.md) and [retired-canon-negative.md](../negative/retired-canon-negative.md) as the lists of things to look for.

## Changelog
- 1.0.0 — first version.
