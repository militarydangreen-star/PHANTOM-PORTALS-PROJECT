# UtilityRail

56px black rail (`rail-width`) for workspace switching. Icons are `ink-on-inverse-secondary` (8.6:1) at rest; the current workspace gets a raised tile and a 3px `accent-crimson-on-inverse` marker (crimson itself is only 2.26:1 on black).

Every item needs an `aria-label` and a tooltip with the same name; focus uses the white `focus-ring-inverse`.

## React

```tsx
import { UtilityRail } from 'phantom-portals'; // or window.PhantomPortals

<UtilityRail activeId={workspace} onSelect={setWorkspace} items={[
  { id: 'cc', label: 'Command Center', icon: 'home-portal' }, 'separator',
  { id: 'settings', label: 'Settings', icon: 'settings' }]} />
```

Props: see `UtilityRailProps` in `components/index.d.ts`.
