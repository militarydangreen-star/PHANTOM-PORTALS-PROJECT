# Third-party tools (licensed to the owner, not stored here)

Tools the owner has bought or licensed. **The files are not in this canon** — they are paid products that may not be redistributed, and this canon may be pushed to a public repository. Each row records what the tool is, the exact file the owner has (so it can be verified), and how to use it with the canon.

## DGAS Design — "Trash Polka" Photoshop action
Status **REFERENCE** (register CR-066). Received 2026-10-30 as `trash-polka-photoshop-action-2023-11-27-04-52-25-utc.zip` — 2208263 bytes, SHA-256 `9f0adf31e32bee371698e6463bd0a3bdbec6e6e1aa2024c0d347f477a2013250`. The name follows the Envato Elements download pattern; the licence certificate is in the owner's marketplace account (check it before commercial use).

| Member | Bytes | SHA-256 |
|---|---:|---|
| `Help.jpg` | 391,350 | `b99c257fd970cdf1…` |
| `Trash Polka.atn` | 93,147 | `ba41bd5b3a51fb14…` |
| `Trash Polka_Brushes.abr` | 6,636,479 | `9560e04e6d04913b…` |
| `Trash Polka_Patterns.pat` | 951,788 | `3c9af53411b15fa4…` |
| `Video Tutorial.txt` | 43 | `59cb4f9e7b80e597…` |

What it is: a Photoshop action (`.atn`) with its brush set (`.abr`) and patterns (`.pat`) that turns a photo into a red/black/white Trash Polka collage. Per its `Help.jpg`: RGB 8-bit, English Photoshop, photo 2000–3000 px, background unlocked from layer, then paint the subject on a new layer named `brush` and play the action. Video guide: https://www.youtube.com/watch?v=K9s0yrR2pMQ. It runs only in Adobe Photoshop on the owner's machine.

### Using it with the canon
1. Source image: the owner's own photos, or the Phantom renders in `30_ASSETS/brand/phantom-hero` (2048 px emblem or Plate 01). Never a third-party reference image from `inspiration/`.
2. After the action: map its reds to the canon inks — a Gradient Map or Selective Color pass so solid reds land on `#A0112B` (UI-adjacent art) or `#B8143E` (large art), blacks on `#151519`, whites on `#F6F5F2`.
3. Review with [PP-AUD-IMAGE-001](../../../../20_PROMPT_LIBRARY/design-audit/PP-AUD-IMAGE-001-generated-image-review.md) and [PP-AUD-BALANCE-001](../../../../20_PROMPT_LIBRARY/design-audit/PP-AUD-BALANCE-001-trash-polka-balance.md).
4. Save accepted results into `30_ASSETS` with a sidecar: `source.tool` = "DGAS Trash Polka action (licensed)", `license` naming the action's licence, status DRAFT.
5. Do not export, extract or share the action's brushes or patterns as files.

## shadcn/ui source (MIT)
Status **REFERENCE** (register CR-067). Received 2026-10-30 as `ui-main.zip` (the shadcn/ui monorepo, 7,122 entries). Not copied here; used as the source of truth for the `registry:theme` format and CSS-variable names of the [shadcn adapter](../../../../10_DESIGN_SYSTEM/adapters/shadcn/README.md). Licence: MIT, © 2023 shadcn.
