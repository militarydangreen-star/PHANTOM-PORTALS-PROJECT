---
id: PP-AUD-ACCESS-001
title: Accessibility audit (WCAG 2.2 AA)
category: design-audit
subcategory: accessibility
status: CURRENT
version: 1.0.0
targets: [claude, codex, any-llm]
output: Findings mapped to WCAG 2.2 success criteria with evidence and fixes, plus the list of checks that need a human (screen reader, cognitive)
variables: [TARGET]
canon_refs:
  - 10_DESIGN_SYSTEM/accessibility/wcag-2.2-aa-checklist.md
  - 10_DESIGN_SYSTEM/accessibility/contrast-matrix.md
  - 10_DESIGN_SYSTEM/accessibility/focus-states.md
  - 10_DESIGN_SYSTEM/motion-vfx/reduced-motion.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
tags: [audit, accessibility, wcag]
updated: 2026-10-29
---
# Accessibility audit

## Use
Full WCAG 2.2 AA pass on a screen or component. Automated tools catch roughly a third of issues; this prompt combines them with a scripted keyboard and zoom walk-through and says plainly what still needs a human.

## Prompt
```text
Audit {{TARGET}} for WCAG 2.2 level AA, using 10_DESIGN_SYSTEM/accessibility/wcag-2.2-aa-checklist.md as the checklist.

Run, in a headless browser:
1. axe-core (load it from a local copy if offline) — list every violation with its rule id and node.
2. Keyboard walk: Tab and Shift+Tab through the page; record the order, any trap, any element that receives focus without a visible indicator (2.4.7, 2.4.11 Focus Not Obscured, 2.4.13 is AAA — note only), and any interactive element that cannot be reached.
3. Contrast: for every text style in use, compute the ratio against its actual background and compare with the APPROVED and FORBIDDEN lists in accessibility/contrast-matrix.md (1.4.3, 1.4.11 for UI parts and focus rings).
4. Reflow and zoom: 320 px width and 400 % zoom with no two-dimensional scrolling (1.4.10); 200 % text size with no clipped text (1.4.4); text spacing overrides (1.4.12).
5. Target size: every pointer target ≥ 24 × 24 px or with spacing (2.5.8).
6. Motion: with prefers-reduced-motion: reduce, nothing animates beyond opacity fades (2.3.3 is AAA — note only; check our own reduced-motion rule).
7. Names and roles: icon-only buttons, toggles, tabs, dialogs, live regions for status updates (4.1.2, 4.1.3); headings and landmarks (1.3.1, 2.4.6).
8. Status and errors: never colour alone (1.4.1); errors identified in text with a fix (3.3.1, 3.3.3); no redundant entry (3.3.7); accessible authentication (3.3.8) if there is a login.

Output a table: SC number · level · PASS/FAIL/N/A · evidence · fix. Then list what needs a human: screen-reader announcement quality (NVDA/JAWS/VoiceOver), cognitive load, and real-device touch.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{TARGET}}` | a screen file path | a component in the gallery (`10_DESIGN_SYSTEM/gallery/index.html#components`) |

## Changelog
- 1.0.0 — first version.
