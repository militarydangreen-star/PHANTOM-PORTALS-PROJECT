# Omnibox

The omnibox is the single entry point for search and commands — the browser-shell address bar and the Command Center's central AI/search field share it.

- 44px tall (`omnibox-height`), white field, `border-control` boundary, `inset-well` depth.
- Focus: the boundary becomes a 2px `accent-crimson` inset ring and a crimson spine draws on the left edge.
- Prefix `>` switches to command mode; show the shortcut in a `kbd`.
- Placeholder text uses `ink-secondary` (7.66:1) so it stays readable.
- Consumer provides: the `<label>` text (visually hidden is fine), results list, and keyboard handling.

## React

```tsx
import { Omnibox } from 'phantom-portals'; // or window.PhantomPortals

<Omnibox placeholder="Search tools, docs, machines — or type > for commands"
  shortcut="CTRL K" onSubmit={(q) => q.startsWith('>') ? runCommand(q.slice(1)) : search(q)} />
```

Props: see `OmniboxProps` in `components/index.d.ts`.
