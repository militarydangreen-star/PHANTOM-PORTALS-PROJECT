# Terminal and diagnostic table

Practical, clean and dense when required. **No grunge behind code or tabular data.**

## Terminal
A working console: `surface-inverse`, JetBrains Mono 13/20, selectable output, a real input line.
- Errors and warnings in `accent-crimson-on-inverse`; prompts and comments in `ink-on-inverse-secondary`.
- The title bar shows the actual shell, elevation and working directory.
- **Never fake output.** Pass real lines only; omit `onCommand` when the shell cannot accept input.
```tsx
<Terminal title={<><b>PS 7.4</b> · ADMIN · {cwd}</>} lines={lines} prompt="PS>"
  onCommand={(cmd) => shell.run(cmd).then(append)} />
```
`lines: { kind?: 'cmd' | 'out' | 'err' | 'dim', text, note? }[]`. Output is `aria-live="polite"`.

## DiagnosticTable
`surface-sunken` header, `border-default` row rules, numbers right-aligned in mono with tabular figures. The selected row gets `surface-crimson-soft` and a crimson leading edge.
- Status cells always use a **StatusBadge** (shape + word), never colour alone.
```tsx
<DiagnosticTable caption="Diagnostic results" rows={results} selectedId={sel} onSelect={setSel}
  columns={[{ key: 'check', label: 'Check' },
    { key: 'result', label: 'Result', render: (r) => <StatusBadge status={r.status}>{r.result}</StatusBadge> },
    { key: 'time', label: 'Time', numeric: true }]} />
```
Wide tables scroll horizontally inside their panel, never the page.
