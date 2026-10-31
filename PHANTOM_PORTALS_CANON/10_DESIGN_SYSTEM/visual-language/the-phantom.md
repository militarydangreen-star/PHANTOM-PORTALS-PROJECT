# The Phantom

The project's single character: a hooded reaper, redrawn in the [Ink Protocol](ink-protocol.md) language.

## Anatomy
- Pointed hood; a **faceted, beaked mask** with **crimson eye slits** (electric-lit).
- Layered pauldrons; segmented gauntlets **cupping a crimson singularity** (the portal's core, a spiralling orb).
- Cloak engraved with hatching, **rim-lit from the upper left**; its hem **tatters into ink drips**.
- It stands **inside a precision instrument**: a graduated ring, a dry-brush ensō, an isometric cube frame and a target lock on the orb.
- A **crimson dry-brush cut** crosses the cloak beneath the mask.

## Files ([30_ASSETS/brand/phantom-hero](../../30_ASSETS/brand/phantom-hero/))
The Phantom is the **character**, not the logo. The logo is the shield mask: see [logo.md](logo.md) ([ADR-0015](../../00_START_HERE/decisions/ADR-0015-shield-logo.md)). The reaper monogram, app icon, lockup and PHANTOM PORTALS wordmark were retired on 2026-10-31 ([90_ARCHIVE](../../90_ARCHIVE/brand-marks-phantom-2026-10-31/README.md)).

| Need | Use |
|---|---|
| Screens (hero, splash, about) | `phantom-emblem-512.png` (or `-2048`) |
| Dark surfaces, boot | `phantom-emblem-inverse-512.png` |
| Print, posters | `phantom-emblem.svg`, `phantom-emblem-inverse.svg` (vector masters, ~1.8 MB) |
| Key visual | `plate-01-the-operator.png` (2400 × 3000, prints 8 × 10 in at 300 dpi) |

## Rules
- **One Phantom per surface.** A centrepiece, never repeated across panels.
- **Clear space:** a quarter of the emblem's width on every side.
- Never recolour the figure, stretch it, add a second character, or place the emblem over busy art.
- The PhantomHero component is the only place Trash Polka runs at full strength in the UI.
- Below 96 px the figure stops reading: leave it out and let the shield carry the brand.
- Never use the Phantom as the logo or merge it with the shield. With both on one surface, the shield sits in the chrome and the Phantom is the art.
- New Phantom artwork (generated or drawn) must match this anatomy; see the [hero prompts](../../20_PROMPT_LIBRARY/image-gen/hero-phantom/).
