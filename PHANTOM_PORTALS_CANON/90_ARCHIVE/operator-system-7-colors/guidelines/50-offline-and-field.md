# Offline, performance and portability

## Offline-first

Phantom Portals must remain fully functional without internet access. Never require CDN resources, Google Fonts, remote icons, remote JavaScript, remote CSS or externally hosted images.

This system holds to that: `components/bundle.css` fetches nothing, every preview is self-contained, and the type stacks fall back to faces already present on the machine. When licensed Command, Interface and Technical faces are available, bundle them under `fonts/` and list them in `tokens.json` so the system carries its own type.

## Performance tiers

**ULTRA** — all approved visual effects.
**STANDARD** — balanced. The default.
**FIELD** — minimal GPU overhead: reduced blur, particles, environmental effects and shadow complexity.

Functionality is identical across all three. A tier changes what the machine renders, never what the technician can do.

## Portable paths

Never assume `C:\`, `D:\`, `E:\` or any fixed location. Resolve against the executable, the launcher, the detected project root or the runtime location. Visual assets use portable relative paths too — an emblem that only loads from one drive letter is a broken emblem.

## Responsive behaviour

Desktop-first, laptop-capable. As space narrows, hold this priority: current task, navigation, primary commands, critical status, context, secondary telemetry, decorative elements.

Collapse secondary surfaces rather than shrinking everything. The context panel goes first, then the navigation rail collapses to icons, then telemetry condenses. Tables scroll; they do not compress.
