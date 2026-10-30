<!-- canon-lint: allow-retired -->
# ADR-0001: White-forward Trash Polka × isometric HUD is the only current visual canon

- **Status:** Accepted
- **Date:** 2026-10-29
- **Deciders:** project owner (XerXes)
- **Canon version:** 1.0.0

## Context
Between September and October 2026 the project went through four visual directions, all dark: the XerXes style lock (obsidian, graphite, sovereign gold, phantom purple, platinum), the Ruby Edition asset pack and design system (obsidian, platinum, gold, deep ruby; Cinzel), and the Operator System (seven operator energy colours over a black-and-gold machine). The Codex v3.1 handoff then froze a different direction — white-forward Trash Polka with isometric precision — and named the older directions as inactive. On 2026-10-29 the owner's *White / Crimson / Black* design system implemented that direction in full.

## Decision
The only current visual canon is **White-Forward Phantom Edition**: white and off-white working surfaces (55–65 %), matte-black architecture (25–35 %), blood-crimson accents (5–10 %), a 50/50 balance of expressive Trash Polka and engineered isometric geometry, and one hooded Phantom. Its values live in `10_DESIGN_SYSTEM/tokens/tokens.json`.

The XerXes lock, Ruby Edition and Operator System are **RETIRED**. Their files live read-only in `90_ARCHIVE/`. No gold, purple, operator colour, Cinzel, Montserrat or IBM Plex Mono may appear in current work; `validate-canon.py` enforces this.

## Consequences
- Never default to an all-dark interface; dark is reserved for the shell's black architecture, terminals, HUD panels, boot screens and dark hero variants.
- Prompts, agents and templates are written against this canon only.
- Reusing anything from the archive requires a new ADR.

## Sources
- `10_DESIGN_SYSTEM/_source/claude-design-system/README.md` (design-system spec)
- `50_AGENTS/handoffs/codex-v3.1/COPY_PASTE_INTO_CODEX.txt` ("VISUAL LAW")
- `90_ARCHIVE/` (the retired systems)
