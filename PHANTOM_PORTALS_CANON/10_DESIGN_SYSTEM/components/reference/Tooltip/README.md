# Tooltip

Matte-black tooltip (`surface-inverse`), 12px text, an optional mono shortcut. Show on hover **and** focus, hide on Escape. Required for every icon-only control.

## React

```tsx
import { Tooltip } from 'phantom-portals'; // or window.PhantomPortals

<Tooltip content="Reload tab" shortcut="CTRL R">
  <IconButton icon="reload" label="Reload" onClick={reload} />
</Tooltip>
```

Props: see `TooltipProps` in `components/index.d.ts`.
