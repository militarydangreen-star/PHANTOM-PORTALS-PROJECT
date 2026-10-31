<!-- Paste into the PhantomPortals repo's AGENTS.md (and reference it from .codex/agents/phantom_architect.toml and .claude/agents/phantom-architect.md). -->
## Design canon (white-forward Trash Polka)
- Visual authority: `PHANTOM_PORTALS_CANON/` (canon 1.3.0). Precedence: `10_DESIGN_SYSTEM/tokens/tokens.json` → `10_DESIGN_SYSTEM/` docs → `00_START_HERE/CANON_REGISTER.md` → `50_AGENTS/trashy-mr-polka-bot.agent.md`.
- Styling: canon tokens only (`tokens/build/index.css`, or the shadcn theme in `10_DESIGN_SYSTEM/adapters/shadcn/`). No raw hex outside token files.
- Name and logo: **Polka Portals** with the shield mark (`30_ASSETS/brand/shield/`, lockups in `30_ASSETS/brand/logo/`; ADR-0014, ADR-0015). The hooded Phantom is character art, never the logo. Code identifiers (`PhantomPortals`, `.pp-*`, file names) and the PHANTOM USB name stay.
- Status words: only those in `10_DESIGN_SYSTEM/components/status-vocabulary.json` (Universal Canon Law 3).
- Retired: Cyberpunk (2026-10-17), Ruby, Operator, XerXes, alpine — see `20_PROMPT_LIBRARY/negative/retired-canon-negative.md`.
- Palette: canon tokens win; v3.1 values map via `tokens.json` → `$extensions.com.phantomportals.v31` (ADR-0011, accepted).
- Open owner decisions: C-01 shell sizes, C-03 page architecture. Do not resolve them in code; flag them.
- Before finishing UI work: run the repo checks, check 390/768/1024/1440 px, and record evidence labels in the shared ledger.
