# Panels

Mixed geometry by priority: tactical black HUD panels for live readings, calm white cards for answers and content, collapsible modules for dense command groups. Every panel has a distinct title, body and actions, and useful empty, loading, error and success states.

## StatusPanel — black HUD telemetry
`surface-inverse`, `chamfer-16`, Space Grotesk tabular values, mono labels, 4 px meters.
- A metric over threshold turns its meter `accent-crimson-on-inverse` **and** says so in its label ("DISK C: — HIGH").
- Show only real readings; a missing source says **"Unavailable"**.
```tsx
<StatusPanel title="TELEMETRY · LAB-PC-07" metrics={[
  { label: 'CPU', value: `${cpu}%`, percent: cpu },
  { label: disk > 90 ? 'DISK C: — HIGH' : 'DISK C:', value: `${disk}%`, percent: disk, hot: disk > 90 },
  { label: 'GPU', value: 'Unavailable' }]} />
```

## CommandModule — collapsible group
A native `<details>/<summary>`: mono crimson ID, Space Grotesk title, chevron that turns on open. For dense command groups in sidebars and the Command Center.
```tsx
<CommandModule moduleId="MOD-04" title="Recovery Toolkit" defaultOpen>…</CommandModule>
```

## AIResponse — AI answer card
White card, `radius-12`: a mono header naming the model and **where it ran** (LOCAL / REMOTE MODEL) and the source count, the answer in body type with inline `code`, linked sources, then actions.
- Always show sources and the provider honestly. No model configured → say so in the header instead of rendering an empty answer.
```tsx
<AIResponse model="PHANTOM AI" local sources={answer.sources}
  actions={<><Button>Rerun Test</Button><Button variant="ghost">Copy</Button></>}>{answer.text}</AIResponse>
```

## Glass panels
Over artwork, copy sits on `overlay-glass` (alpha ≥ 0.85) or a solid panel. Glass never makes a boundary ambiguous or reduces text clarity; it is not a glassmorphism effect.

## HudRing
See [signature.md](signature.md#hudring) — one headline reading, arc rotating only while live.
