# Signature components

## PhantomHero
The **one place Trash Polka runs at full strength** in the UI. The Phantom emblem (512 PNG) anchors the right; a crimson brush cut, an ink splatter and a halftone fade layer behind it; the copy sits on an `overlay-glass` plate so contrast holds whatever the art does.
- Once per surface (landing, Command Center home). Never repeat the Phantom across panels.
- On phones the art drops to the emblem alone; the copy keeps its glass plate.
```tsx
<PhantomHero eyebrow="OFFLINE-FIRST IT COMMAND CENTER" title="Enter the" accent="Portal"
  description="Diagnose, repair and recover machines from one portable toolkit."
  actions={<Button variant="primary" size="lg" href="/command">Open Command Center</Button>} />
```
Offline: `configureArt({ emblem, slash, splatter, halftone })` with local absolute URLs, and `configureIcons(PhantomIconData)` for the UI icons the hero's actions use (see [library/README.md](library/README.md#offline-configuration-required)).

## HudRing
One headline reading: an ink outer ring, a dotted `border-control` scale, a **rotating crimson arc that signals live activity**, the value in Space Grotesk. The arc rotates only while data is actually updating (`live`), and stops under reduced motion. The whole ring has an `aria-label` with the value.
```tsx
<HudRing value={`${health}%`} label="SYSTEM HEALTH" live={streaming} />
```

## Icon
One-ink mask that takes `currentColor` (black on light, white or crimson-on-inverse on black). Sizes 16, 20 (default), 24. Decorative unless `label` is given (then `role="img"`). See [icon rules](../iconography/icon-rules.md).

## FeatureIcon
The Trash Polka badge version of each icon (dry-brush ensō, crimson dab, halftone quarter, tick arc, glyph). 56–160 px; tiles, launchers, onboarding, empty states — never dense UI.

## PortalRoot
Wraps an app or region in `.pp` (or `.pp-inverse` for black regions): sets the font, canvas background, focus-visible ring and reduced-motion rules. Wrap every Polka Portals surface in it.
