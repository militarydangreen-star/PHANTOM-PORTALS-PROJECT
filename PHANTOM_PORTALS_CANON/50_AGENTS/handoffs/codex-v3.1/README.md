# Codex master handoff v3.1 — read this first

**Status: UNCLEAR.** Three files from the owner's Codex handoff, kept as received:

| File | What |
|---|---|
| [START_HERE.md](START_HERE.md) | Purpose, read order, the package's folder list, limitations |
| [COPY_PASTE_INTO_CODEX.txt](COPY_PASTE_INTO_CODEX.txt) | The master command pasted into Codex: visual law, UI law, implementation gates, safety rules |
| [MANIFEST_SHA256.txt](MANIFEST_SHA256.txt) | SHA-256 list of the 86 files the full package contained |

## What is missing
The handoff describes a package — `01_APPROVED_DESIGN_v3.1/` (frozen 38-file prototype, eight screen previews, tests), `02_MASTER_VISUAL_ASSETS_v2.0/` (layered `.ora`, emblem), `03_OPTIONAL_CHROMIUM_SEED_v0.1/` (Electron starter), `04_HISTORICAL_REFERENCE_DO_NOT_EXECUTE/`, and `docs/`. **None of those folders are in this canon** (conflict C-04). The manifest lets you verify the package if it turns up:

```bash
cd <folder containing the package> && sha256sum -c PHANTOM_PORTALS_CANON/50_AGENTS/handoffs/codex-v3.1/MANIFEST_SHA256.txt
```

## How it relates to the canon
- **Agrees:** white-forward Trash Polka × isometric, one hooded Phantom, blood crimson, offline, honest data, no destructive operations, retired alpine/brain/orange-sapphire-violet/ruby-gold looks.
- **Conflicts (C-03):** its UI law — eight top-level app pages (Home, Knowledge, Agents, Library, Tools, OS & ISOs, Projects, Cloud), a page-specific left sidebar, a right intelligence rail and a bottom AI workbench — is a different information architecture from the design system's utility rail + Command Center. Until the owner decides, the design-system shell is canon and the v3.1 pieces wait in the [component backlog](../../../10_DESIGN_SYSTEM/components/BACKLOG.md).
- **Visual authority:** the handoff calls v3.1 the frozen visual authority; the canon's visual authority is the design system (tokens + Ink Protocol). They point the same way, but where they differ the canon wins.

## Use it for
The engineering side — Electron/Chromium integration gates, IPC safety rules, portable Windows build, rollback and hashing — which the canon does not cover. Pair it with [project-instructions.md](../../project-instructions.md) so the visual work follows the canon.
