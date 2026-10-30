# AIResponse

AI answers sit on a calm white card (`radius-12`): a mono header naming the model and whether it ran locally, the answer in body type, inline `code`, linked sources, then actions.

Always show sources and the provider honestly; if no model is configured, say so in the header instead of rendering an empty answer.

## React

```tsx
import { AIResponse } from 'phantom-portals'; // or window.PhantomPortals

<AIResponse model="PHANTOM AI" local sources={answer.sources}
  actions={<><Button>Rerun Test</Button><Button variant="ghost">Copy</Button></>}>
  {answer.text}
</AIResponse>
```

Props: see `AIResponseProps` in `components/index.d.ts`.
