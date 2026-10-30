# Icon

Renders one of the 20 system icons as a single-ink mask so it takes `currentColor` — black on light surfaces, white or crimson-on-inverse on black.

| Prop | Type | Notes |
|---|---|---|
| `name` | `IconName` | search, home-portal, back, forward, reload, bookmark, terminal, diagnostics, ai-core, tools, folder, network, shield, cpu, cloud, settings, power, alert, check, close |
| `size` | `16 \| 20 \| 24` | default 20 |
| `label` | `string` | give one only when the icon carries meaning on its own; otherwise it is hidden from assistive tech |

The two-tone originals (ink + one crimson accent) are in the **Icons** asset group for menus, docs and tiles.

## React

```tsx
import { Icon, configureIcons } from 'phantom-portals'; // or window.PhantomPortals

<Icon name="shield" />                      {/* decorative, takes currentColor */}
<Icon name="alert" size={16} label="Error" /> {/* meaningful: gets role="img" */}

// Offline builds: copy assets/Icons/*.svg into your app, then once at startup:
configureIcons((name) => `/assets/icons/${name}.svg`);
```

Props: see `IconProps` in `components/index.d.ts`.
