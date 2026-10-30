---
id: PP-UI-OFFLINE-001
title: Wire a page for fully offline use (file://, WinPE, air-gapped)
category: ui-build
subcategory: offline
status: CURRENT
version: 1.0.0
targets: [claude, codex, cursor, any-llm]
output: A page that renders identically from disk with the network off — zero external requests, fonts and icons loading
variables: [PAGE]
canon_refs:
  - 00_START_HERE/decisions/ADR-0005-offline-first-assets.md
  - 10_DESIGN_SYSTEM/components/library/README.md
  - 10_DESIGN_SYSTEM/iconography/icon-rules.md
  - 60_TEMPLATES/html-css-starter/index.html
negative_refs:
  - 20_PROMPT_LIBRARY/negative/ui-negative.md
tags: [offline, winpe, assets]
updated: 2026-10-29
---
# Offline wiring

## Use
Every page that ships on the recovery drive or runs in WinPE. These are the three traps found while building the gallery; this prompt fixes all of them.

## Prompt
```text
Make {{PAGE}} work fully offline, opened directly from disk (file://) with networking disabled.

Read first: ADR-0005, 10_DESIGN_SYSTEM/components/library/README.md ("Offline configuration"), and 60_TEMPLATES/html-css-starter/index.html (a working reference).

Known traps — handle each:
1. Icons are CSS masks set through a custom property (--icon: url(...)). A url() inside a custom property resolves against the stylesheet that uses it (bundle.css), not the page, so relative icon paths 404. And browsers refuse mask images from file:// (CORS). Fix: load 10_DESIGN_SYSTEM/iconography/icons.data.js and call PhantomPortals.configureIcons(window.PhantomIconData); for feature icons and art, pass absolute URLs built with new URL(path, location.href).href.
2. Fonts: link 10_DESIGN_SYSTEM/tokens/build/index.css (it includes fonts.css with @font-face pointing at 30_ASSETS/fonts). Remove any Google Fonts or CDN link.
3. Scripts: React and ReactDOM from 10_DESIGN_SYSTEM/components/library/lib/, never a CDN.

Then remove every remaining http(s) reference (fonts, images, analytics, maps, favicons).

Verify in headless Chromium with all network requests to non-file URLs aborted: zero failed requests, zero console errors, document.fonts.check('16px Inter') is true, and every .pp-icon has a computed mask-image that is not "none". Report the counts.
```

## Variables
| Variable | Default | Options |
|---|---|---|
| `{{PAGE}}` | path of the HTML page | a folder of pages |

## Negative
Append [ui-negative.md](../negative/ui-negative.md).

## Review
[PP-AUD-CANON-001](../design-audit/PP-AUD-CANON-001-canon-compliance.md) (offline section).

## Changelog
- 1.0.0 — first version.
