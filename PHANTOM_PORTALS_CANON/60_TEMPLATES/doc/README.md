# Document template

[`document.template.md`](document.template.md) — a Markdown skeleton for specs, proposals, reports and handover notes: front matter (id, status, version, canon version, related canon files), a summary box, context, content, canon impact, risks, next steps, changelog.

- **Decisions** do not use this template — they are ADRs in [`00_START_HERE/decisions/`](../../00_START_HERE/decisions/README.md) (copy `TEMPLATE.md` there).
- **Where documents live:** inside the canon only if they become canon (a foundation doc, a component doc, a register change). Working documents belong with the project they describe.
- **Rendering:** any Markdown renderer works. For a branded PDF, render to HTML, link `10_DESIGN_SYSTEM/tokens/build/index.css` and set `body { font-family: var(--font-sans); }`, `h1, h2, h3 { font-family: var(--font-heading); }`, `code { font-family: var(--font-mono); }`, then print from Chromium.
