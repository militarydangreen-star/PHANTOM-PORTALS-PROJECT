# Colour

Three inks and their working tones. Values are the tokens in [`tokens.json`](../tokens/tokens.json); CSS names are `var(--<group>-<name>)`. Contrast figures are computed in the [contrast matrix](../accessibility/contrast-matrix.md).

## Distribution
| Share of a composition | Role |
|---|---|
| **55–65 %** | White / off-white working surfaces |
| **25–35 %** | Black / charcoal architecture and typography |
| **5–10 %** | Blood crimson focal points |

The proportions guide a whole view, not every component. A terminal is black; a hero is crimson-heavy; the view still adds up.

## Surfaces
| Token | Hex | Use |
|---|---|---|
| `surface-canvas` | `#F6F5F2` | Main white-forward background |
| `surface-primary` | `#FFFFFF` | Cards, forms, command surfaces |
| `surface-sunken` | `#ECEAE6` | Wells, tab-strip ground, table header rows, disabled fills *(derived)* |
| `surface-inverse` | `#151519` | Matte-black architecture: rail, terminals, HUD panels, secondary buttons |
| `surface-inverse-raised` | `#2A2A30` | Raised layer on black: terminal title bar, hovered rail item *(derived)* |
| `surface-crimson-soft` | `#FCE8EB` | Selected rows, active tab ground, annotations |

## Ink (text and marks)
| Token | Hex | Use |
|---|---|---|
| `ink-primary` | `#151519` | Main typography and technical markings |
| `ink-secondary` | `#55525A` | Descriptions, metadata, labels, placeholders |
| `ink-on-inverse` | `#FFFFFF` | Text and icons on black and on crimson |
| `ink-on-inverse-secondary` | `#B4B1B9` | Secondary text on black *(derived)* |

## Accent
| Token | Hex | Use |
|---|---|---|
| `accent-crimson` | `#A0112B` | Primary actions, active indicators, focus ring on light, crimson text on light |
| `accent-crimson-pressed` | `#7E0D22` | Pressed crimson controls *(derived)* |
| `accent-hero` | `#B8143E` | Large crimson artwork: brush cuts, hero fields |
| `accent-electric` | `#EE5367` | Decorative lighting and animation only — laser lines, scan sweeps. **Never text on light** |
| `accent-crimson-on-inverse` | `#FF6B7D` | Active indicators and crimson text **on black**; `accent-crimson` is only 2.26:1 there *(derived)* |

## Borders, status, focus, overlays
| Token | Value | Use |
|---|---|---|
| `border-default` | `#D8D5D6` | Subtle separation between surfaces — never the only boundary of a control |
| `border-control` | `#86828A` | Inputs, toggles, ghost buttons (3.77:1 on white) *(derived)* |
| `border-inverse` | `#6E6A73` | Control edges on black (3.44:1) *(derived)* |
| `status-success` | `#1E6B47` | Verified / complete — always with an icon and a word *(derived)* |
| `status-warning` | `#8A5300` | Caution, degraded, pending review — always with an icon and a word *(derived)* |
| `status-error` | → `accent-crimson` | Errors and failed operations, with the alert icon and a label |
| `focus-ring` | → `accent-crimson` | Keyboard focus on light: 2 px solid, 2 px offset |
| `focus-ring-inverse` | → `ink-on-inverse` | Keyboard focus on black: 2 px solid white, 2 px offset |
| `overlay-glass` | `rgba(255,255,255,.88)` | Glass over artwork; keep alpha ≥ .85 |
| `overlay-scrim` | `rgba(21,21,25,.48)` | Modal scrim |

## Rules
- White dominates working surfaces; black defines architecture; crimson makes focal points.
- One crimson primary action per context. Not every button is crimson.
- No competing neon colours — no blue, green, purple, gold or orange accents. Status colours are muted and never appear without a shape and a word.
- Bright crimson is never small body text. `accent-electric` is never text on light.
- Crimson decoration never obscures functional information.
- On black, crimson text and indicators use `accent-crimson-on-inverse`.
- Verify contrast after transparency, glow or images; text over art sits on `overlay-glass` or a solid panel.
