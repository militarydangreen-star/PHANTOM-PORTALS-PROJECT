# Brain / neural HUD

**Status: optional** ([ADR-0009](../../00_START_HERE/decisions/ADR-0009-brain-hud-optional.md)). The Phantom hero is the default focal point. The holographic brain is **not** the homepage hero.

## When it may appear
- The owner explicitly asks for it, or an existing page already has it.
- It shows something real: model load, agent activity, a knowledge graph, network topology.

## How
- Subordinate to the white-forward design: ink wireframe and nodes on paper (or on a black HUD panel), crimson only on the active node or path, `accent-electric` for one pulse at a time.
- Isometric discipline: one projection, hairline edges, graduated rings — no neon cloud, no rainbow, no purple/cyan glow.
- Respect existing React Three Fiber / Three.js code; don't replace it with a different stack.
- Performance: render on demand, throttle to the data rate, pause when hidden, lazy-load, scale quality down.
- Accessibility: a text alternative describing what the HUD shows; keyboard access to any interaction; a **static fallback image** and a reduced-motion still state; never behind text or controls.
