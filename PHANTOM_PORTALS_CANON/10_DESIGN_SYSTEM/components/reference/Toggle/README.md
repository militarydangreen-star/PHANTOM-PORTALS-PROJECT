# Toggle

A native checkbox with `role="switch"`. On = `accent-crimson` track with a white knob; off = white track with a `border-control` boundary.

Always print the state as a word (ON / OFF / NOT CONFIGURED) beside the label — never colour alone.

## React

```tsx
import { Toggle } from 'phantom-portals'; // or window.PhantomPortals

<Toggle label="Offline mode" checked={offline} onChange={setOffline} />
<Toggle label="Cloud sync" disabled stateText="NOT CONFIGURED" />
```

Props: see `ToggleProps` in `components/index.d.ts`.
