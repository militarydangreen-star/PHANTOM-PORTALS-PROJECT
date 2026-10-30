# Buttons

Buttons carry the action hierarchy: **one crimson primary per context**, matte-black secondary for strong but non-critical actions, ghost for everything else.

| Variant | Use | Look |
|---|---|---|
| `primary` | The single most important action in a view | Chamfered crimson fill; hover lifts to `accent-hero` and draws the `accent-electric` laser underline; press `accent-crimson-pressed` |
| `secondary` (default) | Strong secondary actions — Open Terminal, Launch Tool | `surface-inverse` fill |
| `ghost` | Tertiary actions | `border-control` outline (3.77:1) |
| `size="lg"` | Primary and touch actions | 44 px (`control-lg`); default 40 px |
| `IconButton` | Icon-only, 40 × 40 (`sm` 32) | Needs `label`; `pressed` shows the crimson-soft selected state |

## States
Default · hover · focus (2 px `focus-ring`, 2 px offset — the chamfer sits on `::before` so the ring is never clipped) · active (1 px press) · loading (`aria-busy="true"` + spinner; keep the label, change the verb: "Scanning…") · disabled (`surface-sunken` fill, `ink-secondary` label 6.4:1).

```tsx
<Button variant="primary" size="lg" icon="diagnostics" onClick={run}>Run Diagnostics</Button>
<Button variant="secondary" icon="terminal">Open Terminal</Button>
<Button variant="ghost" href="/reports">Export Report</Button>
<Button variant="primary" loading>Scanning…</Button>
<IconButton icon="bookmark" label="Bookmark" pressed={saved} onClick={toggle} />
```
`href` renders a link. Labels are verb-first. Destructive actions are distinguished by wording and confirmation, not a new colour.
