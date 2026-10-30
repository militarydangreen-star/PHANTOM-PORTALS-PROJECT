# WCAG 2.2 AA checklist

Target: **WCAG 2.2 level AA** on every screen. Tick each line before calling a screen done.

## Perceivable
- [ ] Text contrast ≥ **4.5:1** (≥ 3:1 at 24 px+ or 18.66 px bold) — use only pairings in the [contrast matrix](contrast-matrix.md).
- [ ] UI boundaries, focus indicators and meaningful graphics ≥ **3:1** (`border-control`, not `border-default`).
- [ ] Contrast re-verified after transparency, glow, overlays or images; text over art sits on `overlay-glass` ≥ 0.85 or a solid panel.
- [ ] Status never by colour alone: StatusBadge shapes + words; toggles print ON/OFF; over-threshold meters say HIGH.
- [ ] Icon-only controls have an accessible name; decorative icons and art are `aria-hidden`; meaningful images have alt text.
- [ ] Charts have axis labels, units, legends and a text alternative.
- [ ] Content reflows at 320 px width and 400 % zoom without loss; text resizes to 200 %.

## Operable
- [ ] Everything works by keyboard in a logical order; no keyboard traps; Escape closes drawers, dialogs and tooltips.
- [ ] Focus is always visible: 2 px `focus-ring`, 2 px offset on light; 2 px white on black; never hidden by sticky headers (2.4.11).
- [ ] Pointer targets ≥ **24 × 24 px** (2.5.8); **44 × 44** for primary and touch actions.
- [ ] No drag-only interactions (2.5.7): tab reordering has a keyboard/menu alternative.
- [ ] No flashing more than three times a second; motion can be reduced ([reduced-motion.md](../motion-vfx/reduced-motion.md)).
- [ ] Skip link to the workspace; landmarks (`nav`, `main`, `aside`) in place.

## Understandable
- [ ] Labels are plain words ("Run Diagnostics"); errors say what happened and what to do.
- [ ] Consistent help and navigation across modules (3.2.6); the same component looks and behaves the same everywhere.
- [ ] Destructive or sensitive operations ask for confirmation and say what will change.
- [ ] No redundant re-entry of information the user already gave (3.3.7).

## Robust
- [ ] Semantic HTML first (real `<button>`, `<a>`, `<input>`, `<label>`, `<table>`); ARIA only where HTML has no equivalent.
- [ ] Dynamic updates announced politely (`role="status"`, `aria-live`); errors with `role="alert"`.
- [ ] Works in `forced-colors` (Windows High Contrast): the library removes chamfers and adds system borders.

## Verified how?
Record in the screen's notes: widths tested, keyboard pass, screen reader used (NVDA/Narrator/VoiceOver), automated scan (axe), reduced-motion check. Don't claim a check you didn't run.
