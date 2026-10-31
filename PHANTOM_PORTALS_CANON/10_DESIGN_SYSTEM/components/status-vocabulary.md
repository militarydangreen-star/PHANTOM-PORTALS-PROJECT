# Status vocabulary — truthful states

Polka Portals never shows a state it has not established. These are the only words a screen, report or agent may use for capability and evidence, adopted from [Universal Canon v4](../../50_AGENTS/handoffs/universal-canon-v4/README.md) Law 3 and its evidence standard ([ADR-0012](../../00_START_HERE/decisions/ADR-0012-status-vocabulary.md)). The machine-readable copy is [`status-vocabulary.json`](status-vocabulary.json) — import it instead of retyping labels.

## How a state is drawn
Every state renders as a [`StatusBadge`](feedback.md#statusbadge): **shape + colour + word**, never colour alone (WCAG 1.4.1). Ten states share five shapes by severity class; the word tells states within a class apart.

| Badge | Shape | Colour token | Contrast on `surface-primary` | Class |
|---|---|---|---:|---|
| `ok` | circle | `status-success` | 6.46:1 | Established and good |
| `warn` | triangle | `status-warning` | 6.33:1 | Uncertain — needs attention before trusting it |
| `error` | diamond | `status-error` (= `accent-crimson`) | 8.05:1 | Tried and failed |
| `idle` | square | `ink-primary` (the base badge colour) | 18.21:1 | Not available — a fact, not a failure |
| `run` | spinning ring | `ink-primary` | 18.21:1 | Transient: a check is running right now (`role="status"`) |

## Capability states
| Code | Label (exact text) | Badge | Icon | Means | Offer |
|---|---|---|---|---|---|
| `READY` | Ready | `ok` | `check` | Verified working now: the tool launched, the service answered, the reading was measured. | Run / open |
| `PENDING_VERIFICATION` | Pending verification | `warn` | `reload` | Present or configured, not yet confirmed working. | Verify |
| `SAMPLE` | Sample | `warn` | `diagnostics` | Placeholder or demonstration data. Never shown without this label. | Connect a real source |
| `UNKNOWN` | Unknown | `warn` | `search` | No information either way — e.g. the bridge did not report this field. | Check |
| `ERROR` | Error | `error` | `alert` | Tried and failed. Show the failure text and the next step. | Retry / view log |
| `NOT_CONNECTED` | Not connected | `idle` | `network` | The service exists but is not running or not reachable (e.g. launcher on localhost:9192, telemetry on :9191). | Start / connect |
| `OFFLINE` | Offline | `idle` | `cloud` | Needs the network, and the machine is offline. Local features keep working. | Use offline alternative |
| `UNAVAILABLE` | Unavailable | `idle` | `close` | Not present on this drive or machine (missing tool, missing hardware). | Explain why |
| `DISABLED` | Disabled | `idle` | `power` | Turned off on purpose by the operator or policy. | Enable (if allowed) |
| `UNSUPPORTED` | Unsupported | `idle` | `close` | Cannot work in this environment (OS, WinPE, architecture, browser). | Explain where it works |

While a state is being established, show `run` with a verb ("Checking driver store…"), then the resulting state. Never leave a `run` badge without a timeout that resolves to `UNKNOWN` or `ERROR`.

## Evidence labels (reports, release notes, the agent ledger)
| Code | Label | Badge | Means |
|---|---|---|---|
| `VERIFIED` | Verified | `ok` | Inspected, executed or measured, with evidence linked. |
| `PARTIALLY_TESTED` | Partially tested | `warn` | Some paths exercised; the gap is named. |
| `UNVERIFIED` | Unverified | `warn` | Present or expected; not confirmed. |
| `IMPLEMENTED` | Implemented | `idle` | Built and syntax-checked; not exercised in the target environment. |
| `PROPOSED` | Proposed | `idle` | Designed only. |

## Commands
A command preview shows the exact text and the label **Copied — not run** until the Local Launcher (`localhost:9192`) or an explicit operator action runs it. Never style a preview as executed output.

## Rules
- Use the exact labels above — no synonyms ("Online", "Good", "Live", "OK") and no invented states.
- `SAMPLE` data carries the `warn` badge everywhere it appears, including charts, tables and screenshots.
- A measured value shows its unit and, where it matters, its time ("Disk C: 91 % · 14:02"); an unmeasured one shows the state instead of a number.
- In `StatusPanel` metrics, a state replaces the value: `{ label: 'GPU', value: 'Unavailable' }` — never `0` or `—` for "unknown".
- Screen readers: badges are text, so they are read; for live changes wrap the region in `role="status"` (errors: `role="alert"`).

```tsx
import vocab from './status-vocabulary.json';
const S = Object.fromEntries(vocab.capability_states.map((s) => [s.code, s]));
<StatusBadge status={S.NOT_CONNECTED.badge}>{S.NOT_CONNECTED.label}</StatusBadge>   // ■ Not connected
```
