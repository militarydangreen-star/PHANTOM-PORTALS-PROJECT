# ADR-0010: Statuses, register, validator gate, semantic versions, sealed archive

- **Status:** Accepted
- **Date:** 2026-10-29
- **Canon version:** 1.0.0

## Decision
1. **Statuses:** CURRENT, RETIRED, UNCLEAR, REFERENCE, DRAFT — defined in `00_START_HERE/README.md`. Every asset carries one in its sidecar; every canon item has one in `CANON_REGISTER.md`.
2. **Provenance:** every asset file has a `<file>.meta.json` sidecar with id, origin, licence, SHA-256 and usage rules. `80_TOOLS/index-assets.py --new` writes a starter sidecar.
3. **Gate:** nothing is committed or released unless `80_TOOLS/validate-canon.py` passes all of its checks (ten at 1.0.0, eleven at 1.1.0).
4. **Versions** (semantic versioning applied to the canon):
   - **major** — the visual canon changes (new palette, new Phantom, retiring a font);
   - **minor** — additions: new assets, prompts, components, docs, templates;
   - **patch** — fixes: typos, metadata, a broken link, a regenerated build with no value change.
5. **Releases:** `python3 80_TOOLS/hash-manifest.py release <version>` writes `99_RELEASES/v<version>/MANIFEST.sha256`; add `RELEASE_NOTES.md` and a CHANGELOG entry. Releases are never edited afterwards.
6. **Archive:** `90_ARCHIVE/` is read-only, sealed by `ARCHIVE_MANIFEST.sha256`. Adding to it is the only allowed change, followed by `hash-manifest.py archive`.
