# BookmarksBar

32px favorites bar on `surface-primary` under the omnibox. 16px icons, 12px medium labels, hover = `surface-sunken`. Separate groups with a 1px `border-default` rule.

## React

```tsx
import { BookmarksBar } from 'phantom-portals'; // or window.PhantomPortals

<BookmarksBar items={[{ label: 'PowerShell Toolkit', href: '/tools/ps', icon: 'terminal' }, 'separator',
  { label: 'SOP Library', href: '/sop', icon: 'folder' }]} />
```

Props: see `BookmarksBarProps` in `components/index.d.ts`.
