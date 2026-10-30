# Logos

The Phantom emblem, the primary brand anchor.

| File | Treatment |
| --- | --- |
| `ChatGPT Image Sep 19, 2026, 10_00_53 PM.png` | **Hero seal** — the circular mark: hooded figure, concentric gold rings, crimson energy arcs, horizontal targeting ticks, and the THE PHANT&#216;M wordmark |
| `ChatGPT Image Sep 19, 2026, 10_01_13 PM.png` | **Hero composition** — the figure at full height before the portal ring, with the PHANTOM &#183; PORTALS lockup and the brand lines |

Worth renaming to `phantom-emblem-seal.png` and `phantom-hero-lockup.png` so the group reads as a brand asset set rather than an export folder.

Both are raster. The **Glyph** and **Watermark** treatments are vector and live in `components/PhantomEmblem`, so they take `sovereign-gold`, `highlight-gold` or operator energy from the token set rather than being fixed images.

## The ink

Gold is `sovereign-gold` with `highlight-gold` on the lit edges and `deep-gold` in the recesses. The energy inside the ring is `blood-crimson` rising to `signal-crimson` at the brightest arcs. The ground is `void`. This is the one place in the system where crimson is atmospheric rather than a danger signal, and it is contained inside the emblem.

## Rules

- The hero seal is never recoloured, cropped through the ring, or placed on a light ground.
- Never a large glowing hero emblem behind text. Behind content it is the Watermark treatment — vector, very low opacity.
- Below about 32px both raster treatments are illegible. Use the Glyph.
- The substituted glyph in **PHANT&#216;M** is the mark itself. It is never replaced with a plain O.

## Still to draw

A vector wordmark lockup — THE PHANT&#216;M, PHANTOM &#183; PORTALS, in horizontal and stacked arrangements — so the lockup can be placed at any size without shipping a bitmap. After that, the module icon family from Asset Pack board 05.
