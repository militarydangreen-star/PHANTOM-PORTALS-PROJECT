# Universal Canon v4.0 — read this first

[`UNIVERSAL_CANON_v4.md`](UNIVERSAL_CANON_v4.md) is the owner's canon for the **PHANTOM USB** (effective 2026-10-15), kept verbatim. It governs the drive's architecture and how every agent works on it; this design canon governs how things look. They meet in three places.

| Law | What it covers | Status here |
|---|---|---|
| Law 1 — Architecture | Numbered pillars `01`–`20`, `PhantomPortals\` workbench, root boot invariants, no spaces at root | **CURRENT** for the USB; out of this canon's scope |
| Law 2 — Portability | Never hard-code the drive letter; relative links | **CURRENT**; matches the canon's offline rules ([ADR-0005](../../../00_START_HERE/decisions/ADR-0005-offline-first-assets.md)) |
| Law 3 — Truthful telemetry | Ten capability states (`READY` … `UNKNOWN`), "Copied — not run", measured facts only | **CURRENT**; adopted into the design system as the [status vocabulary](../../../10_DESIGN_SYSTEM/components/status-vocabulary.md) |
| Law 4 — Visual direction (Cyberpunk) | Obsidian/carbon, smoked glass, cyan/magenta emissions, HUD buttons, cockpit with the brain in the projection bay | **RETIRED** by the owner's [2026-10-29 Trash Polka direction](../../../00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md) (register CR-096) |
| Law 5 — Multi-agent federation | Agent profiles (Codex: `.codex/agents/phantom_architect.toml`, Claude: `.claude/agents/phantom-architect.md`), shared ledger, website hand-off, never overwrite another agent's work | **CURRENT**; the [Codex hand-off](../codex-v1.1-design-system/README.md) follows it |
| Evidence standard | `VERIFIED` · `IMPLEMENTED` · `PROPOSED` · `UNVERIFIED` · `PARTIALLY TESTED` | **CURRENT**; adopted as the evidence labels in the status vocabulary |

Links inside the verbatim file point at files on the USB (`CYBERPUNK_DESIGN_DIRECTION.md`, `PhantomPortals/docs/…`), not into this canon.
