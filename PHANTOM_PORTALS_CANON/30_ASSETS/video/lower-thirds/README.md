# Lower third (PP-TPL-002)

`lower-third-1920x1080.svg` — 1920 × 1080, transparent. A matte-black chamfered plate (`surface-inverse`, `chamfer-16`) inside the 5 % title-safe area, a dry-brush crimson spine that breaks out above the plate, the name in white Space Grotesk 600 (18.2:1) and the role in JetBrains Mono 500 `ink-on-inverse-secondary` (8.61:1), with a coordinate-ruler hairline.

Crimson appears only on the spine: crimson text on black is a FORBIDDEN pairing (2.26:1 — [contrast matrix](../../../10_DESIGN_SYSTEM/accessibility/contrast-matrix.md)).

## Motion (for the video editor)
Follows [motion-principles.md](../../../10_DESIGN_SYSTEM/motion-vfx/motion-principles.md):

| Beat | Time | Move |
|---|---|---|
| In | 0–120 ms | Spine wipes up from the bottom (clip reveal) |
| | 80–320 ms | Plate wipes in left → right, ease-out (`cubic-bezier(.2,.8,.2,1)`) |
| | 200–400 ms | Name, then role, fade + 8 px rise |
| Hold | ≥ 4 s | Static — no loops, no glow pulses |
| Out | 250 ms | Everything fades together |

Reduced-motion edit (for accessible exports): cut straight in, fade out.

## Export
Keep transparency: PNG sequence or ProRes 4444 from the editor. As a still, export PNG at 1920 × 1080 with a transparent background.
