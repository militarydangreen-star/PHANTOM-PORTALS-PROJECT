# Design system — White / Crimson / Black

**White-Forward Phantom Edition · tokens v2 · canon 1.1.0**

Trash Polka × isometric cybernetic HUD × premium command center. The system makes a functional technical workstation feel like a premium piece of interactive digital art — not a corporate dashboard, not a gaming interface.

| Folder | What is in it |
|---|---|
| [tokens/](tokens/tokens.json) | `tokens.json` (W3C DTCG — the source) and `build/` (generated CSS, TS, Tailwind) |
| [foundations/](foundations/color.md) | [colour](foundations/color.md) · [typography](foundations/typography.md) · [spacing & grid](foundations/spacing-grid.md) · [breakpoints](foundations/breakpoints.md) · [elevation & borders](foundations/elevation-borders.md) |
| [visual-language/](visual-language/trash-polka-rules.md) | [Trash Polka](visual-language/trash-polka-rules.md) · [isometric HUD](visual-language/isometric-hud-rules.md) · [composition ratios](visual-language/composition-ratios.md) · [do / don't](visual-language/do-dont.md) · [the Phantom](visual-language/the-phantom.md) · [Ink Protocol](visual-language/ink-protocol.md) |
| [components/](components/README.md) | Usage docs per family, the [library](components/library/README.md) (React bundle + types + source), [reference cards](components/reference/README.md), [backlog](components/BACKLOG.md) |
| [motion-vfx/](motion-vfx/motion-principles.md) | [principles](motion-vfx/motion-principles.md) · [reduced motion](motion-vfx/reduced-motion.md) · [brain HUD](motion-vfx/brain-hud.md) |
| [iconography/](iconography/icon-rules.md) | Rules, 20 UI icons (`icons/svg`), 20 feature icons (`icons/feature-svg`) |
| [accessibility/](accessibility/wcag-2.2-aa-checklist.md) | [WCAG 2.2 AA checklist](accessibility/wcag-2.2-aa-checklist.md) · [focus states](accessibility/focus-states.md) · [contrast matrix](accessibility/contrast-matrix.md) (computed) |
| [gallery/](gallery/index.html) | Offline gallery: tokens, type, icons, art and every live component |
| [adapters/](adapters/README.md) | Generated shadcn/ui theme (Tailwind v4), Figma variable spec, Canva Brand Kit sheet, and their contrast report |
| [_source/](_source/claude-design-system/README.md) | Read-only snapshot of the design system as imported (for parity checks) |

## Principles

1. **White is the canvas.** Use substantial white and off-white surfaces. Never default to an entirely dark interface.
2. **Black creates structure.** Deep matte black for navigation, technical framing, typography and high-contrast panels.
3. **Crimson communicates intent.** Blood red for active states, critical actions, emphasis and signature effects.
4. **Chaos meets precision.** Expressive Trash Polka balanced by disciplined geometric layouts.
5. **The Phantom is iconic.** One hooded Phantom — no competing characters or operator personas.
6. **Function precedes decoration.** Every screen stays readable, navigable and operational.
7. **Design for depth.** Layered panels, wireframes, fine technical lines, directional geometry, controlled dimension.
8. **Motion has purpose.** Animation reinforces interaction, hierarchy, navigation and system activity.
9. **Maintain visual continuity.** Every module belongs to one coherent system.
10. **Preserve existing work.** Continue, improve and integrate before replacing verified components or functionality.
11. **Premium over excessive.** No cyberpunk clichés, overwhelming glow, gratuitous gradients or decorative noise.
12. **Performance is mandatory.** Visuals never cost responsiveness, accessibility or offline function.

## Using it

### CSS only
```html
<link rel="stylesheet" href="10_DESIGN_SYSTEM/tokens/build/index.css">          <!-- fonts + tokens + type classes -->
<link rel="stylesheet" href="10_DESIGN_SYSTEM/components/library/bundle.css">   <!-- .pp-* component classes -->
<div class="pp"> … <button class="pp-btn pp-btn--primary">Run Diagnostics</button> … </div>
```
`fonts.css` resolves font files relative to `tokens/build/`. If you copy the build elsewhere, copy `30_ASSETS/fonts/` with it and adjust the three-level `../../../30_ASSETS/fonts` path, or rebuild with a different `fontsBase` in `tokens/style-dictionary.config.mjs`.

### React (recommended for apps)
Copy `components/library/src/index.tsx` into the app as `phantom-portals.tsx` (React 18, no other dependencies), load `index.css` and `bundle.css` once, wrap the app in `<PortalRoot>`, and point icons and art at local files — see [components/library/README.md](components/library/README.md).

### No build step
Load `lib/react.production.min.js`, `lib/react-dom.production.min.js` and `bundle.js` as classic scripts; components are on `window.PhantomPortals`. The [gallery](gallery/index.html) and the [HTML starter](../60_TEMPLATES/html-css-starter/index.html) do exactly this.

### TypeScript, Tailwind, design tools
- `tokens/build/tokens.ts` — typed nested object, `TokenName` union, `cssVar(name)`.
- `tokens/build/tailwind.tokens.js` — Tailwind v3 preset; `tailwind.theme.css` — Tailwind v4 `@theme`.
- `tokens/tokens.json` — import into any DTCG-aware tool (Figma Tokens Studio, Penpot, Style Dictionary, Terrazzo).

## Changing it
Edit `tokens/tokens.json` → `80_TOOLS/build-tokens.sh` → `python3 80_TOOLS/validate-canon.py`. A changed value fails the parity check on purpose: write an ADR, then refresh `_source/claude-design-system/tokens.css`.
