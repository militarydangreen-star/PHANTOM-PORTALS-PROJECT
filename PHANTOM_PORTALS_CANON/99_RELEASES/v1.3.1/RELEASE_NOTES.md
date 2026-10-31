# Polka Portals canon — v1.3.1

**Released 2026-10-31.** This patch makes the canon safe to publish on the public GitHub repository. Nothing visual changed from [1.3.0](../v1.3.0/RELEASE_NOTES.md), which is the rename to Polka Portals and the shield logo. Full list: [CHANGELOG](../../00_START_HERE/CHANGELOG.md).

## Changed
- **Local-only files.** 30 third-party and unverified reference files are never committed:
  - 25 inspiration images
  - 3 saved result pages
  - 2 UNCLEAR logos

  Their sidecars stay in the repository with each file's hash, size and origin, marked `"distribution": "local-only"`.
- **Tools.** `validate-canon.py` and `hash-manifest.py verify` treat local-only files as absent by design. Any other missing file still fails.
- **`.gitignore`** now ignores every `node_modules/` folder.

## Verified
- Owner's copy (all files present): `validate-canon.py` → 11/11.
- A fresh clone of the repository (local-only files absent): `validate-canon.py` → 11/11. `hash-manifest.py verify` on this release reports 0 changed and 0 missing, and lists the 30 local-only files as not present, which is expected.
- Git history: none of the 30 files is in any commit pushed to GitHub.

## Verify
```bash
cd PHANTOM_PORTALS_CANON
python3 80_TOOLS/hash-manifest.py verify 99_RELEASES/v1.3.1/MANIFEST.sha256
python3 80_TOOLS/validate-canon.py
```
In the owner's local copy, `sha256sum -c 99_RELEASES/v1.3.1/MANIFEST.sha256 --quiet` also works. In a public clone, add `--ignore-missing`, because the local-only files are absent there.
