<!-- canon-lint: allow-retired -->
# Do and don't

## Do
- Keep substantial white and off-white working surfaces.
- Use black for architecture: tab strip, rail, terminals, HUD panels, secondary buttons.
- Spend crimson on one focal point, the primary action and active states.
- Pair each Trash Polka mark with a precision mark.
- Put text over art on `overlay-glass` (≥ 0.85) or a solid panel.
- Give every status a shape and a word — circle ok, triangle warn, diamond error, ring running, square idle.
- Use the real components; inherit tokens instead of hard-coding values.
- Show honest states: "Unavailable", "Not configured", "No model configured".
- Ship fonts, icons and art locally.
- Respect `prefers-reduced-motion` and keep visible keyboard focus everywhere.

## Don't
- Default to an all-dark interface.
- Use gold, purple, neon green, cyan, orange or any operator colour; use Cinzel, Montserrat or IBM Plex Mono.
- Add a second character, mascots, operator personas or esports styling.
- Put splatter, halftone or brush texture behind tables, terminals, forms, search results or body text.
- Make every button crimson or every border glow.
- Use `accent-electric` for text on light, or `accent-crimson` for text on black.
- Use gradient washes, glassmorphism demos, heavy parallax, strobing or constant ambient motion.
- Invent telemetry, sessions or command output to make a panel look busy.
- Use emoji as icons.
- Trace, sample or ship third-party Trash Polka art.

## Voice
Terse, operator-grade and honest.

| Do | Don't |
|---|---|
| Run Diagnostics | Let's check your system! 🚀 |
| 3 errors | Something went wrong |
| Unavailable | — (a fake number) |
| Disk C: — HIGH | Disk C: (red only) |
| Copy user data off first, then run `chkdsk C: /r`. | You may want to consider backing up. |

Mono is for things a machine says; Inter is for things a person reads. Labels are plain words, not glyphs to decode.
