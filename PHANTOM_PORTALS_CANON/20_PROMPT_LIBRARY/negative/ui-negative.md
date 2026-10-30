---
id: PP-NEG-UI-001
title: UI-build avoid-list (coding agents)
category: negative
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: A "Do not" section pasted into every UI build prompt
canon_refs:
  - 10_DESIGN_SYSTEM/components/README.md
  - 10_DESIGN_SYSTEM/accessibility/wcag-2.2-aa-checklist.md
tags: [negative, ui]
updated: 2026-10-29
---
# UI-build avoid-list

Paste as the **Do not** section of every coding-agent prompt.

```text
Do not:
- hard-code colours, sizes, radii, shadows or fonts — use the tokens (var(--…)) from 10_DESIGN_SYSTEM/tokens/build;
- recreate a control the component library already ships (Button, Omnibox, Tabs, Toggle, Slider, Select, TabStrip, BookmarksBar, UtilityRail, ToolTile, CommandModule, StatusPanel, Terminal, DiagnosticTable, AIResponse, StatusBadge, Notification, Progress, Tooltip, PhantomHero, HudRing, Icon, FeatureIcon);
- load fonts, icons, scripts or images from a CDN or the network — everything ships locally;
- put Trash Polka art behind controls, tables, terminals, forms, search results or body text;
- make more than one crimson primary action per context, or use crimson as a background wash;
- use accent-electric (#EE5367) for text on light, or accent-crimson (#A0112B) for text on black;
- signal status with colour alone, hide focus outlines, or ship icon-only buttons without an accessible name and tooltip;
- invent telemetry, sessions, logs or command output, or fake tool launches presented as implemented;
- add perpetual or decorative animation, or ignore prefers-reduced-motion;
- replace or delete verified working code, change backend, boot tooling, partitions, ISOs, credentials or security boundaries;
- claim tests, builds or checks passed without running them.
```
