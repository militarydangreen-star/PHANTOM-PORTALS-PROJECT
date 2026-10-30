# Phantom Portals canon — v1.2.0

**Released 2026-10-30.** The owner's concept sheets of 2026-10-30 are in the canon, and the inventory concept is built on the canon components. Full list: [CHANGELOG](../../00_START_HERE/CHANGELOG.md).

## New
- 5 concept files (PP-CON-001 … 005) with sidecars and measured audits — UNCLEAR until the owner decides the name (C-09) and logo (C-10).
- Artifact inventory screen (DRAFT) built with the canon shell and library: rarity as ink pips + word, one crimson primary, SAMPLE data, *Unknown* instead of invented values.
- Backlog: ItemCard, RarityPips, ItemDetailPanel.

## Verified
- `validate-canon.py` → 11/11.
- Inventory screen in Chromium from `file://` with the network blocked, at 1440 and 390 px: 0 console errors, 0 external requests, no horizontal overflow, 38 icons rendered, exactly one selected item and one primary action, clicking an item updates the detail panel, undescribed items show *Unknown*.
- Concept SVG: no `script`, event handlers, links, `image` or `foreignObject` elements.

## Open
C-09 name, C-10 logo, C-01 shell sizes, C-03 page architecture, C-04 missing v3.1 package, C-06 canvas mockup art. Figma connector still not enabled for the session. GitHub repository still public, so nothing is pushed.

## Verify
```bash
cd PHANTOM_PORTALS_CANON
sha256sum -c 99_RELEASES/v1.2.0/MANIFEST.sha256 --quiet && echo "release intact"
python3 80_TOOLS/validate-canon.py
```
