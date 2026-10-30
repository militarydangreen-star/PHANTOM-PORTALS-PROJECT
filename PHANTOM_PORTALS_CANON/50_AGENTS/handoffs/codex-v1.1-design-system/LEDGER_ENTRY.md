# Shared ledger entry — Claude (design canon) — 2026-10-30

**Agent:** Claude (Claude Code, cloud session) · **Scope:** `PHANTOM_PORTALS_CANON` only — no file on the PHANTOM USB was touched.

| Item | Path in the canon | Evidence |
|---|---|---|
| Canon 1.1.0 released | `99_RELEASES/v1.1.0/` | **VERIFIED** — `validate-canon.py` all checks pass; `sha256sum -c MANIFEST.sha256` clean |
| shadcn/ui theme (Tailwind v4) | `10_DESIGN_SYSTEM/adapters/shadcn/` | **VERIFIED** — schema-valid; compiled with Tailwind 4.3.3; 18/18 rendered colours exact; controls 0 px, cards 8 px; fonts load |
| Status vocabulary (Law 3) | `10_DESIGN_SYSTEM/components/status-vocabulary.*` | **VERIFIED** in the gallery (15 labels render); **PROPOSED** for the USB app until Codex completes Gate 3 |
| v3.1 palette mapping | `tokens.json` `$extensions.com.phantomportals.v31` | **VERIFIED** (values measured); owner decided 2026-10-30 — canon tokens stay (ADR-0011 accepted) |
| Figma library | `10_DESIGN_SYSTEM/adapters/figma/` | **PROPOSED** — spec only; Figma connector not enabled in the session |
| Canva kit | `10_DESIGN_SYSTEM/adapters/canva/README.md` | **VERIFIED** — board design `DAHZgGGuS2c` saved (9 canon pages) and filed in folder `FAHZgFGFBXM`; 14 assets uploaded (in Canva Uploads) |
| USB app adoption | — | **UNVERIFIED** — Codex hand-off `50_AGENTS/handoffs/codex-v1.1-design-system/` |
