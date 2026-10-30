# DiagnosticTable

Diagnostic results: `surface-sunken` header, `border-default` row rules, numbers right-aligned in mono with tabular figures. The selected row gets `surface-crimson-soft` and a crimson leading edge.

Status cells always use a **StatusBadge** (shape + word), never colour alone. Keep Trash Polka artwork away from tables.

## React

```tsx
import { DiagnosticTable } from 'phantom-portals'; // or window.PhantomPortals

<DiagnosticTable caption="Diagnostic results" rows={results} selectedId={sel} onSelect={setSel}
  columns={[{ key: 'check', label: 'Check' },
    { key: 'result', label: 'Result', render: (r) => <StatusBadge status={r.status}>{r.result}</StatusBadge> },
    { key: 'time', label: 'Time', numeric: true }]} />
```

Props: see `DiagnosticTableProps` in `components/index.d.ts`.
