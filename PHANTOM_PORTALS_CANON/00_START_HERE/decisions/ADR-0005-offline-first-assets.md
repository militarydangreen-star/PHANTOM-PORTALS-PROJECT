# ADR-0005: Offline-first — no runtime CDNs; fonts, icons and art ship locally

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
Phantom Portals runs from a portable USB toolkit and in WinPE, often with no network. The component bundle downloaded from the design system points its icon and art URLs at the hosted asset store (`/_blob/…`), which does not exist offline.

## Decision
- Every runtime dependency is a local file: fonts (`30_ASSETS/fonts`), icons (`10_DESIGN_SYSTEM/iconography`), art (`30_ASSETS/brand`, `30_ASSETS/textures`), React 18.3.1 (`components/library/lib`).
- Apps call `configureIcons`, `configureFeatureIcons` and `configureArt` once at start-up with local paths (see `components/library/README.md`). The gallery and the HTML starter show the exact calls.
- No Google Fonts, no CDNs, no telemetry, no remote calls for basic shell rendering. Build tools may download once (npm) and then work offline.

## Consequences
- Pages opened straight from disk (`file://`) work; a few browsers block CSS masks from `file://`, so serve folders with any static server (`python3 -m http.server`) when icons look blank.
