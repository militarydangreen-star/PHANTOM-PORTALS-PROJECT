# Accessibility

Mandatory, and measured against the tokens as they ship.

## Contrast

| Pair | Ratio |
| --- | --- |
| `phantom-white` on `void` | 18.8:1 |
| `platinum` on `obsidian` | 12.1:1 |
| `phantom-white` on `carbon` | 17.4:1 |
| `platinum` on `graphite` | 10.7:1 |
| `platinum-dim` on `carbon` | 6.0:1 |
| `sovereign-gold` on `carbon` | 8.4:1 |
| `bright-crimson` on `carbon` | 7.0:1 |
| `status-ok` on `carbon` | 8.5:1 |
| `status-warn` on `carbon` | 8.0:1 |

Three tokens sit below 4.5:1 by design, and each says so in its usage note: `platinum-mute` (3.5:1) is an edge and marking ink, `signal-crimson` (3.9:1) draws danger rather than writing it, and `blood-crimson` (2.3:1) is atmosphere.

Operator accents are visual signals, not body-text colours. Every one of the seven clears 4.5:1 on Carbon if used for a short label, but a paragraph set in operator colour is a mistake regardless of its ratio.

## Focus

Every interactive component exposes keyboard focus: a `border-focus` outline in the active operator energy at `focus-offset`, drawn with `outline` so it follows the element's shape. Never glow alone — a focus ring must survive on a surface that is already illuminated.

## Colour independence

Never use colour as the only indicator. Combine it with an icon, label, symbol, pattern, position, text or shape.

This system is unusually exposed here, because operator colour already carries meaning. A red screen is Cybersecurity; a red badge might be a failure; a red edge might be a destructive control. The glyph and the word are what disambiguate them, and they are part of every status component rather than optional decoration.

## Reduced motion

Respect `prefers-reduced-motion`: particle systems, ring rotation, parallax, long transitions, sweeping environmental animation and continuous fog are disabled or reduced to the Minimal mode. Functional feedback remains.
