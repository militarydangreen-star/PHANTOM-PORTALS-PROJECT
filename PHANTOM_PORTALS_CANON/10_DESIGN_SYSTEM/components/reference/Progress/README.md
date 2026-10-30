# Progress

A 6px track with a crimson fill. Indeterminate work shows a crimson scan segment sweeping the track; under reduced motion it becomes a static, faint full bar. Always print a percentage or a word.

## React

```tsx
import { Progress } from 'phantom-portals'; // or window.PhantomPortals

<Progress label="Imaging drive" value={copied} max={total} detail={`${pct}% · ${eta} LEFT`} />
<Progress label="Scanning registry" /> {/* no value = indeterminate scan */}
```

Props: see `ProgressProps` in `components/index.d.ts`.
