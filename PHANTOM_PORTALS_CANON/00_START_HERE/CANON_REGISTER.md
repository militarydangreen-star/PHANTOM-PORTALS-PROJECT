<!-- canon-lint: allow-retired -->
# Canon register

Every canon item and its status. Per-file detail (hash, size, licence, origin) lives in each asset's `.meta.json` and in the generated catalogs [`30_ASSETS/INDEX.json`](../30_ASSETS/INDEX.json) and [`20_PROMPT_LIBRARY/INDEX.json`](../20_PROMPT_LIBRARY/INDEX.json).

**Canon 1.2.0 · 2026-10-30** · Statuses: **CURRENT** · **RETIRED** · **UNCLEAR** · REFERENCE · DRAFT (defined in [README](README.md#status-vocabulary)).

## Identity

| ID | Item | Status | Where | Notes |
|---|---|---|---|---|
| CR-001 | Visual formula: white-forward Trash Polka × isometric cybernetic HUD (50/50) | **CURRENT** | [visual-language/](../10_DESIGN_SYSTEM/visual-language/composition-ratios.md) | [ADR-0001](decisions/ADR-0001-white-forward-canon.md) |
| CR-002 | Colour distribution 55–65 % white · 25–35 % black · 5–10 % crimson | **CURRENT** | [composition-ratios.md](../10_DESIGN_SYSTEM/visual-language/composition-ratios.md) | |
| CR-003 | Twelve design principles | **CURRENT** | [10_DESIGN_SYSTEM/README.md](../10_DESIGN_SYSTEM/README.md#principles) | |
| CR-004 | One hooded Phantom (Ink Protocol reaper) as the only character | **CURRENT** | [the-phantom.md](../10_DESIGN_SYSTEM/visual-language/the-phantom.md) | [ADR-0006](decisions/ADR-0006-one-phantom-no-operators.md) |
| CR-005 | Ink Protocol art philosophy | **CURRENT** | [ink-protocol.md](../10_DESIGN_SYSTEM/visual-language/ink-protocol.md) | [ADR-0003](decisions/ADR-0003-ink-protocol-artwork.md) |
| CR-006 | Voice: terse, operator-grade, honest; never invent telemetry | **CURRENT** | [do-dont.md](../10_DESIGN_SYSTEM/visual-language/do-dont.md#voice) | |
| CR-007 | Mandate "CONTINUE → IMPROVE → INTEGRATE" | **CURRENT** | [README](README.md) | |
| CR-008 | Owner direction 2026-10-29: white-forward Trash Polka standard for every Phantom Portals and PHANTOM USB surface | **CURRENT** | [directions/](directions/README.md) | Supersedes the 2026-10-17 Cyberpunk direction (CR-096). Its palette maps onto the tokens — C-08, resolved |

## Design system

| ID | Item | Status | Where | Notes |
|---|---|---|---|---|
| CR-010 | Design tokens v2 (74 CSS variables) in W3C DTCG | **CURRENT** | [tokens/tokens.json](../10_DESIGN_SYSTEM/tokens/tokens.json) | [ADR-0004](decisions/ADR-0004-dtcg-tokens-style-dictionary.md); parity with the design system verified by the validator |
| CR-011 | Token builds: tokens.css, typography.css, fonts.css, tokens.ts, tailwind.tokens.js, tailwind.theme.css | **CURRENT** (generated) | [tokens/build/](../10_DESIGN_SYSTEM/tokens/build/) | Never edit by hand |
| CR-012 | Font stack: Inter · Space Grotesk · JetBrains Mono, local WOFF2 | **CURRENT** | [typography.md](../10_DESIGN_SYSTEM/foundations/typography.md) | [ADR-0002](decisions/ADR-0002-font-stack.md) |
| CR-013 | 16 type styles (display … mono-label) | **CURRENT** | [typography.md](../10_DESIGN_SYSTEM/foundations/typography.md) | |
| CR-014 | 4 px spacing scale, radius 0/8/12/full, Phantom Cut chamfers 6/10/16 | **CURRENT** | [spacing-grid.md](../10_DESIGN_SYSTEM/foundations/spacing-grid.md), [elevation-borders.md](../10_DESIGN_SYSTEM/foundations/elevation-borders.md) | |
| CR-015 | Breakpoints (6 ranges) | **CURRENT** | [breakpoints.md](../10_DESIGN_SYSTEM/foundations/breakpoints.md) | Reconciles layout.md with the agent brief — see C-02 |
| CR-016 | Shell dimensions: tab strip 40 · omnibox 44 · bookmarks 32 · rail 56 | **CURRENT** | [browser-shell.md](../10_DESIGN_SYSTEM/components/browser-shell.md) | Conflicts with the agent brief — see C-01 |
| CR-017 | Component library: 22 components + Icon, FeatureIcon, PortalRoot (`window.PhantomPortals`, React 18) | **CURRENT** | [components/library/](../10_DESIGN_SYSTEM/components/library/README.md) | |
| CR-018 | Component docs (browser shell, omnibox, rail, tiles, panels, terminal, buttons, inputs, feedback, signature) | **CURRENT** | [components/](../10_DESIGN_SYSTEM/components/README.md) | |
| CR-019 | Component gaps (bottom dock, inspector drawer, file explorer, charts, dialog, command palette, AI workbench) | **DRAFT** | [components/BACKLOG.md](../10_DESIGN_SYSTEM/components/BACKLOG.md) | Not built yet |
| CR-020 | Motion: 120 / 160–200 / 320 ms, ease-out, purposeful only; reduced-motion end states | **CURRENT** | [motion-vfx/](../10_DESIGN_SYSTEM/motion-vfx/motion-principles.md) | |
| CR-021 | 3D brain / neural HUD | **CURRENT as optional** — never the default hero | [brain-hud.md](../10_DESIGN_SYSTEM/motion-vfx/brain-hud.md) | [ADR-0009](decisions/ADR-0009-brain-hud-optional.md) |
| CR-022 | Accessibility target WCAG 2.2 AA; focus rings; contrast matrix (21 approved pairings, all pass) | **CURRENT** | [accessibility/](../10_DESIGN_SYSTEM/accessibility/wcag-2.2-aa-checklist.md) | Matrix is computed, not typed |
| CR-023 | Offline gallery | **CURRENT** | [gallery/index.html](../10_DESIGN_SYSTEM/gallery/index.html) | Live components, no network |
| CR-024 | Browser-shell layout + Command Center home composition | **CURRENT** | [browser-shell.md](../10_DESIGN_SYSTEM/components/browser-shell.md) | From the design system's layout.md |
| CR-026 | Status vocabulary: 10 truthful capability states + 5 evidence labels (Universal Canon Law 3), drawn with StatusBadge | **CURRENT** | [status-vocabulary.md](../10_DESIGN_SYSTEM/components/status-vocabulary.md) | [ADR-0012](decisions/ADR-0012-status-vocabulary.md); JSON for code |
| CR-027 | Tool adapters generated from tokens: shadcn/ui theme (Tailwind v4), Figma variable spec, Canva Brand Kit sheet, brand board | **CURRENT** (generated) — Figma library itself **DRAFT** (not built) | [adapters/](../10_DESIGN_SYSTEM/adapters/README.md) | [ADR-0013](decisions/ADR-0013-tool-adapters.md); 42 pairings contrast-checked |
| CR-025 | Eight top-level app pages, page-specific sidebar, right intelligence rail, bottom AI workbench (Codex v3.1 UI law) | **UNCLEAR** | [50_AGENTS/handoffs/codex-v3.1/](../50_AGENTS/handoffs/codex-v3.1/COPY_PASTE_INTO_CODEX.txt) | Not yet reconciled with the design system's shell — see C-03 |

## Brand and artwork (30_ASSETS/brand)

| ID | Item | Status | Asset IDs |
|---|---|---|---|
| CR-030 | Phantom emblem, emblem inverse (vector masters, ~1.8 MB each) | **CURRENT** | PP-BRAND-001, 002 |
| CR-031 | Monogram, app icon, lockup | **CURRENT** | PP-BRAND-003 … 005 |
| CR-032 | Wordmark, wordmark inverse | **CURRENT** | PP-BRAND-006, 007 |
| CR-033 | Emblem PNGs 512/2048, light and inverse | **CURRENT** | PP-BRAND-008 … 011 |
| CR-034 | Plate 01 — The Operator (2400 × 3000 key visual) | **CURRENT** | PP-BRAND-012 — title kept, see C-05 |

## Asset library

| ID | Item | Status | Asset IDs |
|---|---|---|---|
| CR-040 | 19 Ink Protocol vectors (11 Trash Polka, 8 isometric/HUD) | **CURRENT** | PP-VEC-001 … 019 |
| CR-041 | 20 UI icons (24 px grid, 1.5 px strokes, one crimson accent) | **CURRENT** | PP-ICON-001 … 020 |
| CR-042 | 20 feature icons (Trash Polka badges) | **CURRENT** | PP-FICON-001 … 020 |
| CR-043 | Fonts: 8 WOFF2 faces + OFL licences | **CURRENT** | PP-FONT-001 … 008 |
| CR-044 | Video templates: YouTube thumbnail, lower third | **CURRENT** (templates) | PP-TPL-001, 002 |
| CR-045 | Audio-visual templates: album cover, channel banner | **CURRENT** (templates) | PP-TPL-003, 004 |
| CR-046 | Intros (motion) | **DRAFT** — none yet | [video/intros](../30_ASSETS/video/intros/README.md) |

## Prompts, agents, templates

| ID | Item | Status | Where |
|---|---|---|---|
| CR-050 | Prompt library v1 (schema, image-gen, UI build, audit, negatives) | **CURRENT** | [20_PROMPT_LIBRARY](../20_PROMPT_LIBRARY/README.md) |
| CR-051 | Project instructions for any AI tool | **CURRENT** | [project-instructions.md](../50_AGENTS/project-instructions.md) |
| CR-052 | Trashy Mr. Polka BOT agent brief (owner-authored, kept verbatim) | **CURRENT** with one open conflict | [agent file](../50_AGENTS/trashy-mr-polka-bot.agent.md) — see C-01 |
| CR-053 | Codex master handoff v3.1 (START_HERE, master command, manifest) | **UNCLEAR** — the package it describes is not in this canon | [handoffs/codex-v3.1](../50_AGENTS/handoffs/codex-v3.1/START_HERE.md) — see C-04 |
| CR-054 | Templates: HTML/CSS starter, deck, document, thumbnail | **CURRENT** — thumbnail as layered SVG only; PSD/AFDesign not yet made | [60_TEMPLATES](../60_TEMPLATES/README.md) |
| CR-056 | Codex hand-off v1.1: install the canon theme and status vocabulary in the USB app (5 gates) | **CURRENT** (work order) | [handoffs/codex-v1.1-design-system](../50_AGENTS/handoffs/codex-v1.1-design-system/README.md) | Adoption in the app is unverified until Codex reports |
| CR-055 | Universal Canon v4.0 for the PHANTOM USB (architecture, portability, truthful telemetry, multi-agent federation, evidence standard) | **CURRENT** except Law 4 (retired, CR-096) | [handoffs/universal-canon-v4](../50_AGENTS/handoffs/universal-canon-v4/README.md) | Owner-authored, verbatim |

## Mockups and references (40_MOCKUPS)

| ID | Item | Status | Notes |
|---|---|---|---|
| CR-060 | Claude Design canvas: Command Center desktop + phone, Diagnostics, Boot, Poster light + dark | **UNCLEAR** | Not owner-approved; built on the v1 flat vectors before the Ink Protocol art landed; sample telemetry — see C-06 |
| CR-061 | Canvas recolours (ensō, drips, brush stroke, HUD ring) | **UNCLEAR** | PP-MOCK-001 … 004, derived from retired v1 vectors |
| CR-062 | 25 Trash Polka inspiration images + 3 source pages | REFERENCE | PP-REF-001 … 025, PP-REF-SRC-001 … 003 — third-party, some watermarked stock |
| CR-063 | "PHANTOM / TAGLINE" skull-and-wings logo | **UNCLEAR** | PP-UNC-001 — looks like a stock logo template |
| CR-064 | Hooded "PHANTOM" esports mascot | **UNCLEAR** | PP-UNC-002 — gaming style conflicts with canon |
| CR-068 | Owner concept sheets 2026-10-30: Polka Portals UI inventory, two asset packs, Plate 01 specimen, asset-pack vector trace (PP-CON-001 … 005) | **UNCLEAR** — pending C-09, C-10 | [concepts/](../40_MOCKUPS/concepts/README.md) | Owner-made, may be published; audited, not shipped |
| CR-069 | Artifact inventory screen (canon rebuild of PP-CON-001) | **DRAFT** | [screens/catalog/artifact-inventory.html](../40_MOCKUPS/screens/catalog/artifact-inventory.html) | Canon components; rarity as ink pips; SAMPLE data |
| CR-066 | DGAS Design "Trash Polka" Photoshop action (.atn, brushes, patterns) | **REFERENCE** — licensed third-party tool, files not stored | [references/third-party/tools](../40_MOCKUPS/references/third-party/tools/README.md) | Pointer with SHA-256 only; never redistribute |
| CR-067 | shadcn/ui source (MIT) | **REFERENCE** | [references/third-party/tools](../40_MOCKUPS/references/third-party/tools/README.md#shadcnui-source-mit) | Source of the shadcn adapter's format |
| CR-065 | Screenshots of real builds | **CURRENT** | [screenshots/](../40_MOCKUPS/screenshots/README.md) — only the offline gallery so far |

## Retired canon (90_ARCHIVE — read-only)

| ID | Item | Dates | Replaced by |
|---|---|---|---|
| CR-090 | XerXes Visual System "STYLE LOCK" v1.0 — obsidian, graphite, sovereign gold `#D4AF37`, phantom purple `#8B5CF6`, platinum; Montserrat / Inter / JetBrains Mono | 2026-09-19 → 21 | ADR-0001 |
| CR-091 | Ruby Edition asset pack — 44 relic + 44 outline icons, generated ruby hero, Cinzel / Space Grotesk / IBM Plex Mono | 2026-09-19 | ADR-0001 |
| CR-092 | Ruby Edition design system — obsidian, platinum, sovereign gold, deep ruby; "80 % cybernetic / 20 % gothic" | 2026-10-02 | ADR-0001 |
| CR-093 | Operator System — seven operator energies (Phantom Core green, IT Technician cyan, Cybersecurity, Recovery orange, Forensics violet, Networking teal, AI Operator pink), gold, the Phantom Line, PHANTØM wordmark | 2026-10-06 | ADR-0001, ADR-0006 |
| CR-094 | v1 flat vectors — first white-forward emblem, 20 icons at 1.75 px, 16 vectors | 2026-10-29 (superseded the same day) | ADR-0003 |
| CR-095 | Alpine landscape hero, holographic brain as required homepage hero, orange/sapphire/violet scheme | before v3.1 | Named as inactive by the Codex v3.1 handoff; no files survive here |
| CR-096 | Cyberpunk direction — obsidian/carbon, smoked glass, dark alloy, cyan/magenta emissions, amber, platinum text, HUD styling on nearly all buttons, cockpit with the neural brain in the central projection bay (Universal Canon v4 Law 4) | 2026-10-17 → 29 | The owner's [2026-10-29 Trash Polka direction](directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md); no design files survive here |

## Open conflicts

Each needs an owner decision. Until then the **resolution in use** applies.

| ID | Conflict | Resolution in use | Decide via |
|---|---|---|---|
| C-01 | Agent brief sets shell sizes tab 40 / omnibox 56 / favorites 36 / rail 72; tokens say 40 / 44 / 32 / 56 | Tokens win (they match the shipped components) | [ADR-0008](decisions/ADR-0008-shell-dimensions.md) — *Proposed* |
| C-02 | Agent brief has six breakpoints; layout.md has four | Merged: six ranges, layout.md behaviours mapped onto them | [breakpoints.md](../10_DESIGN_SYSTEM/foundations/breakpoints.md) |
| C-03 | Codex v3.1 UI law (eight pages, page sidebar, right intelligence rail, bottom AI workbench) vs the design system's rail + Command Center | Design-system shell is canon; the v3.1 IA is tracked in the component backlog | New ADR when the owner settles the information architecture |
| C-04 | The v3.1 handoff points at a package (`01_APPROVED_DESIGN_v3.1/`, `02_MASTER_VISUAL_ASSETS_v2.0/`, …) that is not in this folder | Treat the handoff as an engineering work order only | Owner to add the package or retire the handoff |
| C-05 | Plate 01 is titled "The Operator" while the Operator System is retired | Keep the title: it names the Phantom's role, not a persona. Never reintroduce operator personas or colours | ADR-0006 |
| C-06 | Canvas mockups use v1 art and sample readings | Use for layout only; rebuild with Ink Protocol assets before any sign-off | — |
| C-08 | The owner's 2026-10-29 direction gives an eight-value palette (from the v3.1 prototype) that differs from the design-system tokens: secondary text `#697078` vs `#55525A`, a new primary red `#CE102B`, and five near-identical values | **Resolved 2026-10-30:** canon tokens stay; v3.1 values are mappings in `tokens.json`; `#CE102B` → `accent-crimson` | [ADR-0011](decisions/ADR-0011-palette-reconciliation-v31.md) — *Accepted* |
| C-09 | Four concept sheets (2026-10-30) brand the project **Polka Portals** and show a game-style artifact inventory; the canon, Plate 01 and the USB are **Phantom Portals**, an IT command center | Phantom Portals stays the name; Polka Portals material is filed as concept art | Owner: rename, sub-brand (e.g. the UI kit or a game layer), or drop |
| C-10 | The concept sheets use a red/white/black **shield-mask logo**; the canon logo is the Ink Protocol hooded-reaper emblem | Canon emblem stays; the shield mark is UNCLEAR | Owner: adopt (then a clean vector redraw + ADR), use as a secondary badge, or drop |
| C-07 | Logo clear space: v1 card said "half the emblem's height", Ink Protocol README says "a quarter of the emblem's width" | Quarter of the width (newer, matches the current artwork) | — |
