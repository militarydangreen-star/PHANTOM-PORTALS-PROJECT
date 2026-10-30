<!-- PP-CYBERPUNK-DIRECTION-20261017:BEGIN -->
> **Current owner direction — October 17, 2026:** **CYBERPUNK applies to ALL Phantom Portals and PHANTOM USB designed surfaces.** Use HUD styling for nearly all buttons and toolbars; treat 3D graphics and usable holographic terminals as core product systems. The working main-page concept is a high-tech cockpit with the actual Phantom Portals emblem/logo as a rear hero image and the neural brain in the central projection bay. Read [Cyberpunk design direction](CYBERPUNK_DESIGN_DIRECTION.md) and [cockpit brief](PhantomPortals/docs/design/CYBERPUNK_COCKPIT_BRIEF.md). This supersedes conflicting older Forest, Blood Badger, Ruby-only and October 16 visual instructions, including separate portable-surface styling. Preserve working functionality, source/data, launch paths and unrelated changes. The Master Prompt Folder remains an architecture/workflow reference; this notice adopts design direction, not a claim that every surface is already redesigned.
<!-- PP-CYBERPUNK-DIRECTION-20261017:END -->

# UNIVERSAL CANON v4.0 — Phantom USB Tactical Workbench

**Effective:** 2026-10-15  
**Authority:** Owner's latest request wins over this file, `AGENTS.md`, `CANONICAL.md`, `docs/`, and any earlier policy.  
**Layout:** Numbered pillars `01`–`20` (`NN_UPPER_SNAKE`) + `PhantomPortals\` Workbench + Root Boot Invariants. Active pillars today: `01`–`09`. Slots `10`–`20` are reserved for owner-authorized expansion.

This is the single source of truth for Gemini 4, Antigravity, Grok Bot, OpenAI Codex, Claude, Cursor, and Local Phantom AI. Older 13-sector maps and Ruby/Reaper visual locks are reference history only.

---

## Law 1 — Architecture Law

| Path | Role |
|------|------|
| `01_BOOT_ISOS\` | Ventoy multi-boot ISOs, WinPE, UEFI/EFI firmware tools |
| `02_PORTABLE_ARSENAL\` | Deduplicated zero-install technician tools & suites |
| `03_DFIR_SECURITY\` | Forensics, IR, malware scanners, crypto vaults, DFIR OVAs |
| `04_DEPLOY_DRIVERS_VMS\` | Offline installers, drivers, VirtualBox/VMware, lab simulators |
| `05_AUTOMATION_RUNBOOKS\` | Field playbooks, PowerShell triage, PhantomCLI, tactical engines |
| `06_AI_AND_KNOWLEDGE\` | PHANTOM_AI stack, Kiwix ZIMs, IT library & certs |
| `07_DEV_FORGE\` | Portable runtimes, curated GitHub repos, media/theme studio |
| `08_VAULT_ARCHIVE\` | Credentials, staged duplicates (~180 GB), legacy history, dotfiles |
| `09_PHANTOM_BRAIN\` | Phantom Brain — neural graph / local brain service (**Claude primary build owner**) |
| `10_` … `20_` | Reserved numbered pillars — create only with owner authorization; same `NN_UPPER_SNAKE` rule |
| `PhantomPortals\` | Authoritative web + native + CLI workbench (50+ add-ons) |
| Root boot invariants | `ventoy\`, `memtest86.efi`, `startup.nsh`, `autorun.inf`, `phantom-drive.ico` |

Root stays ultra-clean: launchers (`START_PHANTOM.cmd`, `START_WORKBENCH.cmd`), `00_START_HERE.md`, identity files, and numbered pillars only. **No spaces in root folder names.** `09_PHANTOM_BRAIN\` is a valid numbered root pillar and Claude's build surface — agents must NEVER delete, rename, or relocate it under `06_AI_AND_KNOWLEDGE\` (including `...\03_INTERFACES\PhantomBrain`). Non-conforming names (e.g. `Phantom Brain`) are archived under `08_VAULT_ARCHIVE\02_LEGACY_HISTORY\_ROOT_SPACED_NAMES\`, never left at root. No plain-text recovery codes at root.

---

## Law 2 — Portability Law

- Never hardcode `J:`. Resolve the drive via `%~d0`, `$PSScriptRoot`, `Split-Path`, or `location.pathname`.
- Prefer relative links in HTML/JS. Absolute drive letters break when the USB remounts.
- Scripts that must accept a root accept `$DriveRoot` / `$env:PHANTOM_ROOT` with fallback to script location.

---

## Law 3 — Truthful Telemetry & Execution Law

Preserve the honest capability states: `READY`, `NOT_CONNECTED`, `PENDING_VERIFICATION`, `SAMPLE`, `UNAVAILABLE`, `ERROR`, `DISABLED`, `OFFLINE`, `UNSUPPORTED`, `UNKNOWN`.

- Never label a modeled or unmeasured value as verified.
- Command previews show exact text (`Copied — not run`) until the Local Launcher (`localhost:9192`) or an explicit operator action runs them.
- Telemetry bridge (`localhost:9191`) reports only measured facts.

---

## Law 4 — Visual direction (Cyberpunk)

CYBERPUNK is the current design direction for every Phantom Portals and PHANTOM USB designed surface. Use HUD styling for nearly all buttons/toolbars, core interactive 3D graphics and usable holographic terminals. The working main-page concept is a high-tech cockpit with the actual Phantom emblem/logo as rear hero and the neural brain in the central projection bay.

Read [CYBERPUNK_DESIGN_DIRECTION.md](CYBERPUNK_DESIGN_DIRECTION.md) for scope and [cockpit brief](PhantomPortals/docs/design/CYBERPUNK_COCKPIT_BRIEF.md) for composition. Recommended materials are obsidian/carbon, smoked glass, dark alloy, cyan/magenta emissions, restrained amber and platinum text, with ruby available for Phantom identity. These are evolving design recommendations, not a frozen token lock.

Apply through compatible website, Brain, shell, launcher, terminal, boot-menu, icon and documentation presentation. Preserve working code/data, source art, boot behavior and third-party binaries. Readable type, visible keyboard focus, semantic controls and reduced-motion support remain required.

---

## Law 5 — Multi-Agent Federation Law

Synchronized profiles and shared handoff:

| Agent | Profile / Entry |
|-------|-----------------|
| Gemini 4 | `GEMINI.md`, `.gemini/` |
| Antigravity | `.antigravity/rules.md` |
| Grok Bot | `.grok/AGENTS.md` |
| OpenAI Codex | `.codex/agents/phantom_architect.toml` |
| Claude | `.claude/agents/phantom-architect.md` |
| Cursor / Local | `AGENTS.md`, `.github/agents/` |
| Local Phantom AI | `06_AI_AND_KNOWLEDGE\01_PHANTOM_AI\` (llama.cpp / Heretic / Hermes) |

Shared ledger: `06_AI_AND_KNOWLEDGE\01_PHANTOM_AI\06_AGENTS\SHARED_LEDGER\`  
Handoff: `PhantomPortals\docs\WEBSITE-HANDOFF.md` + Notion hub `https://app.notion.com/p/3f8b49425c4a81aab24bd875f3dcc570`

