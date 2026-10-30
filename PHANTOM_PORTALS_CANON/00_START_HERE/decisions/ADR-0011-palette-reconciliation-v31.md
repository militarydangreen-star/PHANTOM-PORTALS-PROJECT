# ADR-0011: Keep the design-system palette; map the v3.1 prototype palette onto it

- **Status:** Accepted — 2026-10-30, owner chose "Keep canon tokens" (closes conflict C-08)
- **Date:** 2026-10-30
- **Deciders:** Project owner
- **Canon version:** 1.1.0

## Context
Two owner-approved sources dated 2026-10-29 give the white/crimson/black palette slightly different values:
- The design system *Phantom Portals — White / Crimson / Black* (this canon's `tokens.json`, 25 colour tokens, all contrast-checked).
- The owner's [Trash Polka design direction](../directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md), whose eight values come from the approved v3.1 prototype that Codex has been implementing on the USB.

Measured differences ([directions/README.md](../directions/README.md#how-the-2026-10-29-palette-compares-with-the-canon-tokens)): matte black, main text, paper and white are visually identical (ΔE ≤ 1.7); border (ΔE 4.3) and blood crimson (ΔE 6.3) are near-identical; **secondary text** is a different, cooler and lighter grey (ΔE 12.2; 4.68:1 on paper against the canon's 7.03:1); **primary red `#CE102B`** is a role the canon does not have (brighter than `accent-hero`, ΔE 18.8).

## Decision
1. The canon keeps its token values. They are the larger, contrast-checked set, the component library is built on them, and the secondary text grey is materially more legible.
2. The v3.1 values are recorded in `tokens.json` under `$extensions.com.phantomportals.v31` on the matching tokens, so code that still uses them can be mapped one-to-one, and Codex can migrate the USB app to the canon values without guessing.
3. `#CE102B` is **not** added as a token; v3.1 uses of it map to `accent-crimson`. If the owner later wants a brighter "signal red" for large primary buttons and hero type, add it as `accent-signal` with these verified pairings: white on it 5.62:1, it on paper 5.25:1, never as text on black (3.30:1).

## Consequences
- No visual change in anything built on the canon; the USB app shifts imperceptibly except for secondary text (darker) and any `#CE102B` uses (to `#A0112B`, or to `accent-signal` if adopted).
- The alternative — adopting the v3.1 values — would change 7 tokens, re-run the contrast matrix (all would still pass AA), update the snapshot parity check, and regenerate every adapter. The tooling makes either path a one-command rebuild.

## Sources
`10_DESIGN_SYSTEM/tokens/tokens.json`; `00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md`; contrast computed with the canon's WCAG formula (`80_TOOLS/contrast-matrix.py`).
