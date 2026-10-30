# FeatureIcon

Large illustrative icon: the Trash Polka badge version of each system icon (dry-brush ensō, crimson dab, halftone, tick arc, glyph).

| Prop | Type | Notes |
|---|---|---|
| `name` | `IconName` | same 20 names as Icon |
| `size` | `number` | px, default 64; use 56–160 |
| `label` | `string` | only when it carries meaning on its own |

Use for tool tiles, launchers, onboarding and empty states. Never in toolbars, tables or dense UI; use Icon there.

## React

```tsx
import { FeatureIcon, configureFeatureIcons } from 'phantom-portals'; // or window.PhantomPortals

<FeatureIcon name="diagnostics" size={72} />

// Offline builds: copy assets/Feature Icons/*.svg into your app, then once at startup:
configureFeatureIcons((name) => `/assets/feature-icons/${name}.svg`);
```

Props: see `FeatureIconProps` in `components/index.d.ts`.
