# Codex hand-off v1.1 — design system into the USB app

How the canon reaches the code Codex maintains on the PHANTOM USB. Follows [Universal Canon v4](../universal-canon-v4/README.md) Law 5: shared ledger, no overwriting another agent's work, evidence labels.

| File | Use |
|---|---|
| [COPY_PASTE_INTO_CODEX.txt](COPY_PASTE_INTO_CODEX.txt) | The work order. Paste into Codex with the PhantomPortals repo open and this canon attached. Five gates: inventory → theme → status vocabulary → verify → report |
| [AGENTS_SNIPPET.md](AGENTS_SNIPPET.md) | Paste into the repo's `AGENTS.md` so every agent (Codex, Claude, Cursor, Gemini) gets the same canon rules |
| [LEDGER_ENTRY.md](LEDGER_ENTRY.md) | This session's entry for the shared ledger, with evidence labels |

## Visual references (not part of the work order)
The owner's 2026-10-30 concept sheets ([40_MOCKUPS/concepts](../../../40_MOCKUPS/concepts/README.md)) and their canon rebuild, the [artifact inventory screen](../../../40_MOCKUPS/screens/catalog/artifact-inventory.html), are **UNCLEAR / DRAFT** until the owner settles the name (C-09) and logo (C-10). Codex should not ship the "Polka Portals" name, the shield logo, or gold/purple/green rarity colours.

## Getting the canon to Codex
- **Codex in the cloud** reads GitHub repositories. The owner's `militarydangreen-star/PHANTOM-PORTALS-PROJECT` is empty and **public**: before pushing the canon there, either make the repository private or leave out `40_MOCKUPS/references/third-party/` (25 third-party images) and `40_MOCKUPS/references/unclear/` — both are reference-only and must not be published.
- **Codex CLI / IDE on the owner's machine**: copy or unzip `PHANTOM_PORTALS_CANON` next to the PhantomPortals repo and point Codex at it.
