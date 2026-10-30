# Notification

Toasts: white card, `radius-8`, `depth-2`, a 4px tone edge, an icon in the tone colour, a bold title and a secondary line. Errors use `role="alert"`; everything else `role="status"`. Errors stay until dismissed.

## React

```tsx
import { Notification } from 'phantom-portals'; // or window.PhantomPortals

<Notification tone="error" title="Driver rollback failed" onDismiss={dismiss}>
  Access denied. Run as administrator.
</Notification>
```

Props: see `NotificationProps` in `components/index.d.ts`.
