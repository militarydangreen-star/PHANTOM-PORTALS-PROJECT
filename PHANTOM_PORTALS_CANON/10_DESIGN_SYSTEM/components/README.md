# Components

The component library is real code: React 18 components on `window.PhantomPortals`, typed in [`library/index.d.ts`](library/index.d.ts), styled by `.pp-*` classes in [`library/bundle.css`](library/bundle.css). Every component also works as plain markup on those classes (WinPE pages, static docs). See them live in the [gallery](../gallery/index.html).

**Source of truth:** use these components. Audit and reuse before creating replacements. New components inherit tokens, focus states, responsiveness and motion from the system.

| Family | Components | Doc |
|---|---|---|
| Browser shell | TabStrip, BookmarksBar (+ layout) | [browser-shell.md](browser-shell.md) |
| Browser shell | UtilityRail | [utility-rail.md](utility-rail.md) |
| Inputs | Omnibox | [omnibox.md](omnibox.md) |
| Inputs | Tabs, Toggle, Slider, Select | [inputs.md](inputs.md) |
| Actions | Button, IconButton | [buttons.md](buttons.md) |
| Command Center | ToolTile (+ FeatureIcon) | [tool-tile.md](tool-tile.md) |
| Command Center / Technical | StatusPanel, CommandModule, AIResponse | [panel.md](panel.md) |
| Technical | Terminal, DiagnosticTable | [terminal.md](terminal.md) |
| Feedback | StatusBadge, Notification, Progress, Tooltip | [feedback.md](feedback.md) |
| Signature | PhantomHero, HudRing, Icon, FeatureIcon, PortalRoot | [signature.md](signature.md) |
| Status vocabulary | The 10 truthful capability states and 5 evidence labels, drawn with StatusBadge | [status-vocabulary.md](status-vocabulary.md) · [JSON](status-vocabulary.json) |

Long-form README, props card and preview for each component: [reference/](reference/README.md). Not built yet: [BACKLOG.md](BACKLOG.md).

## Every component defines these states
default · hover · focus-visible · active/pressed · selected · disabled · loading · error · success — wherever they apply. Focus is always visible (2 px `focus-ring`, 2 px offset; white on black). State is never colour alone.

## Rules that apply to all
- One crimson primary per context; one `crimson-edge` per view.
- Status = shape + word + colour.
- Icon-only controls carry an accessible name and a tooltip.
- No Trash Polka art inside or behind components except PhantomHero.
- Honest data: show "Unavailable" rather than a placeholder number; never fake terminal output.
