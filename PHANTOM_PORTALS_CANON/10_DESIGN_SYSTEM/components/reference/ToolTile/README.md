# ToolTile

Quick-launch tiles: white card, `radius-8`, `depth-1`, a chamfered black icon plate and a mono module ID.

Hover lifts to `depth-2` and draws a crimson corner bracket (a targeting marker). The selected/last-used tile gets `crimson-edge` — one per grid.

## React

```tsx
import { ToolTile } from 'phantom-portals'; // or window.PhantomPortals

<ToolTile icon="network" feature title="Network Repair" description="Winsock, DNS and adapter resets."
  meta="MOD-02 · 14 SCRIPTS" href="/tools/network" current={last === 'network'} />
// feature = the Trash Polka badge; omit it for the compact black icon plate.
```

Props: see `ToolTileProps` in `components/index.d.ts`.
