# 90_ARCHIVE — retired canon (read-only)

Everything here **was** canon once and is **not** canon now. It is kept so the history is honest and old files can be recognised, never so they can be reused. Nothing in this folder may be copied into a CURRENT folder; the `retired` check in `80_TOOLS/validate-canon.py` fails if a retired colour or font leaks out ([full list](../20_PROMPT_LIBRARY/negative/retired-canon-negative.md)).

| Folder | Era | What it was | Why retired | Source |
|---|---|---|---|---|
| [xerxes-style-lock-2026-09-19](xerxes-style-lock-2026-09-19/) | 2026-09-19 → 21 | XerXes Visual System: five-colour lock (obsidian, graphite, sovereign gold, phantom purple, platinum), Montserrat / Inter / JetBrains Mono | Dark-first; gold and purple are not the Phantom palette | https://claude.ai/code/artifact/19601e18-ee0f-4903-a44f-842a21b7d8f5 · binaries: [ASSET_POINTERS](xerxes-style-lock-2026-09-19/ASSET_POINTERS.md) |
| [ruby-edition/asset-pack-2026-09-19](ruby-edition/asset-pack-2026-09-19/) | 2026-09-19 | Ruby Edition asset pack: generation prompt, third-party notices, `ruby.css` / `phantom.css` / `tokens.css` | Obsidian + gold + ruby; superseded by white-forward ([ADR-0001](../00_START_HERE/decisions/ADR-0001-white-forward-canon.md)) | Carried inside the Operator System artifact's `assets/PROMPTS` and `assets/STYLES` |
| [ruby-edition/design-system-2026-10-02](ruby-edition/design-system-2026-10-02/) | 2026-10-02 | Ruby Edition design system: "Obsidian grounds. Platinum speaks. Gold lights. Ruby costs." Cinzel / Space Grotesk / IBM Plex Mono | As above; Cinzel and IBM Plex Mono retired ([ADR-0002](../00_START_HERE/decisions/ADR-0002-font-stack.md)) | https://claude.ai/code/artifact/d521f3bd-4c25-4b73-9090-3e693c66398d |
| [operator-system-7-colors](operator-system-7-colors/) | 2026-10-06 | Operator System: seven operator identities with their own colours, obsidian-to-platinum materials, sovereign gold, PHANTØM wordmark, 25 CSS components, guidelines | One Phantom, no operator personas ([ADR-0006](../00_START_HERE/decisions/ADR-0006-one-phantom-no-operators.md)) | https://claude.ai/code/artifact/c0117435-2522-4190-9bc3-5b2ed755bf60 · binaries: [ASSET_POINTERS](operator-system-7-colors/ASSET_POINTERS.md) |
| [v1-flat-vectors-2026-10-29](v1-flat-vectors-2026-10-29/) | 2026-10-29 17:04 → 17:52 | First white-forward asset set: faceted emblem in a hex portal, 20 icons at 1.75 px, 16 vectors, and the v1 `manifest.json` mapping | Replaced the same day by the Ink Protocol artwork ([ADR-0003](../00_START_HERE/decisions/ADR-0003-ink-protocol-artwork.md)) | The current design system, earlier version: https://claude.ai/artifact/HG2ihDf5JsALbo4fxCXcmV |
| [brand-marks-phantom-2026-10-31](brand-marks-phantom-2026-10-31/README.md) | 2026-10-29 → 31 | The reaper monogram, app icon and lockup and the PHANTOM PORTALS wordmark (light, inverse) — the logo-role marks of canon 1.0.0–1.2.0 | Project renamed Polka Portals and the shield mask adopted as the logo ([ADR-0014](../00_START_HERE/decisions/ADR-0014-rename-polka-portals.md), [ADR-0015](../00_START_HERE/decisions/ADR-0015-shield-logo.md)); the Phantom stays as character art | The current design system: https://claude.ai/artifact/HG2ihDf5JsALbo4fxCXcmV |

Not archived because no files survive: the alpine-landscape hero, the holographic brain as required homepage hero and the orange/sapphire/violet scheme (named as inactive by the Codex v3.1 handoff; register CR-095).

## Read-only, sealed
[`ARCHIVE_MANIFEST.sha256`](ARCHIVE_MANIFEST.sha256) lists the SHA-256 of every file in this folder. `validate-canon.py` fails if a file is changed, removed or added without resealing.

Verify by hand:
```bash
cd 90_ARCHIVE && sha256sum -c ARCHIVE_MANIFEST.sha256
```

## Adding to the archive
When something leaves the canon:
1. Move it here into a folder named `<what>-<YYYY-MM-DD>` (the date it was last current); do not edit it on the way.
2. Mark its register entry RETIRED and add a line to the [CHANGELOG](../00_START_HERE/CHANGELOG.md).
3. Add its distinguishing colours and fonts to the `RETIRED` list in `80_TOOLS/validate-canon.py` and to [retired-canon-negative.md](../20_PROMPT_LIBRARY/negative/retired-canon-negative.md).
4. Add a row to the table above, then reseal: `python3 80_TOOLS/hash-manifest.py archive`.
