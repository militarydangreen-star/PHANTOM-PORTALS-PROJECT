# TabStrip

The browser tab strip sits on `surface-inverse` (black architecture). The active tab opens onto the white canvas below it, marked with a 2px crimson top edge and a chamfered top-right corner.

Preserve the familiar model: middle-click closes, Ctrl+T opens, drag reorders. 40px tall (`tabstrip-height`). Put the title in `.pp-btab__title` so it truncates with an ellipsis.

## React

```tsx
import { TabStrip } from 'phantom-portals'; // or window.PhantomPortals

<TabStrip tabs={tabs} activeId={active} onSelect={setActive}
  onClose={(id) => setTabs(tabs.filter((t) => t.id !== id))} onNew={openTab} />
```

Props: see `TabStripProps` in `components/index.d.ts`.
