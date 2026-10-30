# CommandModule

A native `<details>/<summary>` module with a mono crimson ID, a Space Grotesk title and a chevron that turns on open. Use for dense command groups in sidebars and the Command Center.

## React

```tsx
import { CommandModule } from 'phantom-portals'; // or window.PhantomPortals

<CommandModule moduleId="MOD-04" title="Recovery Toolkit" defaultOpen>
  <ToolList tools={recoveryTools} />
</CommandModule>
```

Props: see `CommandModuleProps` in `components/index.d.ts`.
