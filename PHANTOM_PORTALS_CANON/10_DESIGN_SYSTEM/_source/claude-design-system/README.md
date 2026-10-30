# PHANTOM PORTALS

## Design System — White / Crimson / Black

**Visual Identity:** Trash Polka × Isometric Cybernetic HUD × Premium Command Center

**Design Standard:** White-Forward Phantom Edition

### Purpose

Phantom Portals is an elite, offline-first IT command center that combines a Chromium-style browser interface, diagnostic workspaces, AI-powered tools, system utilities, and immersive cybernetic visuals.

The visual identity blends the expressive intensity of **Trash Polka artwork** with the precision of **isometric technical geometry and advanced HUD interfaces**.

The system must feel powerful, sophisticated, tactical, futuristic, and unmistakably Phantom Portals.

**Visual formula:**

- 50% expressive Trash Polka / controlled artistic chaos
- 50% clean isometric geometry / engineered technical precision
- White-forward surfaces, matte-black architecture, and blood-crimson accents
- A singular hooded Phantom as the central brand identity

The goal is a functional technical workstation that feels like a premium piece of interactive digital art—not a conventional corporate dashboard or gaming interface.

---

## Principles

1. **White is the canvas.** Use substantial white and off-white surfaces. Never default to an entirely dark interface.
2. **Black creates structure.** Use deep matte black for navigation, technical framing, typography, and high-contrast panels.
3. **Crimson communicates intent.** Reserve blood-red accents for active states, critical actions, visual emphasis, and signature effects.
4. **Chaos meets precision.** Balance expressive Trash Polka elements with disciplined geometric layouts.
5. **The Phantom is iconic.** Use one recognizable hooded Phantom identity, not competing characters or operator personas.
6. **Function precedes decoration.** Every screen must remain readable, navigable, and operational.
7. **Design for depth.** Use layered panels, wireframes, fine technical lines, directional geometry, and controlled dimensional effects.
8. **Motion has purpose.** Animations should reinforce interaction, hierarchy, navigation, and system activity.
9. **Maintain visual continuity.** Every application module must feel part of one coherent design system.
10. **Preserve existing work.** Continue, improve, and integrate before replacing verified components or established functionality.
11. **Premium over excessive.** Avoid cluttered cyberpunk clichés, overwhelming glow, gratuitous gradients, and decorative noise.
12. **Performance is mandatory.** Advanced visuals must never compromise system responsiveness, accessibility, or offline functionality.

---

## Using Tokens

### Color tokens

| Token | Hex | Usage |
|---|---|---|
| `surface.canvas` | `#F6F5F2` | Main white-forward backgrounds |
| `surface.primary` | `#FFFFFF` | Cards, forms, command surfaces |
| `surface.inverse` | `#151519` | Dark navigation, terminals, HUD panels |
| `ink.primary` | `#151519` | Main typography and technical markings |
| `ink.secondary` | `#55525A` | Descriptions, metadata, labels |
| `accent.crimson` | `#A0112B` | Primary actions, active indicators |
| `accent.hero` | `#B8143E` | Large crimson artwork, signature graphics |
| `accent.electric` | `#EE5367` | Decorative lighting and animation only |
| `border.default` | `#D8D5D6` | Subtle light-theme separation |
| `surface.crimson-soft` | `#FCE8EB` | Selected backgrounds, annotations |

**Color distribution guideline:**

- 55–65% white/off-white
- 25–35% black/charcoal
- 5–10% blood crimson

These proportions guide the overall composition, not every individual component.

**Color rules:**

- White dominates working surfaces.
- Black provides architectural definition.
- Crimson creates memorable focal points.
- Avoid introducing competing neon colors.
- Do not use bright crimson for small body text.
- Never use crimson decoration to obscure functional information.

### Typography

**Primary:** Inter — body text, navigation, interface controls.

**Headings:** Space Grotesk — page titles, section headings, prominent statistics.

**Technical:** JetBrains Mono — terminal output, command identifiers, timestamps, telemetry.

Use bundled/local fonts with system fallbacks; do not require external font CDNs.

**Type scale:**

- Display: 48–64 px
- H1: 32–40 px
- H2: 24–28 px
- H3: 18–20 px
- Body: 14–16 px
- Labels: 12–14 px
- Technical metadata: 11–13 px

Use clear hierarchy, restrained letter spacing, and consistently readable text. Never use distressed or decorative fonts for functional information.

### Spacing and geometry

