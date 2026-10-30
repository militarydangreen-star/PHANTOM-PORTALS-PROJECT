# Terminal

A working console: `surface-inverse`, JetBrains Mono 13/20, selectable output, a real input line. Errors and warnings use `accent-crimson-on-inverse`; prompts and comments use `ink-on-inverse-secondary`.

Never fake output to look busy. Show the actual shell, elevation and working directory in the title bar.

## React

```tsx
import { Terminal } from 'phantom-portals'; // or window.PhantomPortals

<Terminal title={<><b>PS 7.4</b> · ADMIN · {cwd}</>} lines={lines}
  onCommand={(cmd) => shell.run(cmd).then(append)} />
```

Props: see `TerminalProps` in `components/index.d.ts`.
