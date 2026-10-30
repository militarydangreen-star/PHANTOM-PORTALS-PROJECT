# Feedback

## StatusBadge
Each status has its own **shape**, colour and word:

| status | Shape | Colour |
|---|---|---|
| `ok` | circle | `status-success` |
| `warn` | triangle | `status-warning` |
| `error` | diamond | `status-error` (crimson) |
| `run` | spinning ring | ink (`role="status"`) |
| `idle` | square | ink-primary (the base badge colour — `bundle.css` has no idle modifier) |

`<StatusBadge status="error">3 errors</StatusBadge>` — the word is always present.

## Notification (toast)
White card, `radius-8`, `depth-2`, a 4 px tone edge, an icon in the tone colour, a bold title and a secondary line. Errors use `role="alert"` and stay until dismissed; everything else `role="status"`.
```tsx
<Notification tone="error" title="Driver rollback failed" onDismiss={dismiss}>Access denied. Run as administrator.</Notification>
```
Tones: `ok`, `warn`, `error`, `info` (default icons: check, alert, alert, cloud).

## Progress
A 6 px track with a crimson fill. **Always print a percentage or a word.** Without `value` it is indeterminate: a crimson scan segment sweeps the track (1.6 s); under reduced motion it becomes a static, faint full bar.
```tsx
<Progress label="Imaging drive" value={copied} max={total} detail={`${pct}% · ${eta} LEFT`} />
<Progress label="Scanning registry" />
```

## Tooltip
Matte-black (`surface-inverse`), 12 px text, optional mono shortcut. Shows on hover **and** focus, hides on Escape, links to its trigger with `aria-describedby`. Required for every icon-only control.
```tsx
<Tooltip content="Reload tab" shortcut="CTRL R"><IconButton icon="reload" label="Reload" onClick={reload} /></Tooltip>
```
