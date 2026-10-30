#!/usr/bin/env python3
"""SHA-256 manifests for releases and the read-only archive.

  python3 80_TOOLS/hash-manifest.py release 1.0.0      # write 99_RELEASES/v1.0.0/MANIFEST.sha256 for the whole canon
  python3 80_TOOLS/hash-manifest.py verify 99_RELEASES/v1.0.0/MANIFEST.sha256
  python3 80_TOOLS/hash-manifest.py archive            # (re)seal 90_ARCHIVE/ARCHIVE_MANIFEST.sha256 — only when adding to the archive

Format is `sha256sum`-compatible (`<hash>  <path>`), so `sha256sum -c` works from
the canon root on Linux/macOS, and `verify` works everywhere Python does.
Excluded: 99_RELEASES/, 80_TOOLS/node_modules/, .git/, caches.
"""
import sys
from pathlib import Path

from canon_common import ROOT, rel, sha256, walk

EXCLUDE_TOP = {'99_RELEASES'}


def files_for_release():
    for p in walk(ROOT):
        top = p.relative_to(ROOT).parts[0]
        if top in EXCLUDE_TOP or p.name in ('.DS_Store', 'Thumbs.db'):
            continue
        yield p


def write(manifest, files, base=ROOT):
    lines = [f'{sha256(p)}  {p.relative_to(base).as_posix()}' for p in files]
    manifest.parent.mkdir(parents=True, exist_ok=True)
    manifest.write_text('\n'.join(lines) + '\n')
    print(f'Wrote {rel(manifest)} — {len(lines)} files')


def verify(manifest):
    manifest = Path(manifest).resolve()
    base = ROOT if manifest.parent.parent.name == '99_RELEASES' else manifest.parent
    bad = missing = 0
    listed = set()
    for line in manifest.read_text().splitlines():
        digest, path = line.split('  ', 1)
        listed.add(path)
        p = base / path
        if not p.exists():
            missing += 1
            print('  MISSING', path)
        elif sha256(p) != digest:
            bad += 1
            print('  CHANGED', path)
    print(f'{rel(manifest)}: {len(listed)} listed, {bad} changed, {missing} missing')
    return 1 if (bad or missing) else 0


def main(argv):
    if len(argv) >= 2 and argv[0] == 'release':
        version = argv[1].lstrip('v')
        write(ROOT / f'99_RELEASES/v{version}/MANIFEST.sha256', files_for_release())
        return 0
    if len(argv) >= 2 and argv[0] == 'verify':
        return verify(argv[1])
    if argv[:1] == ['archive']:
        archive = ROOT / '90_ARCHIVE'
        files = [p for p in walk(archive) if p.name not in ('ARCHIVE_MANIFEST.sha256',)]
        write(archive / 'ARCHIVE_MANIFEST.sha256', files, base=archive)
        return 0
    print(__doc__)
    return 2


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
