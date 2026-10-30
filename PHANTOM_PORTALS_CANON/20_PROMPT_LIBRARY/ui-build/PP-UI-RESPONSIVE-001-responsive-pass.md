---
id: PP-UI-RESPONSIVE-001
title: Responsive and small-screen pass
category: ui-build
subcategory: responsive
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: Breakpoint CSS for a screen (or a library patch), screenshots at every validation width, and an overflow report
variables: [TARGET]
canon_refs:
  - 10_DESIGN_SYSTEM/foundations/breakpoints.md
  - 10_DESIGN_SYSTEM/components/BACKLOG.md
  - 10_DESIGN_SYSTEM/components/browser-shell.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
tags: [responsive, mobile, layout]
updated: 2026-10-29
---
# Responsive pass

## Use
Making a screen (or the library itself) follow the six canon breakpoints. The shipped bundle has no breakpoint CSS yet — see "Known gaps" in BACKLOG.md for the measured problems and the proposed patch.

## Prompt
```text
Make {{TARGET}} follow the Phantom Portals breakpoints.

Read first: 10_DESIGN_SYSTEM/foundations/breakpoints.md (six ranges, what the shell and Command Center do in each), components/BACKLOG.md "Known gaps in the shipped library" (PhantomHero art, TabStrip overflow, UtilityRail on phones, StatusPanel word values) and the proposed CSS patch there.

Do:
- Mobile-first min-width media queries at 480 / 768 / 1024 / 1280 / 1600; container queries for panels whose width depends on placement.
- Below 768: tab strip → labelled tab switcher (or horizontal scroll as an interim), rail → 5-item bottom dock (60 px + env(safe-area-inset-bottom)), hero art → emblem only, hero 180–300 px tall, display type steps down to h1.
- The command field and the primary action stay above the fold at every width. Simplify the Phantom art before shrinking a control.
- Tables scroll inside their panel; the page never scrolls horizontally.
- Touch targets ≥ 44 × 44 px on touch layouts (WCAG 2.5.8 minimum is 24 px; we aim higher).

Verify with a headless browser at 320, 360, 390, 768, 1024, 1280, 1440 and 1920 px, plus 390 px at 200 % text size: record document.scrollWidth vs clientWidth (must be equal), list any element wider than the viewport, and save a screenshot per width to 40_MOCKUPS/screenshots/<YYYY-MM-DD>_<target>_<width>.png. Report the table of results.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{TARGET}}` | the Command Center screen | a single module screen · the component library (as a consumer-side patch CSS file) |

## Negative
Append [ui-negative.md](../negative/ui-negative.md).

## Review
[PP-AUD-ACCESS-001](../design-audit/PP-AUD-ACCESS-001-accessibility.md) (reflow and zoom checks).

## Changelog
- 1.0.0 — first version.
