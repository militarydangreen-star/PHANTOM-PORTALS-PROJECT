# Figma — Phantom Portals design system file

[`figma-variables.json`](figma-variables.json) is the build sheet for the Figma library, generated from the tokens:

| Collection | Modes | Contents |
|---|---|---|
| `Primitives` | Value | All 25 canon colours (23 solid, 2 overlays) as `color/<group>/<name>`; scopes empty so designers pick semantics; code syntax `var(--token)` |
| `Color` | Light, Inverse | 37 semantic roles with the **same names as the shadcn CSS variables**, aliasing Primitives; scoped (fills, text, strokes) |
| `Dimension` | Value | 24 sizes in px: space, radius, chamfer, stroke, controls and shell |

Plus 16 text styles (`Phantom/display` … `Phantom/mono-label`; only `eyebrow` is uppercase, as in the library), 6 effect styles (`Phantom/depth-1` … `Phantom/inset-well`), and the v1 component list.

## Status
**Not built yet.** The Figma connector is connected to the owner's claude.ai account but its tools were not enabled for the session that wrote this (2026-10-30). Once enabled, the build follows the `figma-generate-library` workflow: tokens/foundations first, then the component list, each validated against this sheet and the gallery. A second variable mode needs a Figma Professional plan or higher; on a Starter plan the `Inverse` mode becomes a separate collection.
