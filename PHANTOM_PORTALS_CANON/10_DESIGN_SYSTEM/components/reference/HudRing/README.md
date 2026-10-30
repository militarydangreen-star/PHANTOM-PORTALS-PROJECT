# HudRing

A HUD ring for one headline reading: an ink outer ring, a dotted `border-control` scale, a rotating crimson arc that signals live activity, and the value in Space Grotesk.

The arc rotates only while data is actually updating; it stops under reduced motion. Give the whole ring an `aria-label` with the value.

## React

```tsx
import { HudRing } from 'phantom-portals'; // or window.PhantomPortals

<HudRing value={`${health}%`} label="SYSTEM HEALTH" live={streaming} />
```

Props: see `HudRingProps` in `components/index.d.ts`.
