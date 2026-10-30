# Materials, geometry and energy

## Working the dark materials

Depth comes from stacking materials, not from shadows. A workspace is Void; a panel region is Carbon; a card inside it is Graphite; the seam between them is Gunmetal at one pixel. That progression is readable in the dark because each step is a real material change, which is why one flat dark background never works here.

Smoked Glass sits above all of it and is the only translucent material. It appears on the command palette, floating utility panels and contextual HUD layers — and always with an opaque fallback, because blur is a finish, not a structure.

## The Phantom Cut

The chamfer is the system's recognizable corner. Upper-right by default; lower-left when a panel's weight sits the other way.

Apply it to important panels, operator cards, command modules, modal architecture and large buttons. Do not apply it to table rows, inputs, chips, menu items or anything that repeats more than a few times on a screen — a cut on everything is a texture, not a signature.

## The Phantom Line

Neutral line, gold node, operator-energy segment, in that order and that direction. The gold node is the hinge: brand on one side, operator on the other.

It goes above section headers, between modules, along panel titles and through navigation. One per section. A screen with a Phantom Line on every element has no Phantom Line.

## Energy discipline

Operator energy is electrical, not atmospheric. It is narrow, directional, edge-bound, reactive and temporary. A 1–2px illuminated border, a rail on a selected row, a leading edge on a scan, a series on a chart.

`op-ghost` at 14% is the only form in which operator colour covers area, and it is reserved for a selected row or an active tile. There is exactly one `shadow-op-edge` on screen at a time. Large fuzzy neon glows are the failure mode this rule exists to prevent.

## Gold discipline

Gold appears as line, node, edge and emblem detail — almost never as fill, and never as a general-purpose highlight. A Gold Command button is reserved for rare high-level Phantom actions; if two appear on one screen, one of them is not a Gold Command.

## Crimson discipline

Crimson introduces danger, urgency, security tension and atmosphere. `blood-crimson` and `deep-blood` are atmospheric; `signal-crimson` draws an alert edge; `bright-crimson` writes the word. Red does not appear anywhere else, which is what makes it mean something when it does.