Use a consistent 4 px base spacing system:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`

- Panels: 16–24 px padding
- Major sections: 32–48 px separation
- Compact HUD elements: 8–12 px internal spacing
- Buttons: minimum 40–44 px height
- Cards: 8–12 px corner radius where appropriate
- Tactical frames: selective sharp or chamfered corners
- Borders: 1–2 px, with heavier framing reserved for major surfaces

Prefer asymmetric compositions contained within a stable, responsive grid.

### Surface and effects tokens

Use controlled combinations of:

- Fine ink splatters and brush textures
- Torn-paper edges and editorial collage
- Isometric wireframes and polygonal geometry
- Circuit traces, targeting markers, technical coordinates
- Glass-like overlays with restrained transparency
- Crimson laser lines, edge highlights, and controlled bloom
- Layered panels and subtle depth shadows
- Animated geometric intersections and scanning effects

**Critical:** Trash Polka artwork should enhance the interface, never overwhelm controls, tables, search results, or technical content.

Keep grunge strongest around the hero artwork, headers, edges, and transitions. Keep working panels precise and clean.

---

## Using Components

### Component source of truth

Use the existing Phantom Portals application components, established design tokens, verified assets, and shared component library as the primary source.

Audit and reuse working components before creating replacements.

All new components must inherit semantic colors, typography, spacing, focus states, responsiveness, and motion behavior from the shared system.

### Core component families

**Browser Shell**

- Browser-style tab strip
- Omnibox and universal search
- Favorites/bookmarks bar
- Left vertical utility rail
- Workspace switching and navigation

**Command Center**

- Central command/AI search interface
- Quick-launch tool tiles
- Dashboard panels
- System status and telemetry
- Collapsible command modules
- Technical sidebars and information overlays

**Interactive Controls**

- Primary crimson buttons
- Secondary matte-black buttons
- Minimal ghost/outline controls
- Search inputs and command fields
- Dropdowns, toggles, sliders, and tabs
- Tooltips, progress indicators, and notifications

**Technical Components**

- Terminal and console panels
- Diagnostic tables
- File explorers and resource browsers
- System monitoring charts
- AI response panels
- Workflow and execution status indicators

**Signature Visual Components**

- Phantom hero artwork
- Isometric technical diagrams
- Animated HUD rings and targeting elements
- Spatial connection lines
- Cybernetic overlays
- Crimson scanning and active-state indicators

### Component usage rules

**The Phantom hero:** Use as an intentional centerpiece, not repeated across every panel. Maintain a coherent silhouette and brand identity.

**Crimson primary buttons:** Reserve for the most important action within a given context. Do not make every button crimson.

**HUD panels:** Use tactical framing and technical details sparingly. Data remains the primary content.

**Glass overlays:** Never reduce text clarity or make interface boundaries ambiguous.

**Animations:** Use meaningful hover, focus, selection, loading, and transition feedback. Avoid constant unnecessary movement.

**Navigation:** Preserve the familiar browser-shell interaction model. Experimental visual treatment must not reduce usability.

**Responsive behavior:** Adapt layouts to desktop, laptop, tablet, and smaller screens without destroying hierarchy.

**Component states:** Define default, hover, focus, active, selected, disabled, loading, error, and success states wherever applicable.

---

## Accessibility

**Target WCAG 2.2 AA.**

### Approved high-contrast text combinations

- `#151519` on `#FFFFFF` — 18.2:1
- `#151519` on `#F6F5F2` — 16.7:1
- `#FFFFFF` on `#151519` — 18.2:1
- `#A0112B` on `#FFFFFF` — 8.1:1
- `#FFFFFF` on `#A0112B` — 8.1:1
- `#FFFFFF` on `#B8143E` — 6.6:1
- `#55525A` on `#FFFFFF` — 7.7:1

These pairings meet WCAG AA text contrast requirements at the specified colors.

**Focus indicators:**

- Light surfaces: 2 px solid `#A0112B` with a 2 px offset.
- Dark surfaces: 2 px solid `#FFFFFF` with a 2 px offset.
- Provide clear keyboard-visible focus on all actionable elements.

**Interaction accessibility:**

- Never communicate status using color alone. Pair color with labels, icons, or shapes.
- Maintain keyboard-accessible navigation, menus, dialogs, and controls.
- Use appropriate semantic HTML and accessible names.
- Target at least 24 × 24 CSS px pointer targets, with 44 × 44 preferred for primary touch interactions.
- Provide reduced-motion alternatives for animations and 3D effects.
- Avoid flashing, aggressive strobes, or excessive parallax.
- Maintain at least 4.5:1 contrast for normal text and 3:1 for large text and meaningful UI boundaries.
- Never put essential text over busy Trash Polka artwork without a verified readable surface.
- Verify text contrast after applying transparency, overlays, glow, or image backgrounds.
- Maintain readable zoom and reflow behavior.

---

## Implementation Rules for Claude

