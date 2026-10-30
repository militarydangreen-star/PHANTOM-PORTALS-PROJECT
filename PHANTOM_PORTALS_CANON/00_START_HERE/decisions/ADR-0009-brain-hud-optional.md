# ADR-0009: The 3D brain / neural HUD is optional, never the default hero

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
The Codex v3.1 handoff lists "holographic brain as required homepage hero" as no longer active. The agent brief allows a central animated brain or network display "when explicitly requested or already part of the page".

## Decision
The Phantom hero is the default focal point. A 3D brain / neural HUD may appear only where it shows real system or AI activity, when the owner asks for it or an existing page already has it. It is subordinate to the white-forward design, optional, performant, and has a static fallback and a reduced-motion end state. Rules: `10_DESIGN_SYSTEM/motion-vfx/brain-hud.md`.
