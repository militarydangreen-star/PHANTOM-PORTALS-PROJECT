# PhantomHero

The one place Trash Polka runs at full strength. The Phantom emblem anchors the right side; a crimson brush cut, an ink splatter and a halftone fade layer behind it. The copy sits on an `overlay-glass` plate so contrast is verified regardless of the art.

Use once per surface (landing, Command Center home). Never repeat the Phantom across panels.

## React

```tsx
import { PhantomHero } from 'phantom-portals'; // or window.PhantomPortals

<PhantomHero eyebrow="OFFLINE-FIRST IT COMMAND CENTER" title="Enter the" accent="Portal"
  description="Diagnose, repair and recover machines from one portable toolkit."
  actions={<Button variant="primary" size="lg" href="/command">Open Command Center</Button>} />
```

Props: see `PhantomHeroProps` in `components/index.d.ts`.