Before designing or modifying any Phantom Portals interface:

1. Read this design system and inspect existing project components and assets.
2. Preserve established functionality, navigation, component contracts, and working integrations.
3. Use the white-forward Trash Polka visual language consistently.
4. Balance expressive artwork with clean geometric technical architecture.
5. Apply shared semantic tokens instead of hardcoding arbitrary styles.
6. Prefer reusable, accessible React components and performant CSS/SVG effects.
7. Use GPU-accelerated rendering selectively for complex 3D experiences.
8. Support offline-first deployment without mandatory external asset dependencies.
9. Offer reduced-motion behavior and appropriate performance fallbacks.
10. Validate responsiveness, accessibility, functionality, and visual consistency before declaring work complete.

### Final visual standard

Phantom Portals must look like an **elite futuristic IT command center built from white technical surfaces, architectural matte-black framing, violent but controlled crimson Trash Polka artwork, and precision-engineered isometric cybernetic geometry.**

It should feel simultaneously artistic and industrial, aggressive and refined, immersive and highly practical.

**Design mandate:**

White creates clarity. Black creates authority. Crimson creates identity. Geometry creates precision. Trash Polka creates character. Function holds everything together.

**CONTINUE → IMPROVE → INTEGRATE.**

---

## This system: how the spec is implemented

Everything below builds on the spec above. Token names map 1:1 to the spec's dotted names (`surface.canvas` → `surface-canvas` → `var(--surface-canvas)`). Tokens marked *derived* fill gaps the spec implies; every contrast figure was computed, and the spec's seven approved pairings all check out (18.21, 16.70, 18.21, 8.05, 8.05, 6.55, 7.66).

### Derived tokens

| Token | Hex | Why |
|---|---|---|
| `surface-sunken` | #ECEAE6 | Wells, table heads, disabled fills (ink-secondary 6.38:1) |
| `surface-inverse-raised` | #2A2A30 | Raised layer on black: terminal title bar, hovered rail item |
| `ink-on-inverse` / `ink-on-inverse-secondary` | #FFFFFF / #B4B1B9 | Text on black: 18.2:1 / 8.61:1 |
| `accent-crimson-pressed` | #7E0D22 | Pressed crimson controls (white 10.7:1) |
| `accent-crimson-on-inverse` | #FF6B7D | `accent.crimson` is only 2.26:1 on black, so this carries active states there (6.63:1) |
| `border-control` | #86828A | `border.default` is 1.46:1, too faint for input edges. This is 3.77:1 on white, 3.46:1 on canvas |
| `border-inverse` | #6E6A73 | Control edges on black: 3.44:1 |
| `status-success` / `status-warning` | #1E6B47 / #8A5300 | Muted, not neon; errors use crimson. Always with a shape and a word |
| `focus-ring` / `focus-ring-inverse` | crimson / white | The spec's focus rule as tokens |
| `overlay-glass` / `overlay-scrim` | white .88 / ink .48 | Glass over art and modal scrim |

Type styles: `display` 56 · `h1` 36 · `h2` 26 · `h3` 20 · `stat` 40 · `eyebrow` 12 (Space Grotesk); `body-lg` 16 · `body` 15 · `body-sm` 14 · `label` 14 · `button` 14 · `label-sm` 12 · `caption` 12 (Inter); `mono` 13 · `mono-sm` 12 · `mono-label` 11 (JetBrains Mono). All eight font files ship in `fonts/`.

Shape: `radius-8` cards, `radius-12` dialogs and AI panels, `radius-0` tactical frames. The **Phantom Cut** is a diagonal chamfer on the top-right and bottom-left (`chamfer-6 / 10 / 16`), drawn on a `::before` so focus rings are never clipped. Depth: `depth-1/2/3`, `crimson-edge` (signature selected edge, once per view), `laser-glow` (electric lines only). Sizes: `control-md` 40, `control-lg` 44, `tabstrip-height` 40, `omnibox-height` 44, `rail-width` 56.

### The Trash Polka layer
The references are red, black and white collage: brush cuts, ink splatter, halftone dots, torn paper, ensō rings, hex fragments and typewriter fragments. This system turns that into reusable, original vector parts (see **Vectors**):

- **Where:** hero artwork, page headers, section edges, empty states and transitions.
- **Never:** behind controls, tables, search results, terminal output or body text. Essential text over art needs a verified surface: `overlay-glass` (≥ 0.85 alpha) or a solid panel.
- **How much:** at most three vectors in one composition, one of them crimson. Grunge is strongest at the edges and fades toward the work.
- **Pairing:** each Trash Polka mark is matched with a precise one, such as a brush cut with an iso grid, or a splatter with a target reticle. That is the 50/50 formula in practice.

