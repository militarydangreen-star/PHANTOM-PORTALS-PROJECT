# 80_TOOLS — build, index, validate, release

Everything that keeps the canon honest. Python tools are **stdlib only** (Python 3.11+; tested on 3.11, 3.12, 3.13). The token build needs **Node 22+** for Style Dictionary 5.6.1, pinned in `package.json` and `package-lock.json`; after the first `npm ci` it works offline. Run everything from the canon root.

## The everyday loop
```bash
bash 80_TOOLS/build-tokens.sh                 # after editing tokens.json (Windows: build-tokens.ps1)
python3 80_TOOLS/index-assets.py              # after adding or changing an asset
python3 80_TOOLS/index-prompts.py             # after adding or changing a prompt
python3 80_TOOLS/build-icon-data.py           # after changing a UI icon
python3 80_TOOLS/build-adapters.py            # after any token change (shadcn, Figma, Canva)
python3 80_TOOLS/validate-canon.py            # always, before you call it done
```

## Tools
| Tool | Reads | Writes | Notes |
|---|---|---|---|
| `build-tokens.sh` / `.ps1` | — | — | Installs the pinned toolchain if missing (`npm ci`), runs `build-tokens.mjs`, then `contrast-matrix.py`. Exit 1 on any failure. The `.ps1` has not been run on Windows yet. |
| `build-tokens.mjs` | `10_DESIGN_SYSTEM/tokens/tokens.json` (W3C DTCG) and `tokens/style-dictionary.config.mjs` | `tokens/build/`: `tokens.css`, `typography.css`, `fonts.css`, `index.css`, `tokens.ts`, `tailwind.tokens.js`, `tailwind.theme.css`, `tokens.resolved.json`, `tokens.global.js`, `.source.sha256` | The stamp lets `validate-canon` detect a stale build. Style Dictionary warns "Unknown CSS Font Shorthand properties" for letter-spacing; expected — letter-spacing is emitted in `typography.css`. |
| `contrast-matrix.py` | `tokens/build/tokens.resolved.json` | `10_DESIGN_SYSTEM/accessibility/contrast-matrix.md` | WCAG 2.2 ratios for 21 approved pairings, the forbidden list and the full matrix. Exit 1 if an approved pairing fails. Reads the *built* tokens, so a stale build is caught by the `tokens` check first. |
| `index-assets.py` | every `*.meta.json` under `30_ASSETS` | `30_ASSETS/INDEX.json`, `INDEX.js` | `--check` exits 1 on drift (file changed since its sidecar) or a missing sidecar. `--new FILE --id … --title … [--kind] [--status]` writes a starter sidecar (refreshes sha256/bytes if one exists). |
| `index-prompts.py` | prompt front matter in `20_PROMPT_LIBRARY` | `20_PROMPT_LIBRARY/INDEX.json` | Validates against `_schema/prompt.schema.json` (required fields, enums, id pattern) and checks every `canon_refs` / `negative_refs` path exists. `--check` for CI. |
| `build-adapters.py` | `tokens.json`, `tokens/build/tokens.resolved.json`, `components/status-vocabulary.json` | `10_DESIGN_SYSTEM/adapters/` (shadcn theme, `globals.css`, fonts CSS, Figma spec, Canva Brand Kit sheet, `CONTRAST.md`), `components/status-vocabulary.js` | Proves the oklch conversion round-trips for every colour; exit 1 if any of 42 adapter pairings fails AA. `--check`. |
| `tests/shadcn-theme/run.sh` | the shadcn adapter | — (cleans up) | Compiles `globals.css` with Tailwind 4.3.3 and checks 18 rendered colours, control/card radii and fonts in Chromium. Needs Node 22+ and Playwright. |
| `build-icon-data.py` | `10_DESIGN_SYSTEM/iconography/icons/svg/*.svg` | `iconography/icons.data.js` | UI icons as `data:` URIs for pages opened from disk (CSS masks are blocked on `file://`). `--check`. |
| `hash-manifest.py` | the canon | `99_RELEASES/v<ver>/MANIFEST.sha256` or `90_ARCHIVE/ARCHIVE_MANIFEST.sha256` | `release <ver>` · `verify <manifest>` · `archive`. Output is standard `sha256sum` format, so `sha256sum -c` verifies it with no Python. |
| `validate-canon.py` | everything | — | The gate: 11 checks, exit 1 if any fails (below). |
| `canon_common.py` | — | — | Shared helpers: paths, statuses, sidecar rules, SHA-256, the front-matter parser. |
| `generators/make-media-templates.py` | — | the four media templates in `30_ASSETS` | Deterministic (same output every run). Overwrites hand edits — only to start over. |

## What `validate-canon.py` checks
| Check | Fails when |
|---|---|
| `tokens` | `build/` is older than `tokens.json`; a build file is missing; a CSS variable from the design-system snapshot is missing or has a different value (an intended change needs an ADR and a refreshed `_source` snapshot) |
| `contrast` | an approved text pairing drops below 4.5:1 (or 3:1 for large text and UI parts) |
| `sidecars` | an asset in a tracked folder has no sidecar, a sidecar lacks a required field or has an unknown status, or a file's sha256/bytes differ from its sidecar (Markdown docs, licences and generated catalogs are exempt) |
| `mirrors` | `10_DESIGN_SYSTEM/iconography` and `30_ASSETS/icons` hold different SVGs |
| `indexes` | `30_ASSETS/INDEX.json` or `20_PROMPT_LIBRARY/INDEX.json` is stale or reports a problem |
| `icons` | `icons.data.js` does not match the icon SVGs |
| `adapters` | an adapter file is stale, or an adapter pairing fails WCAG AA |
| `links` | a relative Markdown link points nowhere (archive, source snapshots, owner-authored handoff files excluded) |
| `retired` | a retired colour or font appears in a CURRENT folder without `canon-lint: allow-retired` near the top of the file |
| `archive` | a file in `90_ARCHIVE` was changed, removed or added without resealing |
| `fonts` | a font family folder has no `OFL.txt` |

**Tested against faults (2026-10-29), on scratch copies:** each injected fault tripped its own check with a fix-it message and exit code 1 — a tampered asset (`sidecars`, `indexes`), an unregistered icon (`sidecars`, `mirrors`, `icons`), an edited token without a rebuild (`tokens`), a broken link (`links`), a retired gold hex in a template (`retired`), an edited archive file (`archive`), a deleted `OFL.txt` (`fonts`), and `ink-secondary` set to 2.4:1 then rebuilt (`build-tokens.sh` exits 1, then `contrast` fails naming the three pairings).

## Releasing
1. `python3 80_TOOLS/validate-canon.py` → all checks pass.
2. Bump `VERSION`, add the CHANGELOG entry, write `99_RELEASES/v<ver>/RELEASE_NOTES.md`.
3. `python3 80_TOOLS/hash-manifest.py release <ver>` → `99_RELEASES/v<ver>/MANIFEST.sha256` (everything except `99_RELEASES`, `node_modules`, `.git`, `__pycache__`).
4. `python3 80_TOOLS/hash-manifest.py verify 99_RELEASES/v<ver>/MANIFEST.sha256`.
5. Zip the canon without `80_TOOLS/node_modules` (it is reinstalled from the lock file).
