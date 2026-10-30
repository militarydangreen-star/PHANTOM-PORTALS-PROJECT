# ADR-0012: Adopt the Universal Canon's truthful states as the design system's status vocabulary

- **Status:** Accepted
- **Date:** 2026-10-30
- **Deciders:** Project owner (Universal Canon v4 Law 3 already requires these states); recorded by the canon maintainer
- **Canon version:** 1.1.0

## Context
The owner's [Universal Canon v4](../../50_AGENTS/handoffs/universal-canon-v4/README.md) requires ten honest capability states and five evidence labels on the PHANTOM USB. The component library already draws statuses as shape + colour + word (`StatusBadge`), but had no fixed list of words, so screens could drift into "Online", "Good" or invented states.

## Decision
The fifteen labels in [status-vocabulary.md](../../10_DESIGN_SYSTEM/components/status-vocabulary.md) are the only status words in Phantom Portals UI, reports and agent ledgers. Each maps to one of the five existing badge shapes by severity class: `ok` (Ready, Verified), `warn` (Pending verification, Sample, Unknown, Partially tested, Unverified), `error` (Error), `idle` (Not connected, Offline, Unavailable, Disabled, Unsupported, Implemented, Proposed); `run` is transient. Code imports `status-vocabulary.json` (or `status-vocabulary.js` from disk) instead of retyping labels.

## Consequences
- No new component or colour is needed; the gallery renders all fifteen live.
- `idle` badges render in `ink-primary` (the base badge colour); `feedback.md` previously said `ink-secondary` and was corrected to match the shipped CSS.
- Screens must replace unknown numbers with a state (never `0` or `—`).

## Sources
`50_AGENTS/handoffs/universal-canon-v4/UNIVERSAL_CANON_v4.md` (Law 3, Evidence Standard); `10_DESIGN_SYSTEM/components/library/bundle.css` (`.pp-badge*`).
