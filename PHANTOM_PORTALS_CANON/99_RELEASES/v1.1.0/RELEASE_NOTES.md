# Phantom Portals canon — v1.1.0

**Released 2026-10-30.** The owner's 2026-10-29 Trash Polka direction is filed, and the design system now reaches the tools the project uses: shadcn/ui for Codex's app, Figma, and Canva. Full list: [CHANGELOG](../../00_START_HERE/CHANGELOG.md).

## New
- **Owner direction 2026-10-29** (verbatim) and **Universal Canon v4** (verbatim, Law 4 Cyberpunk retired).
- **Status vocabulary**: 10 truthful states + 5 evidence labels as StatusBadge shape + colour + word; JSON for code; live in the gallery.
- **Adapters** generated from `tokens.json` by `80_TOOLS/build-adapters.py`: shadcn/ui theme for Tailwind v4, Figma variable spec, Canva Brand Kit sheet, 9-page brand board, 42-pairing contrast report.
- **Canva kit** in the owner's account: folder, 14 assets, board design (saved on approval).
- **Codex hand-off v1.1**: five-gate work order, `AGENTS.md` snippet, ledger entry.
- `tokens.json` records the v3.1 prototype values as mappings — **no token value changed**. The owner kept the canon palette (C-08 resolved, ADR-0011 accepted).

## Verified for this release
- `validate-canon.py` → **11/11** (new `adapters` check); every check also shown to fail on an injected fault.
- shadcn theme: valid against shadcn's `registry-item.json` schema; compiled with **Tailwind 4.3.3**; in Chromium **18/18** sampled colours equal the canon hex, controls 0 px, cards 8 px, all fonts load (`80_TOOLS/tests/shadcn-theme/run.sh`).
- oklch conversion round-trips exactly for all 23 solid colours; 42/42 adapter pairings pass WCAG 2.2 AA (one real failure — inverse input border 2.70:1 — was found and fixed).
- Gallery (with the new status section), starter and deck: 0 errors, 0 external requests, no overflow at 1440 / 390 px. Brand board: 9 pages, no overflow, fonts load.
- All 74 CSS variables still equal the design system's original.
- A git clone of the release branch verifies byte-for-byte (`sha256sum -c` clean, 11/11 checks) — after fixing `.gitattributes`, which previously rewrote line endings in 10 files.

## Not verified / not done
- **Figma**: connector is connected to the owner's account but its tools were not enabled for this session — the variable spec is ready, no Figma file was built.
- **USB app**: adoption of the theme and status vocabulary is Codex's work order; unverified until Codex reports.
- `build-tokens.ps1` still untested on Windows.
- Canva: the 9-page board was saved with the owner's approval and filed in the Phantom Portals folder; the 14 uploaded assets stay in Canva Uploads (the API may not move agent uploads into folders).

## Open decisions
C-01 shell sizes, C-03 page architecture, C-04 missing v3.1 package, C-06 mockup art.

## Verify
```bash
cd PHANTOM_PORTALS_CANON
sha256sum -c 99_RELEASES/v1.1.0/MANIFEST.sha256 --quiet && echo "release intact"
python3 80_TOOLS/validate-canon.py
```
`99_RELEASES/v1.0.0/MANIFEST.sha256` describes the 1.0.0 state and no longer matches changed files — that is expected; each release verifies against its own manifest.
