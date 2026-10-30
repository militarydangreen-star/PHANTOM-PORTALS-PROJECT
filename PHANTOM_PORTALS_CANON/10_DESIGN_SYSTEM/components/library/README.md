# Component library

The shipped code, exactly as exported from the design system on 2026-10-29 (version `1793296345-e7e7`).

| File | What |
|---|---|
| `bundle.js` | All components on `window.PhantomPortals` (classic script; needs `window.React` / `window.ReactDOM`) |
| `bundle.css` | `.pp-*` classes for every component; reads variables from `tokens.css` |
| `index.d.ts` | TypeScript types for every prop |
| `src/index.tsx` | Source — copy into an app as `phantom-portals.tsx` (React 18, no other dependencies) |
| `lib/react.production.min.js`, `lib/react-dom.production.min.js` | React 18.3.1 (MIT — see [LICENSE-react.txt](LICENSE-react.txt)) |

## Load order (no build step)
```html
<link rel="stylesheet" href="../tokens/build/index.css">
<link rel="stylesheet" href="bundle.css">
<script src="lib/react.production.min.js"></script>
<script src="lib/react-dom.production.min.js"></script>
<script src="bundle.js"></script>
```

## Offline configuration (required)
The bundle's default icon and art URLs point at the design system's hosted asset store (`/_blob/…`), which does not exist offline ([ADR-0005](../../../00_START_HERE/decisions/ADR-0005-offline-first-assets.md)). Call this once before rendering:

```html
<script src="../../iconography/icons.data.js"></script>   <!-- window.PhantomIconData: the 20 UI icons as data: URIs -->
```
```js
const P = window.PhantomPortals;               // or: import * as P from './phantom-portals'
const abs = (p) => new URL(p, location.href).href;

P.configureIcons(window.PhantomIconData);      // UI icons: data URIs (see the two traps below)
P.configureFeatureIcons((name) => abs(`assets/icons/feature/${name}.svg`));
P.configureArt({
  emblem:   abs('assets/brand/phantom-hero/phantom-emblem-512.png'),
  slash:    abs('assets/textures/brush-strokes/brush-slash.svg'),
  splatter: abs('assets/textures/ink-splash/splatter-ink.svg'),
  halftone: abs('assets/textures/halftone/halftone-fade.svg'),
});
```

**Why UI icons need data URIs.** `Icon` draws its SVG as a CSS mask through an inline custom property, `--icon: url(…)`, used by `.pp-icon` in `bundle.css`. Two traps follow, both found while building the gallery:
1. A relative `url()` inside a custom property resolves against the stylesheet that *uses* it (`bundle.css`), not your page — so `assets/icons/ui/x.svg` 404s. Use absolute URLs.
2. Browsers refuse mask images loaded from `file://` (CORS), so even absolute file URLs fail when a page is opened from disk. Data URIs work everywhere.

`icons.data.js` is generated from `iconography/icons/svg` by `python3 80_TOOLS/build-icon-data.py` (`validate-canon.py` fails if it is stale). Over `http(s)`, ``configureIcons((name) => abs(`assets/icons/ui/${name}.svg`))`` also works. Feature icons and art are plain `<img>` elements, so page-relative paths work for them too; absolute URLs are simply the safe default.

The [gallery](../../gallery/index.html) and the [HTML starter](../../../60_TEMPLATES/html-css-starter/index.html) are working examples, verified from `file://` with no network.

## Updating
Replace these files only from a new design-system export, note the version in the CHANGELOG, and re-run the gallery and `validate-canon.py`.
