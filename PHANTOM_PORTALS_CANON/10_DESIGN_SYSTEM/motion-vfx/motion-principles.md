# Motion principles

Motion reinforces interaction, hierarchy, navigation and system activity. Nothing animates because it can.

## Timing
| Moment | Duration | Easing |
|---|---|---|
| Press | 120 ms | ease |
| Hover, focus, open | 160–200 ms | ease-out on entry |
| Panel transitions | 320 ms | ease-out on entry |
| Spinner (loading button) | 800–900 ms per turn | linear |
| Indeterminate scan sweep | 1.6 s per pass | ease-in-out |
| Live HUD arc | 4 s per turn | linear, **only while data is live** |

These are what `bundle.css` ships (`transition: … .12s / .16s / .2s ease`, `@keyframes pp-spin`, `@keyframes pp-scan`).

## Signature motion
- **Laser underline:** the primary button's `accent-electric` underline draws left-to-right on hover (200 ms, `laser-glow`).
- **Scan sweep:** a crimson segment sweeps an indeterminate progress track.
- **HUD arc:** the crimson arc of `HudRing` rotates only while its reading is streaming.
- **Tile lift:** tool tiles rise to `depth-2` and draw a crimson corner bracket on hover.

## Allowed
Feedback on hover, focus, selection, loading and success; panel and page transitions; geometric intersections and scanning that mean "work is happening"; a one-time reveal of hero art.

## Not allowed
Constant ambient movement, looping decoration, flashing or strobing, heavy parallax, glitch effects on text, motion that delays an action, anything that runs more than three times a second.

## Performance
Animate `transform` and `opacity` only. Keep expensive animation outside React render loops. Lazy-load heavy art; scale quality down on weak machines. Canvas/WebGL only for genuine 3D (see [brain-hud.md](brain-hud.md)).
