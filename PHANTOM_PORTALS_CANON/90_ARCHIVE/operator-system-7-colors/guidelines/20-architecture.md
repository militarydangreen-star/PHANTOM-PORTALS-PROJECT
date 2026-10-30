# Application architecture

```
┌───────────────────────────────────────────────┐
│ COMMAND MASTHEAD                              │
├──────────┬──────────────────────────┬─────────┤
│ NAV      │      WORKSPACE           │ CONTEXT │
│ RAIL     │                          │ PANEL   │
├──────────┴──────────────────────────┴─────────┤
│ SYSTEM TELEMETRY / STATUS RAIL                │
└───────────────────────────────────────────────┘
```

## The zones

**Masthead** — emblem, system mark, active operator, workspace, system state, search and command palette. Height stays controlled: it is part of the machine, not a website header.

**Navigation rail** — narrow and structural, icon plus label, `rail-expanded` or `rail-collapsed`. The active item takes an operator edge, a ghost wash and a structural notch. Never large filled navigation buttons.

**Workspace** — calm. Priority: task, tools, current data, context, telemetry, atmosphere. Do not fill every square inch; deliberate empty space is part of the architecture.

**Context panel** — tool or device details, selected item, quick actions, AI assistance, logs, properties, documentation. Collapses when unnecessary.

**Telemetry rail** — CPU, RAM, storage, network, USB root, online state, active process, operator, build, environment. Concise, and never fake.

## The command center home

Not a wall of equal cards. Strong hierarchy: a primary command region for the current operator and major workflow, then system overview, active operations, quick launch, device environment, recent activity, and Phantom AI where it applies.

## Cards

A card represents an actual object or task — a command, a tool, a device, a status, an analysis, an operation, a resource. Not every sentence goes in a card.

Default: Carbon or Graphite, a 1px neutral border, a very subtle inner highlight, minimal shadow, restrained corner treatment, **no permanent glow**. Hover brightens the border and lifts slightly. Selected shows a visible operator-energy rail, stronger text and optionally a low-opacity energy wash.

## Tables

Technical tables are first-class. Compact rows, strong headers, sticky header where useful, filtering, sorting, search, row selection, expandable details, status icons, right-aligned numerics. Resist converting structured technical data into decorative cards.

## Status language

One vocabulary, everywhere: `READY` `ACTIVE` `SCANNING` `PROCESSING` `CONNECTED` `OFFLINE` `DEGRADED` `WARNING` `FAILED` `COMPLETE` `VERIFIED` `UNKNOWN`.

Always text plus visual state. Colour never carries the meaning by itself.

## Component creation rule

Before inventing a component: check whether an existing one can carry the use case; extend an existing one where reasonable; create a new one only when the interaction is genuinely different; and fold any new shared visual behaviour back into this system. This is what prevents visual fragmentation.
