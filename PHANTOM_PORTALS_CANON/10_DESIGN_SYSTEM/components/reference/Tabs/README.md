# Tabs

Section tabs inside a workspace; the selected tab gets a 2px `accent-crimson` underline and full `ink-primary` text.

Use `role="tablist"`, `role="tab"` and `aria-selected`; arrow keys move between tabs. For browser tabs use **TabStrip**.

## React

```tsx
import { Tabs } from 'phantom-portals'; // or window.PhantomPortals

<Tabs label="Device sections" value={tab} onChange={setTab}
  tabs={[{ id: 'overview', label: 'Overview' }, { id: 'hardware', label: 'Hardware' }]} />
```

Props: see `TabsProps` in `components/index.d.ts`.
