# 60_TEMPLATES — starting points

| Template | What | Verified 2026-10-29 |
|---|---|---|
| [html-css-starter/](html-css-starter/index.html) | One-file app shell: TabStrip, omnibox row, favorites, UtilityRail, PhantomHero, Omnibox, ToolTiles — wired for offline use (icon data URIs, absolute asset URLs, local fonts and React) with the interim phone CSS | Headless Chromium from `file://` with all non-file requests blocked: 0 console errors, 0 failed or external requests, fonts and all 14 icon masks load, no horizontal scroll at 1440 and 390 px |
| [deck/](deck/index.html) | Six-layout HTML slide deck (title, section, content, numbers, image, close), 1920 × 1080, keyboard navigation, prints one slide per PDF page | 6 slides render with no overflow, arrow-key navigation updates the URL hash, PDF export gives 6 pages, 0 errors |
| [doc/](doc/README.md) | Markdown document template with canon front matter | — (text) |
| [thumbnail/](thumbnail/README.md) | How to make PSD / AFDesign versions of the thumbnail; the editable source is the SVG in `30_ASSETS/video` | — (no PSD/AFDesign included) |

Media templates (thumbnail, lower third, album cover, channel banner) are assets with sidecars, so they live in [`30_ASSETS/video`](../30_ASSETS/video/README.md) and [`30_ASSETS/audio-visual`](../30_ASSETS/audio-visual/README.md).

## Using the HTML templates outside the canon
Both pages reach the canon through paths that start with `../../`. To move one, copy these folders with their relative layout intact, then change the prefix:

```
10_DESIGN_SYSTEM/tokens/build/
10_DESIGN_SYSTEM/components/library/        (bundle.js, bundle.css, lib/)
10_DESIGN_SYSTEM/iconography/icons.data.js
10_DESIGN_SYSTEM/iconography/icons/feature-svg/
30_ASSETS/fonts/  30_ASSETS/brand/  30_ASSETS/textures/  30_ASSETS/hud-geometry/
```

In the starter the prefix is also the `CANON` constant in the script. Keep `OFL.txt` with the fonts and `LICENSE-react.txt` with React.

## Rules the templates already follow
Tokens only, no raw colours · one crimson primary action · art in hero and empty states only · visible crimson focus rings (from the library) · `prefers-reduced-motion` respected · sample content labelled SAMPLE. Keep those when you edit them.
