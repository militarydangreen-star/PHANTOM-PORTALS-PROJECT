# StatusPanel

A black HUD panel (`surface-inverse`, `chamfer-16`) for live telemetry: Space Grotesk tabular numbers, mono labels, 4px meters.

A metric over threshold switches its meter to `accent-crimson-on-inverse` **and** says so in its label ("HIGH"). Show only real readings; when a source is unavailable, say "Unavailable" instead of a placeholder number.

## React

```tsx
import { StatusPanel } from 'phantom-portals'; // or window.PhantomPortals

<StatusPanel title="TELEMETRY · LAB-PC-07" metrics={[
  { label: 'CPU', value: `${cpu}%`, percent: cpu },
  { label: disk > 90 ? 'DISK C: — HIGH' : 'DISK C:', value: `${disk}%`, percent: disk, hot: disk > 90 },
  { label: 'GPU', value: 'Unavailable' }]} />
```

Props: see `StatusPanelProps` in `components/index.d.ts`.
