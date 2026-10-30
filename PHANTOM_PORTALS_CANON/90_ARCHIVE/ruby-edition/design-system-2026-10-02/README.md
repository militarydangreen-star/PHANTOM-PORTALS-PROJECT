# Phantom Portals

**Ruby Edition.** A sophisticated classified technical command system, not a gaming interface. Every Phantom Portals surface (Command Deck, Command Center, launchers, Sentry Lite, Ventoy boot) should feel like another chamber inside the same machine.

> Obsidian grounds. Platinum speaks. Gold lights. Ruby costs.

## Content fundamentals

- **Voice:** terse, operational, confident. Labels state what something is or does (`RUN DIAGNOSTICS`, `VERIFY SHA-256`), never cute.
- **Hierarchy over decoration.** Strong information hierarchy and readable layouts come first. Spectacle must never cost readability: no unreadable HUD gimmickry.
- **Cinematic scale, then operational density.** Alternate large atmospheric hero moments with dense operational workbenches. A surface opens as a minimal cinematic landing (obsidian, platinum, a hint of operator energy) and moves into a dense tactical workstation.
- **Vector outline marks, never emoji.**
- **80/20 aesthetic law:** about 80% cybernetic, tactical, high-tech and 20% gothic/reaper intimidation.

## Visual foundations

### Colour formula

| Share | Role | Tokens |
|---|---|---|
| ~55% | Black architecture | `obsidian` ground, `graphite` raised surfaces, `hairline` edges |
| ~20% | Instrumentation | `platinum` reading text, `muted` secondary |
| ~10% | Signature | `sovereign-gold`: brand, structure, emblem |
| ~5% | Consequence | `deep-ruby`, `ruby-ink`: danger and destructive actions only |
| ~10% | Operator energy | per-operator accent (not yet defined in this system) |

Usage rules:

- `sovereign-gold` is **light, not paint**: an illuminated edge, a node, a focus ring, the mark. Never a solid fill on a large area and never a generic highlight.
- Ruby is the **only** colour that may mean danger. `deep-ruby` is for surfaces and edges (put `platinum` text on it); `ruby-ink` is for danger text and icons on dark grounds. Never scatter ruby for decoration.
- `hairline` is decorative only (1.6:1 on `obsidian`). Control borders and focus indicators need 3:1, so use `muted` or `sovereign-gold`.
- Operator colour supplies energy over the black/graphite/platinum/gold shell, stays under about 10–15% of a screen, and resolves as an energy family (base, dim, ghost, bright, glow) rather than flat fills.

### Geometry

- **Flat corners:** `radius-0` everywhere.
- **Phantom Cut:** a 45° corner chamfer, `cut-sm` on controls, `cut-lg` on panels and hero frames. Use `clip-path: polygon(...)`.
- **Phantom Line:** the signature connector: a neutral `hairline` run, then a `sovereign-gold` node, then an operator-energy (or `ruby-ink` for a fault path) segment. Use it for progress, flow and section dividers.

### Typography

Three roles, three typefaces, all SIL OFL:

| Role | Family | Styles | Use |
|---|---|---|---|
| Command | Cinzel (`--font-display`) | `command-display`, `command-heading` | Titles and hero moments; uppercase, expanded tracking |
| Interface | Space Grotesk (`--font-body`) | `interface-title`, `interface-body`, `interface-label` | Dominant reading and UI text |
| Technical | IBM Plex Mono (`--font-mono`) | `technical` | Telemetry, paths, hashes, logs |

### Spacing

A 4px base: `space-1` 4, `space-2` 8, `space-4` 16, `space-8` 32. Dense workbenches live on `space-2`/`space-4`; cinematic moments breathe on `space-8`.

## Iconography

Vector outline marks only, stroked in `muted` (idle), `platinum` (active), `sovereign-gold` (identity) or `ruby-ink` (danger). No logo files are in this system yet; until they are, set the name in Cinzel as plain type.

## Accessibility

- All text pairs above reach 4.5:1: `platinum` and `muted` on `obsidian` and `graphite`, `ruby-ink` on `obsidian`, `platinum` on `deep-ruby`.
- `deep-ruby` must never carry text directly on `obsidian` (2.5:1).
- Danger is never colour alone: pair ruby with a label or outline icon.
- Every high-aesthetic surface keeps an immediate lightweight or text-mode fallback.

## Rejected directions

Generic cyberpunk, gaming HUD, crypto dashboard, consumer SaaS minimalism, flat white designs, glassmorphism demos, movie props, gothic fantasy and cartoonish interfaces.

## Not synced

- **Source:** built from the stated Ruby Edition spec. The GitHub repository `militarydangreen-star/PHANTOM-PORTALS-PROJECT` had no commits when this was made, so nothing came from code.
- **Fonts:** Cinzel, Space Grotesk and IBM Plex Mono are named as hosted (Google Fonts) families. The local font files Phantom Portals ships are not uploaded yet.
- **Assets:** no logos, emblems or icon set yet.
- **Components:** none. Buttons, panels, the Phantom Line and the operator energy families are still to come from the real code.
- **Assumed:** the type sizes, spacing steps and cut sizes are a first proposal, not values read from source.
