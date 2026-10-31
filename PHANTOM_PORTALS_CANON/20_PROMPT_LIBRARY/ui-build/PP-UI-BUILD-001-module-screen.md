---
id: PP-UI-BUILD-001
title: Build a module screen inside the browser shell
category: ui-build
subcategory: screens
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: One offline HTML (or React) screen using the component library and tokens, plus a short report of what was verified
variables: [MODULE, PURPOSE, DATA_SOURCE, TARGET_PATH]
canon_refs:
  - 50_AGENTS/project-instructions.md
  - 10_DESIGN_SYSTEM/components/README.md
  - 10_DESIGN_SYSTEM/components/browser-shell.md
  - 10_DESIGN_SYSTEM/foundations/breakpoints.md
  - 10_DESIGN_SYSTEM/visual-language/composition-ratios.md
  - 60_TEMPLATES/html-css-starter/index.html
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
tags: [build, screen, shell]
updated: 2026-10-29
---
# Build a module screen

## Use
A new tool page in the Command Center — Diagnostics, Network, Recovery, Drive Health, Logs. Paste into a coding agent that can read the canon folder. Start from the HTML starter so fonts, icons and tokens are already wired for offline use.

## Prompt
```text
You are building the {{MODULE}} screen of Polka Portals, an offline-first IT command center. Its purpose: {{PURPOSE}}.

Read first, in this order, and follow them over anything you remember:
1. PHANTOM_PORTALS_CANON/50_AGENTS/project-instructions.md
2. 10_DESIGN_SYSTEM/components/README.md and the reference card of every component you mount (components/reference/<Name>/card.md)
3. 10_DESIGN_SYSTEM/components/browser-shell.md, foundations/breakpoints.md, visual-language/composition-ratios.md

Build:
- Start from 60_TEMPLATES/html-css-starter/index.html; write the screen to {{TARGET_PATH}}.
- Compose it from the component library (window.PhantomPortals) inside the existing browser shell: TabStrip, Omnibox, UtilityRail, then the work area. Use StatusPanel, DiagnosticTable, Terminal, ToolTile, CommandModule, Progress, Notification and StatusBadge where they fit; build nothing the library already ships.
- Style only with tokens (var(--…)) from 10_DESIGN_SYSTEM/tokens/build. White-forward: the black frame is the tab strip and rail; the work area is paper.
- Data comes from {{DATA_SOURCE}}. If it is not available, show an honest empty or unavailable state — never invent readings, logs, sessions or command output.
- One crimson primary action on the screen. Art (one Trash Polka mark + one precision mark) only in the header or an empty state, never behind tables, terminals, forms or text.
- Every control is reachable by keyboard with a visible crimson focus ring; icon-only buttons have an accessible name and tooltip; status is never colour alone.
- Respect prefers-reduced-motion. No perpetual animation.
- Works opened straight from disk (file://): icons via window.PhantomIconData, absolute URLs for any other asset, fonts from 30_ASSETS/fonts. No network requests.

Verify before you report:
- Open the page in a headless browser at 390, 768, 1024 and 1440 px: no console errors, no failed requests, no horizontal page scroll, focus visible on every control.
- Run python3 80_TOOLS/validate-canon.py if you touched anything inside the canon.
Report what you built, what you verified (with the commands), and anything you could not verify. Do not claim checks you did not run.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{MODULE}}` | Diagnostics | Network · Recovery · Drive Health · Logs · Settings |
| `{{PURPOSE}}` | run a full hardware scan and show each check's status, value and next step | any one-sentence job |
| `{{DATA_SOURCE}}` | a JSON file the backend writes to `./data/<module>.json` | a local API at `http://127.0.0.1:<port>` · static sample data clearly labelled SAMPLE |
| `{{TARGET_PATH}}` | `app/screens/<module>.html` | a React route file |

## Negative
Append [ui-negative.md](../negative/ui-negative.md) as the **Do not** section.

## Tool notes
- **Claude Code / Codex:** give the agent the canon folder as working directory or an absolute path; ask for the headless check with Playwright (`require('playwright')`).
- **Cursor:** add `50_AGENTS/project-instructions.md` and the component cards to the context explicitly.

## Review
[PP-AUD-CANON-001](../design-audit/PP-AUD-CANON-001-canon-compliance.md), then [PP-AUD-ACCESS-001](../design-audit/PP-AUD-ACCESS-001-accessibility.md).

## Changelog
- 1.0.0 — first version.
