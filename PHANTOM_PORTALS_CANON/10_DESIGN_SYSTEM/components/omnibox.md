# Omnibox

The single entry point for search and commands. The browser-shell address bar and the Command Center's central AI / search field are the same component.

- 44 px (`omnibox-height`), white field, `border-control` boundary, `inset-well` depth.
- **Focus:** the boundary becomes a 2 px `accent-crimson` inset ring and a crimson spine draws on the left edge.
- **Command mode:** a leading `>` switches to commands — the consumer handles it in `onSubmit`. Show the shortcut in a `kbd` (`shortcut="CTRL K"`).
- Placeholder in `ink-secondary` (7.66:1) so it stays readable.
- The consumer provides the label text (visually hidden is fine), the results list and keyboard handling.

```tsx
<Omnibox placeholder="Search tools, docs, machines — or type > for commands"
  shortcut="CTRL K" onSubmit={(q) => (q.startsWith('>') ? runCommand(q.slice(1)) : search(q))} />
```
Props: `label` (accessible name, default "Search or run a command"), `icon` (default `search`), `shortcut`, `onSubmit(value)`, plus any `<input>` attribute.

**Codex v3.1 note:** the handoff separates the omnibox (URLs, web search, internal routes) from page search and from the AI prompt. When the AI workbench lands ([backlog](BACKLOG.md)), keep the omnibox for routes and search and give the AI its own field.

Never put art behind the omnibox or its results. On phones it spans the full width.
