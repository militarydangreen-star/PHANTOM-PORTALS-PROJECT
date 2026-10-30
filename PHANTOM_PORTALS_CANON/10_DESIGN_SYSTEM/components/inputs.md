# Inputs

All inputs stay native for keyboard and screen-reader support; sharp corners (`radius-0`), 40 px, `border-control` boundaries.

## Tabs
Section tabs inside a workspace (`role="tablist"`). The selected tab gets a 2 px `accent-crimson` underline and full `ink-primary` text; arrow keys move between tabs. For browser tabs use TabStrip.
```tsx
<Tabs label="Device sections" value={tab} onChange={setTab}
  tabs={[{ id: 'overview', label: 'Overview' }, { id: 'hardware', label: 'Hardware' }]} />
```

## Toggle
A checkbox with `role="switch"`. On: crimson track, white knob. Off: white track, `border-control`. **Always print the state as a word** — ON / OFF / NOT CONFIGURED.
```tsx
<Toggle label="Offline mode" checked={offline} onChange={setOffline} />
<Toggle label="Cloud sync" disabled stateText="NOT CONFIGURED" />
```

## Slider
A range input: crimson filled track, a **black diamond thumb** (the isometric motif), the value echoed in a mono `<output>`; optional tick labels.
```tsx
<Slider label="Scan depth" min={1} max={5} value={depth} onChange={setDepth}
  format={(v) => `Level ${v}`} ticks={['1 QUICK', '3', '5 FORENSIC']} />
```

## Select
A native `<select>` with a crimson caret and optional hint.
```tsx
<Select label="Boot target" hint="Applies on next restart" value={target} onChange={setTarget}
  options={[{ value: 'pe', label: 'Windows PE 11 (x64)' }, { value: 'ventoy', label: 'Ventoy multi-boot' }]} />
```

Text fields use the Omnibox styling until a dedicated TextField lands ([backlog](BACKLOG.md)).
