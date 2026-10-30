# Project instructions — for any AI tool

Paste the **full** block into a Claude Project, a Codex/Cursor `AGENTS.md`, or any agent's system prompt. Paste the **compact** block where space is short (ChatGPT custom instructions allow 1,500 characters per field). Both say the same thing; the full one adds the reasons and file paths.

## Precedence (why these rules)
1. `10_DESIGN_SYSTEM/tokens/tokens.json` — values (colours, type, space, sizes).
2. `10_DESIGN_SYSTEM/` docs — how to use them.
3. `00_START_HERE/CANON_REGISTER.md` — what is CURRENT, RETIRED, UNCLEAR; open conflicts.
4. [`trashy-mr-polka-bot.agent.md`](trashy-mr-polka-bot.agent.md) — the owner's agent brief (verbatim). It agrees with the canon except the shell sizes: the brief says tab 40 / omnibox 56 / favorites 36 / rail 72; the tokens say 40 / 44 / 32 / 56 and **the tokens win** (conflict C-01, [ADR-0008](../00_START_HERE/decisions/ADR-0008-shell-dimensions.md), proposed).
5. [handoffs/codex-v3.1](handoffs/codex-v3.1/README.md) — an engineering work order for the USB app; its UI law is UNCLEAR (C-03) and the package it describes is not in the canon (C-04).

## Full block
```text
You are working on PHANTOM PORTALS, an offline-first IT command center (a portable browser-shell app on a recovery USB) with a White-Forward Trash Polka × isometric HUD identity.

SOURCE OF TRUTH — read before designing or coding, and prefer it over memory:
PHANTOM_PORTALS_CANON/ — tokens: 10_DESIGN_SYSTEM/tokens/tokens.json (built CSS/TS/Tailwind in tokens/build); docs: 10_DESIGN_SYSTEM; status of everything: 00_START_HERE/CANON_REGISTER.md; prompts: 20_PROMPT_LIBRARY; assets: 30_ASSETS (catalog INDEX.json). Precedence: tokens > design-system docs > register > agent brief (50_AGENTS/trashy-mr-polka-bot.agent.md) > older handoffs. Where the agent brief's shell sizes differ, the tokens win: tab strip 40, omnibox 44, bookmarks 32, rail 56.

LOOK: white/paper dominates (55–65 %), matte black is the frame (25–35 %: tab strip, rail, terminals), blood crimson is the point (5–10 %: one primary action per context, active states, one cut of art). Fonts: Space Grotesk (headings), Inter (UI/body), JetBrains Mono (data/commands) — bundled locally. Art: ≤ 3 vectors per composition (one crimson), one hooded Phantom at most, never behind controls, tables, terminals, forms or text. Isometric precision for HUD geometry. Style balance ~50/50 across a screen, controls 100 % precise.

RETIRED — never use: the dark Ruby Edition (obsidian + gold, Cinzel), the Operator System (seven operator personas and colours, Bahnschrift, IBM Plex Mono), the XerXes lock (gold + purple, Montserrat), alpine-landscape heroes, orange/sapphire/violet schemes. Full list: 20_PROMPT_LIBRARY/negative/retired-canon-negative.md.

BUILD: use the component library (window.PhantomPortals, 10_DESIGN_SYSTEM/components) before writing new controls; tokens only, no raw hex. Everything works offline from file://: icons via 10_DESIGN_SYSTEM/iconography/icons.data.js → configureIcons(PhantomIconData); other asset URLs absolute (new URL(path, location.href).href) because url() in CSS custom properties resolves against bundle.css; fonts and React from local files; no CDNs.

ACCESSIBILITY: WCAG 2.2 AA. Use only APPROVED pairings in 10_DESIGN_SYSTEM/accessibility/contrast-matrix.md (crimson text never on black; electric #EE5367 never as text on light). Visible focus: 2 px crimson ring, 2 px offset (white on dark). Status never by colour alone. Respect prefers-reduced-motion.

HONESTY: never invent telemetry, logs, device readings or tool results; label sample data SAMPLE; never present a mockup as a working build. Do not touch boot tooling, partitions, ISOs, credentials or security boundaries unless asked. Do not claim tests or checks you did not run — report what you verified and how.

CHANGING THE CANON: new or changed assets get a sidecar (80_TOOLS/index-assets.py --new …); prompts follow 20_PROMPT_LIBRARY/_schema; decisions get an ADR in 00_START_HERE/decisions; run python3 80_TOOLS/validate-canon.py before finishing.
```

## Compact block (≤ 1,500 characters)
```text
Phantom Portals: offline-first IT command center. Canon: PHANTOM_PORTALS_CANON (tokens.json > design-system docs > CANON_REGISTER > agent brief; shell sizes from tokens: tabs 40, omnibox 44, bookmarks 32, rail 56).
Look: white-forward — paper 55–65 %, matte black frame 25–35 %, blood crimson #A0112B 5–10 % (one primary action, active states, one art cut). Space Grotesk headings, Inter UI, JetBrains Mono data — local files, no CDNs. Trash Polka art (≤3 vectors, one crimson, one hooded Phantom max) only in heroes and empty states, never behind controls, tables, terminals or text; isometric precision for HUD lines.
Retired, never use: Ruby obsidian+gold, Operator personas/colours, XerXes gold+purple, Cinzel, Montserrat, Bahnschrift, IBM Plex Mono.
Build with the component library and tokens only; works from file:// (icons.data.js for icons, absolute asset URLs).
WCAG 2.2 AA: approved contrast pairs only, 2px crimson focus ring, never colour alone, reduced motion.
Honesty: no invented telemetry or results; label samples; report only checks you ran.
```