### The Phantom
The project's hooded reaper, redrawn in the **Ink Protocol** language (see that section). It has a pointed hood, a faceted beaked mask with crimson eye slits, layered pauldrons, and segmented gauntlets cupping a crimson singularity. The cloak is engraved with hatching, rim-lit from the upper left, and its hem tatters into ink drips. It stands inside a precision instrument: a graduated ring, a dry-brush ensō, an isometric cube frame and a target lock on the orb. A crimson dry-brush cut crosses the cloak beneath the mask.

- **Emblem** (`phantom-emblem`, `phantom-emblem-inverse`): vector masters for print and splash. On screens use the 512 / 2048px PNGs in **Artwork**; the SVGs are about 1.8 MB of drawn detail.
- **Monogram** (`phantom-monogram`, `phantom-app-icon`) from 16 to 128px: a head-and-shoulders crop with enlarged eyes so they read at tab size.
- **Wordmark / lockup:** PHANTOM in ink, PORTALS in crimson, a dry-brush underline, a graduated rule and the mono sublines *OFFLINE-FIRST IT COMMAND CENTER* / *EST. MMXXVI*. Text is outlined, so no fonts are required.
- **Plate 01 — The Operator** (**Artwork**): the key visual, a 2400 × 3000 specimen plate.
- Use the Phantom as a centrepiece, never repeated across panels, never recoloured, never joined by a second character.

### Iconography
- **Icons:** 20 UI icons on a 24px keyline grid with 1.5px square-capped, mitred ink strokes and exactly one crimson accent on the part that acts. In the interface they render as masks (`<Icon>` / `.pp-icon`) so they take one ink. Icon-only controls always carry an accessible name and a tooltip.
- **Feature Icons:** the same 20 glyphs as 160px Trash Polka badges, each with a dry-brush ensō, a crimson dab, a halftone quarter and a tick arc, individually composed. Use them for tiles (`<ToolTile feature>`), launchers and empty states via `<FeatureIcon>`; never in dense UI.
- Never use emoji.

### Voice
Terse, operator-grade and honest. Labels are plain words ("Run Diagnostics", not a glyph to decode). Status always names itself ("Unavailable", "Not configured", "3 errors"). Never invent telemetry, sessions or command output to make a panel look busy. Mono is for things a machine says; Inter is for things a person reads.

### Motion
Durations are 120ms (press), 160–200ms (hover, focus, open) and 320ms (panel transitions), with ease-out on entry. Signature motion includes the crimson laser underline drawing on primary-button hover, the scan sweep on indeterminate progress, and the HUD arc rotating only while data is live. Under `prefers-reduced-motion`, everything settles to its end state. No strobing, no constant ambient movement, no heavy parallax.

### Using this system

- **Tokens:** load `tokens.css` (generated from `tokens.json`); every value is a CSS custom property named after its token (`var(--accent-crimson)`, `var(--font-heading)`).
- **React components:** 22 typed components: Button, IconButton, Omnibox, Tabs, Toggle, Slider, Select, TabStrip, BookmarksBar, UtilityRail, ToolTile, CommandModule, StatusPanel, Terminal, DiagnosticTable, AIResponse, StatusBadge, Notification, Progress, Tooltip, PhantomHero, HudRing, plus Icon and the PortalRoot wrapper.
  - **In an app (recommended):** copy `components/src/index.tsx` into the project as `phantom-portals.tsx` (React 18, no other dependencies) and import from it. Load `tokens.css` and `components/bundle.css` once, and wrap the app in `<PortalRoot>`.
  - **Without a build step:** load `components/lib/react.production.min.js`, `components/lib/react-dom.production.min.js` and `components/bundle.js` as classic scripts. The components are then on `window.PhantomPortals`. Everything ships locally, so it works offline.
  - **Offline assets:** copy the Icons and hero vectors into your app and call `configureIcons(name => '/assets/icons/' + name + '.svg')` and `configureArt({...})` once at startup.
  - Props for every component are in `components/index.d.ts`. Each component card shows a React example.
- **CSS only:** every component is also plain markup on `pp-*` classes in `components/bundle.css` (wrap a surface in `.pp`, or `.pp-inverse` for black regions) for non-React surfaces such as WinPE pages and static docs.
- **Assets:** Logos, Icons and Vectors are flat SVG with no external references, safe offline.
- **Before changing any Phantom Portals screen:** read this book, inspect the existing components, preserve working behaviour, apply tokens instead of hard-coded values, and verify responsiveness, accessibility and function before calling it done. **CONTINUE → IMPROVE → INTEGRATE.**

Layout of the browser shell and the Command Center home is in the **Layout** section.
