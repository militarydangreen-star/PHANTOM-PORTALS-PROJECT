# Tool tile

Quick-launch tiles for the Command Center: white card, `radius-8`, `depth-1`, a chamfered black icon plate and a mono module ID.

- **Hover:** lifts to `depth-2` and draws a crimson corner bracket (a targeting marker).
- **Current / last used:** `current` gives the tile the `crimson-edge` — one per grid.
- **Feature variant:** `feature` swaps the black plate for the Trash Polka **FeatureIcon** badge (88 px). Use it on launch pages and onboarding, not in dense grids.

```tsx
<ToolTile icon="network" feature title="Network Repair" description="Winsock, DNS and adapter resets."
  meta="MOD-02 · 14 SCRIPTS" href="/tools/network" current={last === 'network'} />
```
Props: `icon` (IconName), `title`, `description`, `meta` (mono line — module ID, counts), `href`, `current`, `onClick`, `feature`.

## Grid
3–4 columns at desktop, 2 at tablet, 1 on phones (compact pairs allowed 480–767). Keep descriptions to one sentence. `meta` states facts ("14 SCRIPTS"), never invented counts.

## FeatureIcon on its own
`<FeatureIcon name="diagnostics" size={72} />` — 56–160 px, for launchers, onboarding and empty states. Never in toolbars, tables or dense UI.