Do not overwrite another agent's uncommitted work. Record exact paths, checks run, and remaining work in the shared ledger.

---

## Evidence Standard

| Label | Meaning |
|-------|---------|
| **VERIFIED** | Inspected, executed, or measured with evidence |
| **IMPLEMENTED** | Built / syntax-checked; not exercised in target env |
| **PROPOSED** | Designed only |
| **UNVERIFIED** | Present or expected; not confirmed |
| **PARTIALLY TESTED** | Some paths exercised; gap named |

---

## Credential & Vault Rules

- Recovery codes and secrets live only in `08_VAULT_ARCHIVE\00_CREDENTIALS_PROTECTED\` (git-ignored).
- Indexers, search, and catalogs **must exclude** that folder.
- Staged duplicates in `01_STAGING_DUPLICATES\` are review-before-delete. Use `Reclaim-StagedSpace.ps1 -DryRun` first.
- Every structural move is logged in `08_VAULT_ARCHIVE\REBUILD_TRANSACTION_LEDGER.json`.

---

## Read With This Canon

- `AGENTS.md` — operator / agent standing orders  
- `GOAL.md` — what winning looks like  
- `DECISIONS.md` — what already stands  
- `QUALITY.md` — screen / craft bar  
- `CANONICAL.md` — dated evidence ledger (may lag; Laws above win on layout)

Owner overrides any of them in the current request.
