# Typography

Three families, three jobs. Fonts ship locally ([ADR-0002](../../00_START_HERE/decisions/ADR-0002-font-stack.md)); `tokens/build/fonts.css` declares them and `typography.css` provides one class per style.

| Family | Token | Job | Weights shipped |
|---|---|---|---|
| **Space Grotesk** | `--font-heading` | Page titles, section headings, statistics, eyebrows | 500, 600, 700 |
| **Inter** | `--font-sans` | Body, navigation, controls — things a person reads | 400, 500, 600 |
| **JetBrains Mono** | `--font-mono` | Terminal output, identifiers, timestamps, telemetry — things a machine says | 400, 500 |

## Scale
| Style | Size / line | Weight | Tracking | Family | Use |
|---|---|---|---|---|---|
| `display` | 56 / 60 | 700 | −0.02em | heading | Hero headline only, one per screen (spec 48–64) |
| `h1` | 36 / 44 | 700 | −0.01em | heading | Page titles (spec 32–40) |
| `h2` | 26 / 34 | 600 | 0 | heading | Section headings (spec 24–28) |
| `h3` | 20 / 28 | 600 | 0 | heading | Panel and card titles (spec 18–20) |
| `stat` | 40 / 44 | 600 | −0.01em | heading | Prominent statistics — `font-variant-numeric: tabular-nums` |
| `eyebrow` | 12 / 16 | 600 | 0.14em | heading | Uppercase section markers above headings |
| `body-lg` | 16 / 26 | 400 | 0 | sans | Lead paragraphs |
| `body` | 15 / 24 | 400 | 0 | sans | Default reading text (spec 14–16) |
| `body-sm` | 14 / 22 | 400 | 0 | sans | Dense panels, table cells |
| `label` | 14 / 20 | 500 | 0 | sans | Form labels, navigation, tabs |
| `button` | 14 / 20 | 600 | 0.01em | sans | Button labels |
| `label-sm` | 12 / 16 | 600 | 0.02em | sans | Badges, column headers, compact controls |
| `caption` | 12 / 16 | 400 | 0 | sans | Helper text, tooltips |
| `mono` | 13 / 20 | 400 | 0 | mono | Terminal output, code |
| `mono-sm` | 12 / 18 | 400 | 0 | mono | Timestamps, command identifiers, paths |
| `mono-label` | 11 / 16 | 500 | 0.06em | mono | Telemetry labels, HUD coordinates |

Use it: `font: var(--text-h1)` (shorthand, no letter-spacing) or `class="h1"` (includes letter-spacing).

## Rules
- Clear hierarchy, restrained tracking. Uppercase only for eyebrows, mono labels and small UI labels — never paragraphs.
- Never distressed or decorative fonts for functional information. Grunge belongs to the artwork, not the text.
- Mono is for machine output; Inter is for human reading. Don't set prose in mono.
- Numbers that change (telemetry, stats, tables) use tabular figures.
- Body text stays ≥ 14 px; technical metadata ≥ 11 px and only in mono-label style.
- Labels are plain words: "Run Diagnostics", "3 errors", "Unavailable".
