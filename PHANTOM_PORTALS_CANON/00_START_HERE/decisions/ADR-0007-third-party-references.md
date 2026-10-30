# ADR-0007: Third-party references are moodboard-only and marked as such

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
The design system's INSPIRATION board holds 26 Trash Polka images (one duplicate) found online — tattoo work, stock vectors (some with Shutterstock or other watermarks), product mock-ups — plus three Google Images result pages. Two images in "essential assets" (a skull-and-wings "PHANTOM / TAGLINE" logo and an esports mascot) have no recorded origin.

## Decision
- Third-party images live only in `40_MOCKUPS/references/third-party/`, status **REFERENCE**, with a sidecar naming the original file and, where known, the source URL (`SOURCES.md`).
- They may be looked at for composition, ratio and mark-making. They are never shipped, traced, sampled, used as image-to-image inputs, or used to train or fine-tune a model.
- Files of unknown origin go to `references/unclear/` with status **UNCLEAR** until the owner confirms them.
- All shipped Trash Polka marks are project-original (the Ink Protocol vectors).

## Consequences
- Prompts describe the style in words; they never name living tattoo artists or ask to imitate a specific artist.
