# Button

Buttons carry the action hierarchy: one crimson primary per context, matte-black secondary for strong but non-critical actions, and ghost for everything else.

## Variants
| Class | Use |
|---|---|
| `pp-btn pp-btn--primary` | The single most important action in a view (spec: never make every button crimson). Chamfered crimson fill; hover lifts to `accent-hero` and draws an `accent-electric` laser underline. |
| `pp-btn pp-btn--secondary` | Strong secondary actions — Open Terminal, Launch Tool. `surface-inverse` fill. |
| `pp-btn pp-btn--ghost` | Tertiary actions. `border-control` (3.77:1) outline. |
| `pp-btn--lg` | 44px for primary/touch actions (`control-lg`); default is 40px (`control-md`). |
| `pp-iconbtn` | 40×40 icon-only control; needs `aria-label`. `aria-pressed=true` shows the crimson-soft selected state. |

## States
Default, hover, focus (2px `focus-ring`, 2px offset — the chamfer sits on a `::before` so the ring is never clipped), active (1px press, `accent-crimson-pressed`), loading (`aria-busy="true"` + a `.pp-spin` child; keep the label, change the verb), disabled (`disabled` or `aria-disabled="true"`; `surface-sunken` fill, `ink-secondary` label 6.4:1).

## Consumer provides
A real `<button>` or `<a>`, a verb-first label, and icons from the Icons group via `.pp-icon` (`--icon:url(...)`).

## React

```tsx
import { Button, IconButton } from 'phantom-portals'; // or window.PhantomPortals

<Button variant="primary" size="lg" icon="diagnostics" onClick={run}>Run Diagnostics</Button>
<Button variant="secondary" icon="terminal">Open Terminal</Button>
<Button variant="ghost" href="/reports">Export Report</Button>
<Button variant="primary" loading>Scanning…</Button>
<IconButton icon="bookmark" label="Bookmark" pressed={saved} onClick={toggle} />
```

Props: see `ButtonProps` in `components/index.d.ts`.
