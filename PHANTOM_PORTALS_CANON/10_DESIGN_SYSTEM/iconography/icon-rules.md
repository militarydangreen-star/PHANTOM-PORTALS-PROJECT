# Icon rules

## UI icons (`icons/svg/`)
20 original icons on a **24 px keyline grid** with 2 px padding: **1.5 px square-capped, mitred** `#151519` strokes and **exactly one `#A0112B` accent** on the part that acts (the lens handle, the cursor, the active node).

Set: `search` · `home-portal` · `back` · `forward` · `reload` · `bookmark` · `terminal` · `diagnostics` · `ai-core` · `tools` · `folder` · `network` · `shield` · `cpu` · `cloud` · `settings` · `power` · `alert` · `check` · `close`

- In the interface they render as **one-ink masks** through `<Icon>` / `.pp-icon`, taking `currentColor`: ink on light; `ink-on-inverse-secondary` at rest on black; white or `accent-crimson-on-inverse` when active.
- The two-tone files are for documentation, menus and tiles on light surfaces.
- Sizes 16, 20 (default), 24. Below 16 px use a text label.
- Every icon-only control has an accessible name and a tooltip.
- **Never emoji.**

## Feature icons (`icons/feature-svg/`)
The same 20 glyphs as **Trash Polka badges** on a 160 px artboard: a dry-brush ink ensō, a crimson dry-brush dab, a halftone quarter-disc and a graduated tick arc, with the glyph at 3× in ink + crimson. Each badge is composed individually. Use at **56–160 px** for tool tiles (`<ToolTile feature>`), launchers, onboarding, empty states and docs; never in toolbars, tables or dense UI. Each file is ~200 KB — fine for launch screens, heavy for long lists.

## Adding an icon
1. Draw on the 24 px grid, 2 px padding, 1.5 px strokes, square caps, mitred joins, one crimson accent.
2. Draw the matching feature badge.
3. Save to `icons/svg/<name>.svg` and `icons/feature-svg/<name>.svg`, copy both to `30_ASSETS/icons/` (the validator checks they match), write sidecars (`index-assets.py --new`), add the name to `IconName` in the component source.
4. Rebuild indexes and run the validator.

Copies in `30_ASSETS/icons/ui` and `30_ASSETS/icons/feature` mirror these folders for the asset catalog; this folder is the source.
