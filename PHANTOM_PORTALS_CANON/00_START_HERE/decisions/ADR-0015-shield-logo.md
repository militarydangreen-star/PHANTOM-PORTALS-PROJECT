# ADR-0015: The shield mask is the logo; the hooded Phantom is the character

- **Status:** Accepted — 2026-10-31, owner: "C-10, the logo: … adopt the shield" (closes conflict C-10)
- **Date:** 2026-10-31
- **Deciders:** Project owner
- **Canon version:** 1.3.0

## Context
Through 1.2.0 the Ink Protocol hooded reaper played two roles: it was the project's character and also its logo, through the emblem, monogram, app icon and lockup. The owner's concept sheets (PP-CON-002, -003, -004) use a red/white/black **shield mask** as the logo instead. The sheets show it in four forms: full colour, a round badge, black/white and line art.

Those sheets are AI-assisted images. The edges are soft, the reds are off-palette (around `#AC1025`) and the small text is garbled, so they cannot be used as artwork directly.

## Decision
1. **The shield mask is the Polka Portals logo.** It was redrawn as straight-edged geometry on a 200 × 240 grid, mirrored about the centre line, in the three canon inks: ink `#151519`, paper `#F6F5F2` and crimson `#A0112B`. The parts are:
   - a crowned shield with a crimson rim
   - an ink face
   - a paper diamond and brow plates
   - crimson eye bars, fangs and spine
   - a paper V-jaw

   A hairline of ink separates crimson from paper wherever they cross.
   - The source of truth is `80_TOOLS/generators/make-shield-logo.py`. Edit the geometry there, never in the SVGs.
   - Every file is flattened: one path per colour, no masks, filters or strokes. That way they import cleanly into Figma, Canva and print workflows.
2. **The logo family** (`30_ASSETS/brand/`, PP-BRAND-013 … 032):

   | Need | File |
   |---|---|
   | The logo (paper or ink backgrounds) | `shield/polka-shield.svg` |
   | One colour (print, stamps, embossing) | `shield/polka-shield-mono-ink.svg`, `-mono-paper.svg` |
   | Line art (spec sheets, laser) | `shield/polka-shield-outline.svg` |
   | 16–47 px | `shield/polka-shield-small.svg` (no eye or fang marks, thicker rim), `polka-favicon.ico` / `-16/32/48.png` |
   | Round avatar, sticker, medallion | `shield/polka-shield-badge.svg` |
   | App / PWA icon | `shield/polka-app-icon.svg` (full-bleed ink), `-1024.png`, `-180.png` |
   | Name alone | `wordmark/polka-wordmark.svg`, `-inverse.svg` (Space Grotesk 700 outlined, tracking +0.20 em) |
   | Shield + name | `logo/polka-lockup-horizontal.svg`, `-horizontal-inverse.svg`, `-stacked.svg` |
3. **Rules:**
   - Clear space is half the shield's width on every side.
   - The full shield needs at least 48 px. Below that, use the small shield.
   - Three inks only.
   - Never recolour, outline, rotate, stretch, add effects to, or set the wordmark in crimson.
   - Use one shield per surface.
4. **The Phantom stays the character, not the logo.** The emblem masters (PP-BRAND-001, 002) move to `brand/phantom-hero/` next to their PNGs. PhantomHero, Plate 01 and the hero prompts are unchanged.
   - Do not merge the shield and the Phantom into one mark.
   - When both appear on one surface, the shield sits in the chrome and the Phantom is the art.
5. **Retired to 90_ARCHIVE** (`brand-marks-phantom-2026-10-31/`):
   - the PHANTOM PORTALS wordmark and its inverse (PP-BRAND-006, 007)
   - the reaper monogram (003), app icon (004) and lockup (005)

## Consequences
- Every logo slot points at the shield files: gallery header, HTML starter, deck, document template, media templates, brand board and the Canva kit sheet.
- Conflict C-07 (emblem clear space) now concerns character art only. Logo clear space follows rule 3 above.
- The redraw follows the concept but is not a trace:
  - the eye slashes are straight bars
  - the spine is a single blade
  - the colours are canon inks rather than the concept's reds

  Side-by-side renders are in the 1.3.0 release notes.
- **To check:** whether the name is free to register or trademark. That needs a search in the owner's markets, and the canon cannot answer it.

## Sources
- Owner message, 2026-10-31: "C-10, the logo: … adopt the shield."
- Concept sheets PP-CON-002 (asset pack, dark) and PP-CON-004 (Plate 01 specimen sheet), the shield crops used for the redraw.
- Conflict C-10 in the [register](../CANON_REGISTER.md).
