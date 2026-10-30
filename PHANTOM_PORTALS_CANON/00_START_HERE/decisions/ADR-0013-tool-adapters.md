# ADR-0013: Generate shadcn/ui, Figma and Canva adapters from the tokens

- **Status:** Accepted
- **Date:** 2026-10-30
- **Deciders:** Project owner (asked for Codex, Figma and Canva to share the design system); recorded by the canon maintainer
- **Canon version:** 1.1.0

## Context
The design system now has to live in three more places: the USB app Codex builds (React + Tailwind, where shadcn/ui is the common component base), Figma, and Canva. Hand-copying values into each drifts within a week.

## Decision
`80_TOOLS/build-adapters.py` generates every adapter from `tokens.json`:
- **shadcn/ui** — a `registry:theme` item (oklch, validated against shadcn's own schema), a Tailwind v4 `globals.css`, and `@font-face` for the canon fonts. `light` is the white-forward UI; `dark` is for inverse regions only. Controls are squared with an unlayered `[data-slot]` rule.
- **Figma** — a variable spec in Figma's standard pattern (Primitives single-mode with empty scopes; `Color` with Light / Inverse modes using the shadcn role names; `Dimension`), text styles and effect styles, ready for the `figma-generate-library` workflow.
- **Canva** — the Brand Kit sheet (Canva's API cannot create Brand Kits).
- `CONTRAST.md` — every foreground/background pairing the adapters create; the build fails below 4.5:1 (text) or 3:1 (boundaries, focus).
`validate-canon.py` fails if an adapter is stale.

## Consequences
- One token edit + rebuild updates CSS, React, shadcn, Figma and Canva values together.
- Verified on 2026-10-30: compiled with Tailwind 4.3.3 and rendered in Chromium, 18/18 sampled colours equal the canon hex exactly, controls 0 px, cards 8 px, all three fonts load (`80_TOOLS/tests/shadcn-theme`).
- The first contrast run caught a real failure (inverse input border 2.70:1 on raised cards); dark `input` now uses `border-control` (3.79:1).

## Sources
shadcn/ui MIT source (register CR-067): `apps/v4/registry/themes.ts`, `public/schema/registry-item.json`, `templates/*/globals.css`; Figma skill references (`token-creation.md`).
