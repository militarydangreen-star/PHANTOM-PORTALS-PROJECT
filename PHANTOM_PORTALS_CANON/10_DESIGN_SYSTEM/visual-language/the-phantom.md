# The Phantom

The project's single character: a hooded reaper, redrawn in the [Ink Protocol](ink-protocol.md) language.

## Anatomy
- Pointed hood; a **faceted, beaked mask** with **crimson eye slits** (electric-lit).
- Layered pauldrons; segmented gauntlets **cupping a crimson singularity** (the portal's core, a spiralling orb).
- Cloak engraved with hatching, **rim-lit from the upper left**; its hem **tatters into ink drips**.
- It stands **inside a precision instrument**: a graduated ring, a dry-brush ensō, an isometric cube frame and a target lock on the orb.
- A **crimson dry-brush cut** crosses the cloak beneath the mask.

## Files ([30_ASSETS/brand](../../30_ASSETS/brand/))
| Need | Use |
|---|---|
| Screens (hero, splash, about) | `phantom-hero/phantom-emblem-512.png` (or `-2048`) |
| Dark surfaces, boot | `phantom-hero/phantom-emblem-inverse-512.png` |
| Print, posters | `logo/phantom-emblem.svg` (vector master, ~1.8 MB) |
| 16–128 px (favicon, tab, rail, docs) | `logo/phantom-monogram.svg` |
| App, launcher, drive icons | `logo/phantom-app-icon.svg` |
| Headers, documents, installers | `logo/phantom-lockup.svg` (min height 40 px) |
| Name alone | `wordmark/phantom-wordmark.svg`, `-inverse.svg` — PHANTOM in ink, PORTALS in crimson, dry-brush underline, graduated rule, mono sublines *OFFLINE-FIRST IT COMMAND CENTER* / *EST. MMXXVI*; text is outlined |
| Key visual | `phantom-hero/plate-01-the-operator.png` (2400 × 3000, prints 8 × 10 in at 300 dpi) |

## Rules
- **One Phantom per surface.** A centrepiece, never repeated across panels.
- **Clear space:** a quarter of the emblem's width on every side.
- Never recolour the figure, stretch it, add a second character, or place the emblem over busy art.
- The PhantomHero component is the only place Trash Polka runs at full strength in the UI.
- Below 96 px use the monogram; below 16 px use text.
- New Phantom artwork (generated or drawn) must match this anatomy; see the [hero prompts](../../20_PROMPT_LIBRARY/image-gen/hero-phantom/).
