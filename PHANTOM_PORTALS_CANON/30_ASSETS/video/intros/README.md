# Intros — DRAFT (no files yet)

Register entry CR-046. When an intro is made, it should follow this spec, then go through review and get a sidecar like any other asset.

## Spec
- **Length:** 3–5 s. 1920 × 1080 at 30 or 60 fps; MP4 (H.264) for upload, ProRes master kept outside the canon if large.
- **Beats:** paper ground → graduated ring draws on (hairlines, 600 ms) → one crimson dry-brush cut lands with splatter (single hit, 200 ms) → the shield and wordmark resolve (horizontal lockup) → hold 1 s.
- **Sound:** one hit on the cut; no long riser. Music cleared for use (own work or licensed — record which in the sidecar).
- **Rules:** one Phantom at most (the emblem, not a new character); three inks; no flashing more than 3 times per second (WCAG 2.3.1); a reduced-motion cut that crossfades the final frame.
- **Prompts:** for still frames use [PP-IMG-HERO-002](../../../20_PROMPT_LIBRARY/image-gen/hero-phantom/PP-IMG-HERO-002-wide-hero.md); the motion itself is best built from the canon vectors in a motion tool rather than generated.

Save as `intros/phantom-intro-<variant>.mp4` with a sidecar (`--kind video`), status DRAFT.
