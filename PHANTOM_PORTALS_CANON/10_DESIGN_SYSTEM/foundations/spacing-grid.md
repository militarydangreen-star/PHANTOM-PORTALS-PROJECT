# Spacing and grid

## Spacing scale (4 px base)
| Token | Value | Use |
|---|---|---|
| `space-4` | 4 | Icon-to-text in compact chips; hairline gaps |
| `space-8` | 8 | Compact HUD internal spacing; gap between related controls |
| `space-12` | 12 | Compact HUD padding; list row gap |
| `space-16` | 16 | Panel padding (minimum); grid gutter |
| `space-24` | 24 | Panel padding (comfortable); card gap; desktop grid gutter |
| `space-32` | 32 | Separation between major sections (minimum) |
| `space-48` | 48 | Separation between major sections (generous); hero padding |
| `space-64` | 64 | Hero and page-level breathing room |

Panels: 16–24 padding. Major sections: 32–48 apart. Compact HUD elements: 8–12 inside. Never invent in-between values; if 16 is too tight and 24 too loose, the layout is wrong, not the scale.

## Grid
- **12 columns** at desktop (≥ 1024), 8 at tablet, 4 on phones — see [breakpoints](breakpoints.md) for gutters.
- Prefer **asymmetric splits** inside the stable grid: 8/4 and 7/5 (the Command Center's work surfaces and sidebar).
- Maximum content width **1680 px** at 2xl; beyond that, open space is intentional.
- Data panels need about **280 px** usable width; do not force cramped multi-column arrangements.
- Code, terminals and wide tables scroll inside their own region, never the whole page.

## Command Center rhythm
Hero band → command field → quick-launch tiles → status row → work surfaces, separated by `space-32`–`space-48`. Details in [browser-shell.md](../components/browser-shell.md#command-center-home).
