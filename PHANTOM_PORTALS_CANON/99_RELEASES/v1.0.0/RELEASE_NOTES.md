# Phantom Portals canon — v1.0.0

**Released 2026-10-29.** The first assembled canon: one folder holding the current design system, prompt library, asset library, mockups, agent instructions, templates, tooling and the retired history, every file accounted for.

## What is in it
| Folder | Contents |
|---|---|
| 00_START_HERE | README, canon register (52 entries, statuses CURRENT / RETIRED / UNCLEAR / REFERENCE / DRAFT, open conflicts C-01 … C-07), changelog, 10 decision records |
| 10_DESIGN_SYSTEM | W3C DTCG tokens + Style Dictionary builds (CSS, TS, Tailwind preset and v4 theme, resolved JSON), foundations, visual language, 10 component families + backlog, the shipped React component library, motion & VFX, iconography (20 UI + 20 feature icons), accessibility (WCAG 2.2 AA checklist, focus states, computed contrast matrix), offline gallery |
| 20_PROMPT_LIBRARY | 27 prompts with a schema: 13 image-generation, 5 coding-agent build, 4 design-audit, 4 negative lists; generated catalog |
| 30_ASSETS | 83 assets with provenance sidecars: brand marks, the Phantom, 19 Ink Protocol vectors, 40 icons, 8 font faces (OFL), 4 media templates |
| 40_MOCKUPS | 6 canvas screens (UNCLEAR — pre-Ink-Protocol art), 25 third-party references + 3 source pages (REFERENCE, never shipped), 2 logos of unknown origin (UNCLEAR), 7 dated gallery screenshots |
| 50_AGENTS | Project instructions (full and ≤ 1,500-character), the owner's agent brief (verbatim), Codex v3.1 handoff with a read-first note |
| 60_TEMPLATES | HTML/CSS starter, HTML deck, document template, thumbnail notes |
| 80_TOOLS | Token build, contrast matrix, asset and prompt indexers, icon data builder, hash manifests, template generator, the 10-check validator |
| 90_ARCHIVE | XerXes, Ruby Edition (asset pack + design system), Operator System, v1 flat vectors — read-only, sealed (89 files) |

653 files, 37 MB, excluding `80_TOOLS/node_modules` (reinstalled from `package-lock.json`).

## Verified for this release
- `python3 80_TOOLS/validate-canon.py` → **10/10 checks passed** (tokens, contrast, sidecars, mirrors, indexes, icons, links, retired, archive, fonts) on Python 3.11, 3.12 and 3.13.
- Every check was shown to **fail** on a scratch copy with an injected fault of its kind (details in [80_TOOLS/README.md](../../80_TOOLS/README.md)).
- Token build is reproducible: a clean rebuild with Style Dictionary 5.6.1 on Node 22 produced byte-identical output. All 74 CSS variables equal the design system's original `tokens.css`. All 21 approved contrast pairings pass WCAG 2.2 AA.
- Gallery, HTML starter and deck rendered in headless Chromium from `file://` with every non-file request blocked: 0 console errors, 0 failed requests, fonts loaded, every icon mask present, no horizontal scroll at 1440 and 390 px; the deck prints 6 PDF pages.
- The four media templates render with fonts and linked brand files, and regenerate byte-identically.
- `MANIFEST.sha256` (this folder) covers every file outside `99_RELEASES`; `ARCHIVE_MANIFEST.sha256` covers the archive. Both are standard `sha256sum` format.

## Not verified / not included
- `build-tokens.ps1` has not been run on Windows (no PowerShell in the build environment). The `.sh` version and the underlying `build-tokens.mjs` are tested.
- No PSD or AFDesign thumbnail files — the layered SVG template is the source; [60_TEMPLATES/thumbnail](../../60_TEMPLATES/thumbnail/README.md) explains how to make them.
- No intro video yet (CR-046, DRAFT).
- The component library ships no breakpoint CSS; a tested interim patch is in the [backlog](../../10_DESIGN_SYSTEM/components/BACKLOG.md). BottomDock, TabSwitcher and the other backlog components do not exist yet.
- The canvas mockups use v1 art and sample data (C-06); the Codex v3.1 package is missing (C-04); the v3.1 information architecture is unresolved (C-03); the shell dimensions ADR is proposed, not accepted (C-01).

## Verify this release
```bash
cd PHANTOM_PORTALS_CANON
sha256sum -c 99_RELEASES/v1.0.0/MANIFEST.sha256 --quiet && echo "release intact"
python3 80_TOOLS/validate-canon.py
```
(Or `python3 80_TOOLS/hash-manifest.py verify 99_RELEASES/v1.0.0/MANIFEST.sha256`.)

## Next
Decide the open conflicts (C-01, C-03, C-04, C-06), then 1.1.0: BottomDock + responsive CSS in the library, the first real app screenshots, Ink-Protocol rebuilds of the canvas screens.
