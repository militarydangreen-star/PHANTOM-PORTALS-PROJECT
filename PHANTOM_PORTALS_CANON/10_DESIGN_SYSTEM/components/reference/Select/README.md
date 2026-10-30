# Select

A native `<select>` with a crimson caret. Sharp corners (`radius-0`), 40px, `border-control` boundary. Keep it native for keyboard and screen-reader support.

## React

```tsx
import { Select } from 'phantom-portals'; // or window.PhantomPortals

<Select label="Boot target" hint="Applies on next restart" value={target} onChange={setTarget}
  options={[{ value: 'pe', label: 'Windows PE 11 (x64)' }, { value: 'ventoy', label: 'Ventoy multi-boot' }]} />
```

Props: see `SelectProps` in `components/index.d.ts`.
