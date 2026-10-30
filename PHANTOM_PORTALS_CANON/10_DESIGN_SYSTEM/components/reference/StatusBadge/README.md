# StatusBadge

Each status has its own shape as well as its own colour: success = circle (`status-success`), warning = triangle (`status-warning`), error = diamond (`status-error`), running = spinning ring, idle = square. The word is always present.

## React

```tsx
import { StatusBadge } from 'phantom-portals'; // or window.PhantomPortals

<StatusBadge status="error">3 errors</StatusBadge>
```

Props: see `StatusBadgeProps` in `components/index.d.ts`.
