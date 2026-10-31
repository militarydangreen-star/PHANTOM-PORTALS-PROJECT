# 50_AGENTS — instructions for AI tools

| File | Status | What it is | Where it goes |
|---|---|---|---|
| [project-instructions.md](project-instructions.md) | CURRENT | Canon-aware instructions for **any** AI tool, in a full and a ≤ 1,500-character version | Claude Project instructions · `AGENTS.md` in a repo (Codex, Cursor) · ChatGPT custom instructions (compact) |
| [trashy-mr-polka-bot.agent.md](trashy-mr-polka-bot.agent.md) | CURRENT, one open conflict (C-01) | The owner's design-and-build agent brief, **kept verbatim** | A custom agent in VS Code / GitHub Copilot (`.github/agents/`), or the body of a Claude Code subagent (see below) |
| [handoffs/codex-v3.1/](handoffs/codex-v3.1/README.md) | UNCLEAR (C-03, C-04) | The Codex master handoff for turning the USB prototype into a portable Chromium app | An engineering work order only; read its README first |

## Rules for this folder
- The agent brief is the owner's own text. Do not edit it here; propose changes as an ADR, and when accepted, the owner updates the brief and the CHANGELOG records it.
- Where the brief and the tokens disagree, the tokens win — the instructions file says so explicitly so every tool resolves C-01 the same way.
- Instructions point at canon files by path instead of copying values, so they stay correct when tokens change.

## Using the agent brief in Claude Code
The brief's front matter uses the VS Code custom-agent format (`tools: ['read', 'search', 'edit', …]`). For a Claude Code subagent, copy the body (everything after the second `---`) into `.claude/agents/trashy-mr-polka-bot.md` in the app's repository with Claude Code front matter, for example:

```markdown
---
name: trashy-mr-polka-bot
description: Polka Portals specialist for white-forward Trash Polka visual design, isometric HUDs, browser-shell UX and frontend visual QA.
tools: Read, Grep, Glob, Edit, Write, Bash
---
<body of trashy-mr-polka-bot.agent.md>
```

Then add the full block from `project-instructions.md` to the repository's `CLAUDE.md` so the canon path and precedence apply to every session.
