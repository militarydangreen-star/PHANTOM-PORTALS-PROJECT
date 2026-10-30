# Utility rail

56 px black rail (`rail-width`) for workspace switching.

- Icons in `ink-on-inverse-secondary` (8.6:1) at rest.
- The current workspace gets a raised tile (`surface-inverse-raised`) and a 3 px `accent-crimson-on-inverse` marker — crimson itself is only 2.26:1 on black.
- Every item has an `aria-label` and a tooltip with the same name (`title`); the current one has `aria-current="page"`.
- Focus uses the white `focus-ring-inverse`.
- Separate groups with `'separator'`.

```tsx
<UtilityRail activeId={workspace} onSelect={setWorkspace} label="Workspaces" items={[
  { id: 'cc', label: 'Command Center', icon: 'home-portal' },
  { id: 'diag', label: 'Diagnostics', icon: 'diagnostics' }, 'separator',
  { id: 'settings', label: 'Settings', icon: 'settings' }]} />
```

## Small screens
Below 768 px the rail becomes a **bottom dock of five items** (60 px + safe-area inset): icon over a short label, the active item marked by a crimson top bar **and** crimson text. The dock is not yet a library component — see [BACKLOG.md](BACKLOG.md) and the phone mockup in `40_MOCKUPS/screens/shell/`.
