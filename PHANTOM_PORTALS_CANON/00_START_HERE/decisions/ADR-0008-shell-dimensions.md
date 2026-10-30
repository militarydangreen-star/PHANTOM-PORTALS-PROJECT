# ADR-0008: Shell dimensions follow the tokens, not the agent brief

- **Status:** Proposed — awaiting owner confirmation
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
The Trashy Mr. Polka BOT brief gives desktop shell defaults of tab strip 40 px, omnibox/header 56 px, favorites bar 36 px and utility rail 72 px (56 px at intermediate widths). The design-system tokens and the shipped components use tab strip 40 px (`tabstrip-height`), omnibox 44 px (`omnibox-height`), favorites 32 px (`bookmarks-height`) and rail 56 px (`rail-width`).

## Decision (proposed)
The tokens are canon: 40 / 44 / 32 / 56. They are what the component library renders, and they keep the shell's black frame within the 25–35 % black budget. The agent brief is kept verbatim as the owner wrote it; `50_AGENTS/project-instructions.md` tells every agent that tokens win.

## Consequences
- If the owner prefers the brief's larger shell, change the four tokens, rebuild, update this ADR to Accepted with the new values, and refresh the design-system snapshot.
