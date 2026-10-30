# ADR-0004: Tokens are W3C DTCG JSON built by Style Dictionary, with a parity gate

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
The design system stores tokens in its own JSON shape and generates one `tokens.css`. The canon needs one source that every platform reads (CSS, TypeScript, Tailwind, design tools), and a guarantee that converting it changed nothing.

## Decision
- `10_DESIGN_SYSTEM/tokens/tokens.json` is the source, in the W3C Design Tokens Community Group format: `$value`, `$type`, `$description`, `{group.token}` aliases, project metadata under `$extensions["com.phantomportals"]` (spec name, derived flag, samples, font files). Dimensions are strings (`"16px"`) and colours hex or `rgba()`, which current tools read; moving to the object forms of the DTCG 2025.10 specification is a future change.
- Group paths reproduce the spec names: `surface.canvas` → `--surface-canvas`.
- **Style Dictionary 5.6.1** (pinned in `80_TOOLS/package.json`) builds `tokens/build/`. Run `80_TOOLS/build-tokens.sh` or `.ps1`.
- `validate-canon.py` fails if the build is stale or if any CSS variable drifts from the design-system snapshot in `10_DESIGN_SYSTEM/_source/`. A deliberate value change needs an ADR and a refreshed snapshot.

## Consequences
- Never edit files in `tokens/build/`.
- Composite typography tokens emit the `font` shorthand (`--text-h1`); letter-spacing lives in the generated `.h1`-style classes. Style Dictionary warns about this on every build; the warning is expected.
