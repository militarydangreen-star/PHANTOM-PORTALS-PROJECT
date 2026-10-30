# Slider

A native range input. The filled part of the track is `accent-crimson`, the thumb is a black diamond (the isometric motif), and the current value is echoed in an `<output>` in mono.

Consumer sets `--fill` to the percentage as the value changes.

## React

```tsx
import { Slider } from 'phantom-portals'; // or window.PhantomPortals

<Slider label="Scan depth" min={1} max={5} value={depth} onChange={setDepth}
  format={(v) => `Level ${v}`} ticks={['1 QUICK', '3', '5 FORENSIC']} />
```

Props: see `SliderProps` in `components/index.d.ts`.
