---
id: PP-UI-COMPONENT-001
title: Build a backlog component to library standard
category: ui-build
subcategory: components
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: Component source + CSS using tokens, all states, keyboard support, a reference card, a gallery demo, and a test note
variables: [COMPONENT]
canon_refs:
  - 10_DESIGN_SYSTEM/components/BACKLOG.md
  - 10_DESIGN_SYSTEM/components/README.md
  - 10_DESIGN_SYSTEM/components/library/README.md
  - 10_DESIGN_SYSTEM/accessibility/focus-states.md
  - 10_DESIGN_SYSTEM/motion-vfx/reduced-motion.md
  - 10_DESIGN_SYSTEM/gallery/index.html
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
tags: [component, library]
updated: 2026-10-29
---
# Build a backlog component

## Use
Adding a component the product needs and the library does not ship yet — BottomDock, TabSwitcher, InspectorDrawer, Dialog/CommandPalette, TextField, FileExplorer, Chart, EmptyState.

## Prompt
```text
Build the {{COMPONENT}} component for the Polka Portals component library.

Read first: 10_DESIGN_SYSTEM/components/BACKLOG.md (the row for {{COMPONENT}}: why, source, notes), components/README.md, library/README.md and src/index.tsx (match the existing component style, naming — `pp-` class prefix, BEM-like `pp-name__part--state` — and prop conventions), accessibility/focus-states.md, motion-vfx/reduced-motion.md.

Requirements:
- React 18 function component exported on window.PhantomPortals like the others; CSS in the same style as bundle.css, tokens only.
- States: default, hover, focus-visible, active/pressed, selected (if any), disabled, loading/empty/error where they apply. Each state is distinguishable without colour.
- Keyboard: follow the WAI-ARIA Authoring Practices pattern for this widget (name the pattern you used). Dialogs and drawers trap focus, close on Escape and return focus to the opener.
- Respects prefers-reduced-motion and forced-colors.
- Works offline and inside the gallery over file://.

Deliver:
1. The component and its CSS (as a separate file next to the library until the bundle is rebuilt — do not hand-edit bundle.js).
2. components/reference/{{COMPONENT}}/card.md in the same format as the existing cards (props, states, do/don't, accessibility).
3. A live demo section in 10_DESIGN_SYSTEM/gallery/index.html with labelled sample data.
4. Move the row in BACKLOG.md to "Built (DRAFT)" and add a CHANGELOG entry under Unreleased.
Verify in a headless browser: keyboard walk-through, focus visible, no console errors, no overflow at 390 px. Report what you verified.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{COMPONENT}}` | BottomDock | TabSwitcher · InspectorDrawer · Dialog · CommandPalette · TextField · FileExplorer · Chart · EmptyState |

## Negative
Append [ui-negative.md](../negative/ui-negative.md).

## Review
[PP-AUD-ACCESS-001](../design-audit/PP-AUD-ACCESS-001-accessibility.md), then [PP-AUD-CANON-001](../design-audit/PP-AUD-CANON-001-canon-compliance.md).

## Changelog
- 1.0.0 — first version.
