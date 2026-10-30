# Reduced motion

Under `prefers-reduced-motion: reduce`, **everything settles to its end state**. The library does this inside `.pp`:

```css
@media (prefers-reduced-motion: reduce) {
  .pp * { transition: none !important; animation-duration: 0s !important; animation-iteration-count: 1 !important; }
  .pp-progress--indeterminate i { left: 0; width: 100%; opacity: .35; }  /* scan becomes a static faint bar */
}
```

| Effect | Reduced-motion behaviour |
|---|---|
| Laser underline | Appears instantly on hover |
| Scan sweep | Static, faint full-width bar; the label still says WORKING |
| HUD arc | Stops; the value still updates |
| Spinners | Static; `aria-busy` and the verb ("Scanning…") carry the state |
| Panel transitions | Cut, no slide |
| Hero reveal / brain HUD | Static still image |

Rules:
- Every animated effect has a defined still state. Design that state first.
- Never convey information only through motion.
- Wrap all surfaces in `PortalRoot` (`.pp`) so the rule applies; custom animation outside `.pp` must add the same media query.
- Also honour `forced-colors: active`: the library drops chamfer clip-paths and gives buttons a system border.
