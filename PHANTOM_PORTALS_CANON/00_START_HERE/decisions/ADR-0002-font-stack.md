<!-- canon-lint: allow-retired -->
# ADR-0002: Inter · Space Grotesk · JetBrains Mono, shipped locally as WOFF2

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Context
Earlier directions used Cinzel (Ruby), Montserrat (XerXes), IBM Plex Mono (Ruby/Operator) and Bahnschrift (Operator). The current design system specifies three roles and forbids font CDNs.

## Decision
- **Inter** — body, navigation, interface controls (400, 500, 600).
- **Space Grotesk** — page titles, section headings, statistics (500, 600, 700).
- **JetBrains Mono** — terminal output, identifiers, timestamps, telemetry (400, 500).

The eight Latin-subset WOFF2 files ship in `30_ASSETS/fonts/<family>/` with the SIL Open Font License 1.1 (`OFL.txt`). `tokens/build/fonts.css` declares them. Fallback stacks: `Inter, "Segoe UI", system-ui, sans-serif` · `"Space Grotesk", Inter, "Segoe UI", sans-serif` · `"JetBrains Mono", "Cascadia Mono", Consolas, monospace`.

Never use distressed or decorative fonts for functional information. Display lettering in artwork (posters, plates) may be outlined Space Grotesk or JetBrains Mono, as the wordmark is.

## Consequences
- Non-Latin text falls back to system fonts. If the product needs other scripts, add full-coverage WOFF2 files in a new ADR.
- Keep each `OFL.txt` beside its fonts whenever they are redistributed.
