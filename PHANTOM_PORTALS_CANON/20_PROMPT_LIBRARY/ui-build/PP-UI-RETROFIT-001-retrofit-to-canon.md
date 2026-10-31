---
id: PP-UI-RETROFIT-001
title: Retrofit an existing screen to the White-Forward canon
category: ui-build
subcategory: retrofit
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: The same screen and behaviour, restyled with canon tokens and components; a diff summary and a list of what was replaced
variables: [FILE, KEEP]
canon_refs:
  - 50_AGENTS/project-instructions.md
  - 00_START_HERE/CANON_REGISTER.md
  - 00_START_HERE/decisions/ADR-0001-white-forward-canon.md
  - 00_START_HERE/decisions/ADR-0002-font-stack.md
  - 10_DESIGN_SYSTEM/components/README.md
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
  - 20_PROMPT_LIBRARY/negative/retired-canon-negative.md
tags: [retrofit, migration]
updated: 2026-10-29
---
# Retrofit a screen to the canon

## Use
Older screens built in the Ruby Edition, the Operator system or the XerXes style lock (dark obsidian, gold, purple, seven operator colours, retired fonts). This keeps behaviour and replaces the look. It is a restyle, not a rewrite.

## Prompt
```text
Restyle {{FILE}} to the current Polka Portals canon (White-Forward Phantom Edition) without changing what it does.

Read first: PHANTOM_PORTALS_CANON/50_AGENTS/project-instructions.md, 00_START_HERE/CANON_REGISTER.md (what is CURRENT and RETIRED), ADR-0001 and ADR-0002, and 20_PROMPT_LIBRARY/negative/retired-canon-negative.md (every retired colour and font).

Steps:
1. Inventory: list every colour, font, shadow, radius and hand-built control in the file, and map each to a canon token or library component. Show me the mapping table before editing.
2. Replace retired values with tokens (var(--…)); replace hand-built controls with the library component that does the same job. Keep: {{KEEP}}.
3. Flip the composition to white-forward: paper work area, black frame (tab strip, rail, terminal), crimson only as the single primary action and focal point.
4. Remove decorative glows, gradients, gold trims, operator colour coding and extra figures. One Phantom at most.
5. Keep every behaviour, id, data binding, event handler and accessible name. Do not touch backend calls, boot tooling, credentials or file paths.
6. Verify: the page loads offline with no console errors; every interaction still works; grep the file for each retired hex and font name and show that none remain; run python3 80_TOOLS/validate-canon.py if the file lives in the canon.

Report the mapping table, the diff summary, and what you verified.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{FILE}}` | path of the screen to retrofit | — |
| `{{KEEP}}` | all behaviour, layout order and copy | anything the owner wants frozen |

## Negative
Append [ui-negative.md](../negative/ui-negative.md) and [retired-canon-negative.md](../negative/retired-canon-negative.md).

## Review
[PP-AUD-CANON-001](../design-audit/PP-AUD-CANON-001-canon-compliance.md).

## Changelog
- 1.0.0 — first version.
