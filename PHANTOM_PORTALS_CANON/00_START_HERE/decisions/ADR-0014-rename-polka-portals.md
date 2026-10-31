# ADR-0014: The project is renamed Polka Portals

- **Status:** Accepted — 2026-10-31, owner: "C-09, the name … Its a rename." (closes conflict C-09)
- **Date:** 2026-10-31
- **Deciders:** Project owner
- **Canon version:** 1.3.0

## Context
The canon (1.0.0–1.2.0), Plate 01 and the USB app called the project **Phantom Portals**. The owner's concept sheets of 2026-10-30 ([40_MOCKUPS/concepts](../../40_MOCKUPS/concepts/README.md), PP-CON-001 … 005) brand it **Polka Portals**. Conflict C-09 asked whether that was a rename, a sub-brand or a mock-up label. The owner answered: a rename.

## Decision
**Polka Portals** is the project name. Set it in title case in running text and in capitals (POLKA PORTALS) only in the wordmark and in mono labels.

**What changes:** every name a person reads in CURRENT canon. That covers docs, page titles, the gallery, templates, the brand board, adapter titles (the shadcn theme, Figma file, Canva kit), prompts, agent instructions, and the licence line in sidecars. The wordmark and lockups are redrawn ([ADR-0015](ADR-0015-shield-logo.md)).

**What stays, and why:**
- **The Phantom** is still the project's one character ([ADR-0006](ADR-0006-one-phantom-no-operators.md)). Names that refer to the character keep it: *PhantomHero*, the *Phantom Cut* chamfers, *White-Forward Phantom Edition*, the hero prompts.
- **Identifiers** keep the old name: the folder `PHANTOM_PORTALS_CANON/`, the repository, `window.PhantomPortals`, the `.pp-*` classes, `PP-` asset and prompt IDs, file names (for example `adapters/shadcn/phantom-portals.json`) and the Canva and Claude artifact URLs. Renaming them breaks imports, links and the Codex build for no visible gain. A later migration can rename them all in one release, with redirects.
- **History keeps its words.** These are not rewritten:
  - 90_ARCHIVE, 99_RELEASES and earlier CHANGELOG entries
  - accepted ADRs
  - the owner's verbatim documents (directions, agent brief, Universal Canon v4, Codex v3.1 hand-off)
  - `10_DESIGN_SYSTEM/_source`
  - sidecar `source` provenance, which records the name an asset had when it was fetched
- **PHANTOM USB** (the drive product in Universal Canon v4) keeps its name until the owner decides otherwise. This is new conflict C-11.
- **Shipped code.** The exported component library still says "Phantom Portals" in PhantomHero's `aria-label`. That code changes only through a new design-system export, so the fix is logged in [BACKLOG.md](../../10_DESIGN_SYSTEM/components/BACKLOG.md).

## Consequences
- The canon reads **Polka Portals** from 1.3.0. Searching for "Phantom Portals" now finds only identifiers, history and character names, so new hits outside those are mistakes.
- Canva: the folder and board titles still say *Phantom Portals* until the owner approves the edit (Canva changes need approval). Figma: the library is not built yet, so it starts with the new name.
- Codex: the v1.1 hand-off now tells Codex to ship the new name and logo in the USB app's chrome. Code identifiers stay as they are.
- The concept sheets move from UNCLEAR to REFERENCE: they are the source of the name and the logo, not finished assets.

## Sources
- Owner message, 2026-10-31: "C-09, the name: … Its a rename."
- Conflict C-09 and CR-068 in the [register](../CANON_REGISTER.md).
- Concept sheets PP-CON-001 … 005.
