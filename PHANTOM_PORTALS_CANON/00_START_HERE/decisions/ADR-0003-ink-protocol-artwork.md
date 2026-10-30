# ADR-0003: Ink Protocol artwork supersedes the v1 flat vectors

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
The first white-forward assets (v1, 17:04 UTC on 2026-10-29) were flat vectors: a low-poly hooded figure in a hex portal, icons at 1.75 px, 16 simple Trash Polka and HUD marks. Forty-eight minutes later the owner's design system replaced them with the **Ink Protocol** set: the hooded reaper with a faceted beaked mask, crimson eye slits and a crimson singularity, engraved and rim-lit, inside a graduated ring and dry-brush ensō; icons at 1.5 px; 19 vectors whose dry-brush marks are simulated from individual bristles.

## Decision
The Ink Protocol set is canon (`30_ASSETS/`, `10_DESIGN_SYSTEM/iconography/`). The v1 set is retired to `90_ARCHIVE/v1-flat-vectors-2026-10-29/`. The Ink Protocol philosophy (`visual-language/ink-protocol.md`) governs all new artwork.

## Consequences
- The Claude Design canvas mockups (`40_MOCKUPS/screens/`) were built on v1 art; they are marked UNCLEAR until rebuilt.
- The emblem SVGs are ~1.8 MB each: use the 512/2048 PNGs on screens.
- Clear space is a quarter of the emblem's width (the v1 rule of half its height is retired).
