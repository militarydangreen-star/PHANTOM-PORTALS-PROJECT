# Start here

![Polka Portals](../30_ASSETS/brand/logo/polka-lockup-horizontal.svg)

**Polka Portals Canon — version 1.3.1 (2026-10-31)**

This folder is the single source of truth for what Polka Portals looks like, sounds like and is built with. If something is not here, or is here with a status other than **CURRENT**, it is not canon.

Polka Portals (called *Phantom Portals* until 2026-10-31, [ADR-0014](decisions/ADR-0014-rename-polka-portals.md)) is an elite, offline-first IT command center: a Chromium-style browser shell, diagnostic workspaces, AI tools and system utilities, dressed as a premium piece of interactive digital art. Its identity is **white-forward Trash Polka × isometric cybernetic HUD** — white paper surfaces, matte-black architecture, blood-crimson accents and one hooded Phantom.

> White creates clarity. Black creates authority. Crimson creates identity. Geometry creates precision. Trash Polka creates character. Function holds everything together.
> **CONTINUE → IMPROVE → INTEGRATE.**

## How to use it

| You are… | Read | Then use |
|---|---|---|
| **Designing** a screen, poster or asset | [Visual language](../10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md), [foundations](../10_DESIGN_SYSTEM/foundations/color.md), the [gallery](../10_DESIGN_SYSTEM/gallery/index.html) | Assets in [30_ASSETS](../30_ASSETS/README.md) — check each file's status in its `.meta.json` |
| **Building** UI (human or coding agent) | [Design system README](../10_DESIGN_SYSTEM/README.md), [components](../10_DESIGN_SYSTEM/components/README.md) | `10_DESIGN_SYSTEM/tokens/build/` and `components/library/`; prompts in [ui-build](../20_PROMPT_LIBRARY/ui-build/) |
| **Generating images** | [Prompt library](../20_PROMPT_LIBRARY/README.md) | Copy a prompt, fill its variables, keep the shared [negative list](../20_PROMPT_LIBRARY/negative/global-avoid.md) |
| **Briefing an AI** (Claude, Codex, Cursor, ChatGPT) | [50_AGENTS/project-instructions.md](../50_AGENTS/project-instructions.md) | Paste it as project instructions; attach this folder |
| **Checking what is current** | [CANON_REGISTER.md](CANON_REGISTER.md) | [CHANGELOG.md](CHANGELOG.md) for when and why things changed |
| **Changing the canon** | [decisions/](decisions/README.md) | The update workflow below |

## Source-of-truth order

When two things disagree, the higher one wins. Record the disagreement in the [register](CANON_REGISTER.md#open-conflicts) and settle it with a decision record.

1. **Decision records** in [decisions/](decisions/README.md) with status *Accepted*.
2. **Design tokens** — [`10_DESIGN_SYSTEM/tokens/tokens.json`](../10_DESIGN_SYSTEM/tokens/tokens.json). Every value in CSS, TS and Tailwind is generated from it.
3. **Design-system docs** in `10_DESIGN_SYSTEM/` (foundations, visual language, components).
4. **Component library** — `10_DESIGN_SYSTEM/components/library/` (behaviour and markup contract).
5. **Assets** whose sidecar says `"status": "CURRENT"`.
6. **Agent instructions** in `50_AGENTS/` — they point at the above; they never override it.
7. **Mockups** in `40_MOCKUPS/screens/` — explorations, not specifications.
8. **Third-party references** — inspiration only. Never shipped, traced or trained on.
9. **`90_ARCHIVE/`** — retired. Never mixed into current work.

## Status vocabulary

| Status | Meaning |
|---|---|
| **CURRENT** | Canon. Use it. |
| **RETIRED** | Was canon, has been replaced. Kept read-only in `90_ARCHIVE/` for history. Do not use. |
| **UNCLEAR** | Origin, ownership or intent not confirmed, or it conflicts with canon. Do not use until the owner decides. |
| **REFERENCE** | Third-party inspiration. Look, never ship. |
| **DRAFT** | Work in progress, not yet reviewed. |

## Updating the canon

```bash
# 1. Change the source (tokens.json, a doc, an asset + its sidecar, a prompt)
# 2. Rebuild what is generated
./80_TOOLS/build-tokens.sh                 # Windows: .\80_TOOLS\build-tokens.ps1
python3 80_TOOLS/index-assets.py
python3 80_TOOLS/index-prompts.py
# 3. Gate
python3 80_TOOLS/validate-canon.py         # must end with 11/11 checks passed
# 4. Record it: CHANGELOG.md, CANON_REGISTER.md, and a decision record if it changes what is canon
# 5. Release (semantic versioning — see decisions/ADR-0010)
python3 80_TOOLS/hash-manifest.py release 1.3.0
```

New asset? `python3 80_TOOLS/index-assets.py --new 30_ASSETS/<folder>/<file> --id PP-VEC-020 --title "…"` writes its sidecar.

## Where it came from

Canon 1.0.0 was assembled on 2026-10-29 from the owner's Claude artifacts — the current design system *Phantom Portals — White / Crimson / Black* (with the Ink Protocol artwork), three retired design systems, the "Phantom Portals" Claude Design canvas, the Trashy Mr. Polka agent brief and the Codex v3.1 handoff. Every imported file records its origin (artifact link, asset id, version, SHA-256) in its sidecar or in [`10_DESIGN_SYSTEM/_source/`](../10_DESIGN_SYSTEM/_source/claude-design-system/README.md).

Canon 1.1.0 (2026-10-30) added the owner's [2026-10-29 Trash Polka direction](directions/README.md), the Universal Canon v4 laws, the [status vocabulary](../10_DESIGN_SYSTEM/components/status-vocabulary.md), and [adapters](../10_DESIGN_SYSTEM/adapters/README.md) that carry the tokens into shadcn/ui (for Codex), Figma and Canva.

Canon 1.2.0 (2026-10-30) filed the owner's concept sheets and rebuilt the inventory concept on the canon components.

Canon 1.3.0 (2026-10-31) renamed the project **Polka Portals** and adopted the **shield mask** as the logo, redrawn as clean vectors ([ADR-0014](decisions/ADR-0014-rename-polka-portals.md), [ADR-0015](decisions/ADR-0015-shield-logo.md), [logo.md](../10_DESIGN_SYSTEM/visual-language/logo.md)); the hooded Phantom stays the character.

Live sources (titled with the old name until the owner renames them):

- Design system: <https://claude.ai/artifact/HG2ihDf5JsALbo4fxCXcmV>
- Design canvas (mockups): <https://claude.ai/artifact/6jk64Yyaaq6JU2Uy41jXv6>

Those links are private to the owner's account. This folder is the durable copy.
