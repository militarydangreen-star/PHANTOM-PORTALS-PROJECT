# shadcn/ui theme — Phantom Portals

A shadcn/ui `registry:theme` for Tailwind CSS v4, generated from the canon tokens. **Light** (`:root`) is the white-forward product UI. **Dark** (`.dark`) is for inverse *regions* — boot screen, terminal stage, media previews — put the class on the region, not on `<html>`. The product is never a dark-mode site.

## Install in an app
```bash
npx shadcn@latest add ./phantom-portals.json
```
(Run from the app; the path points at this file. shadcn merges the CSS variables into your global stylesheet.) Or replace the app's global CSS with [`globals.css`](globals.css), put [`phantom-fonts.css`](phantom-fonts.css) beside it, and copy `30_ASSETS/fonts/` to `fonts/` next to them, keeping each `OFL.txt`.

## What maps to what
| shadcn role | Light (white-forward) | Dark (inverse region) |
|---|---|---|
| `background` / `foreground` | `surface-canvas` / `ink-primary` | `surface-inverse` / `ink-on-inverse` |
| `card`, `popover` | `surface-primary` | `surface-inverse-raised` |
| `primary` | `accent-crimson` + white | `accent-crimson` + white |
| `secondary` | `surface-inverse` (matte black) + white | `surface-inverse-raised` |
| `muted` / `accent` | `surface-sunken` | `surface-inverse-raised` |
| `destructive` | `status-error` (= crimson) | `accent-crimson-on-inverse` |
| `border` / `input` / `ring` | `border-default` / `border-control` / crimson | `border-inverse` / `border-control` / white |
| `sidebar-*` | the black utility rail | same |
| extra: `success`, `warning`, `selected` | `status-success`, `status-warning`, `surface-crimson-soft` | chips stay light |

`--radius` is `0.5rem` (cards, tiles); buttons, inputs, selects, toggles and badges are squared by an unlayered `[data-slot]` rule (it must stay outside `@layer`, or shadcn's `rounded-md` utilities win). Fonts: `font-sans` Inter, `font-heading` Space Grotesk (applied to `h1`–`h4`), `font-mono` JetBrains Mono.

## Rules that the theme cannot enforce
One crimson primary per view · art never behind controls · status words only from the [status vocabulary](../../components/status-vocabulary.md) · prefer the canon components (`window.PhantomPortals`) where they exist; use shadcn for what the library lacks (dialogs, command palette, forms, data tables) and keep both on these variables.

## Verified
`bash 80_TOOLS/tests/shadcn-theme/run.sh` compiles `globals.css` with Tailwind 4.3.3 and checks the rendered page in Chromium: 18 sampled colours equal the canon hex exactly, controls 0 px, cards 8 px, fonts load, 0 errors. The registry item validates against shadcn's `registry-item.json` schema.
