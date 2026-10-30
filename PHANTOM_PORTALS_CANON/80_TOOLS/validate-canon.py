#!/usr/bin/env python3
"""The canon's quality gate. Run before every commit and every release:

  python3 80_TOOLS/validate-canon.py

Checks (each prints PASS/FAIL with details; exit 1 if any fail):
  tokens      build/ is fresh for tokens.json, and tokens.css keeps parity with the design system's original values
  contrast    every approved pairing in contrast-matrix.py passes
  sidecars    every asset has a valid sidecar whose sha256/bytes match the file
  mirrors     10_DESIGN_SYSTEM/iconography and 30_ASSETS/icons hold identical files
  indexes     30_ASSETS/INDEX.json and 20_PROMPT_LIBRARY/INDEX.json are current
  icons       iconography/icons.data.js matches the icon SVGs (build-icon-data.py)
  adapters    shadcn / Figma / Canva adapters are current and every pairing passes (build-adapters.py)
  links       relative links in Markdown resolve (archive and source snapshots excluded)
  retired     no retired-canon colours or fonts leak into CURRENT folders
  archive     90_ARCHIVE matches its sealed manifest (read-only)
  fonts       every font folder ships its OFL.txt
"""
import json
import re
import subprocess
import sys
from pathlib import Path

from canon_common import (ROOT, SIDECAR_REQUIRED, SIDECAR_ROOTS, STATUSES, load_sidecar, rel, sha256, sidecar_exempt, walk)

TOOLS = ROOT / '80_TOOLS'
results = []


def check(name):
    def deco(fn):
        def run():
            try:
                problems = fn() or []
            except Exception as e:  # a crashed check is a failed check
                problems = [f'check crashed: {e!r}']
            results.append((name, problems))
        return run
    return deco


# ---------------------------------------------------------------- tokens
def _vars(path):
    css = re.sub(r'/\*.*?\*/', '', Path(path).read_text(), flags=re.S)
    return {k: _norm(v) for k, v in re.findall(r'--([\w-]+):\s*([^;]+);', css)}


def _norm(v):
    v = v.strip().lower().replace('"', "'")
    v = re.sub(r'rgba\(([^)]*)\)', lambda m: 'rgba(' + ','.join(str(float(x)) for x in m.group(1).split(',')) + ')', v)
    v = re.sub(r'(?<![\d.])0px', '0', v)
    v = re.sub(r'\s+', ' ', v)
    return ', '.join(re.sub(r'^((?:inset )?\S+ \S+ \S+) 0 ', r'\1 ', layer.strip())
                     for layer in re.split(r',\s*(?![^()]*\))', v))


@check('tokens')
def tokens():
    p = []
    tdir = ROOT / '10_DESIGN_SYSTEM/tokens'
    stamp = tdir / 'build/.source.sha256'
    if not stamp.exists() or stamp.read_text().split()[0] != sha256(tdir / 'tokens.json'):
        p.append('build/ is stale for tokens.json — run 80_TOOLS/build-tokens.sh (or .ps1)')
    for f in ['tokens.css', 'typography.css', 'fonts.css', 'index.css', 'tokens.ts', 'tailwind.tokens.js', 'tailwind.theme.css',
              'tokens.resolved.json', 'tokens.global.js']:
        if not (tdir / 'build' / f).exists():
            p.append(f'missing build/{f}')
    original = ROOT / '10_DESIGN_SYSTEM/_source/claude-design-system/tokens.css'
    built, orig = _vars(tdir / 'build/tokens.css'), _vars(original)
    for k in sorted(orig.keys() - built.keys()):
        p.append(f'--{k} exists in the design system but not in the build')
    # Values may change on purpose; record that in a decision record and the changelog, then update the snapshot.
    for k in sorted(orig.keys() & built.keys()):
        if orig[k] != built[k]:
            p.append(f'--{k} differs from the design-system snapshot: {orig[k]} → {built[k]} (intended? add an ADR and refresh _source)')
    json.loads((tdir / 'tokens.json').read_text())
    return p


@check('contrast')
def contrast():
    r = subprocess.run([sys.executable, str(TOOLS / 'contrast-matrix.py')], capture_output=True, text=True)
    return [] if r.returncode == 0 else [line.strip() for line in r.stdout.splitlines() if 'FAIL' in line] or [r.stderr.strip()]


# ---------------------------------------------------------------- sidecars and mirrors
@check('sidecars')
def sidecar_check():
    p = []
    for base in SIDECAR_ROOTS:
        for f in walk(ROOT / base):
            if sidecar_exempt(f):
                continue
            if f.name.endswith('.meta.json'):
                meta = load_sidecar(f)
                asset = f.with_name(f.name[:-len('.meta.json')])
                missing = [k for k in SIDECAR_REQUIRED if k not in meta]
                if missing:
                    p.append(f'{rel(f)}: missing {", ".join(missing)}')
                if meta.get('status') not in STATUSES:
                    p.append(f'{rel(f)}: status {meta.get("status")!r} not in {sorted(STATUSES)}')
                if not asset.exists():
                    p.append(f'{rel(f)}: no file beside it')
                elif meta.get('sha256') != sha256(asset) or meta.get('bytes') != asset.stat().st_size:
                    p.append(f'{rel(asset)}: hash/bytes differ from its sidecar')
            elif not f.with_name(f.name + '.meta.json').exists():
                p.append(f'{rel(f)}: no sidecar')
    return p


@check('mirrors')
def mirrors():
    p = []
    pairs = [('10_DESIGN_SYSTEM/iconography/icons/svg', '30_ASSETS/icons/ui'),
             ('10_DESIGN_SYSTEM/iconography/icons/feature-svg', '30_ASSETS/icons/feature')]
    for a, b in pairs:
        fa = {f.name: sha256(f) for f in (ROOT / a).glob('*.svg')}
        fb = {f.name: sha256(f) for f in (ROOT / b).glob('*.svg')}
        if fa != fb:
            diff = sorted(set(fa.items()) ^ set(fb.items()))
            p.append(f'{a} and {b} differ: {", ".join(n for n, _ in diff)} — the design system copy is the source; re-copy it')
    return p


@check('indexes')
def indexes():
    p = []
    for script in ('index-assets.py', 'index-prompts.py'):
        r = subprocess.run([sys.executable, str(TOOLS / script), '--check'], capture_output=True, text=True)
        if r.returncode:
            found = [line.strip() for line in r.stdout.splitlines() if line.strip().startswith(('PROBLEM', 'STALE'))]
            p += found or [f'{script} failed: ' + (r.stderr.strip().splitlines() or [r.stdout.strip()])[-1]]
    return p


@check('adapters')
def adapters():
    r = subprocess.run([sys.executable, str(TOOLS / 'build-adapters.py'), '--check'], capture_output=True, text=True)
    return [] if r.returncode == 0 else [line.strip() for line in r.stdout.splitlines() if line.strip().startswith(('STALE', 'FAIL'))] or [r.stderr.strip()]


@check('icons')
def icons():
    r = subprocess.run([sys.executable, str(TOOLS / 'build-icon-data.py'), '--check'], capture_output=True, text=True)
    return [] if r.returncode == 0 else [(r.stdout.strip() or r.stderr.strip())]


# ---------------------------------------------------------------- docs
LINK = re.compile(r'(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)|!\[[^\]]*\]\(([^)\s]+)\)')
LINK_SKIP = ('90_ARCHIVE', '10_DESIGN_SYSTEM/_source', '10_DESIGN_SYSTEM/components/reference', '80_TOOLS/node_modules',
             '50_AGENTS/handoffs', '50_AGENTS/trashy-mr-polka-bot.agent.md')


@check('links')
def links():
    p = []
    for md in walk(ROOT):
        if md.suffix != '.md' or rel(md).startswith(LINK_SKIP):
            continue
        text = re.sub(r'```.*?```', '', md.read_text(), flags=re.S)
        text = re.sub(r'`[^`\n]*`', '', text)
        for m in LINK.finditer(text):
            target = (m.group(1) or m.group(2)).split('#')[0]
            if not target or re.match(r'^[a-z]+:', target):
                continue
            if not (md.parent / target).resolve().exists():
                p.append(f'{rel(md)}: broken link → {target}')
    return p


RETIRED = {
    '#d4af37': 'XerXes sovereign gold', '#8b5cf6': 'XerXes phantom purple', '#d1a64a': 'Operator sovereign gold',
    '#d7b982': 'Ruby Edition gold', '#f1d487': 'Operator highlight gold', '#866324': 'Operator deep gold',
    '#39ff88': 'Operator: Phantom Core', '#00e5ff': 'Operator: IT Technician', '#ff335f': 'Operator: Cybersecurity',
    '#ff7700': 'Operator: Recovery', '#a855f7': 'Operator: Forensics', '#14b8a6': 'Operator: Networking',
    '#ec4899': 'Operator: AI Operator', '#08090b': 'Ruby obsidian', '#080a0c': 'Operator obsidian',
    'cinzel': 'Ruby display font', 'montserrat': 'XerXes display font', 'ibm plex mono': 'Ruby/Operator mono',
    'bahnschrift': 'Operator command font',
}
RETIRED_SCOPE = ('10_DESIGN_SYSTEM', '20_PROMPT_LIBRARY', '30_ASSETS', '40_MOCKUPS/screens', '60_TEMPLATES')
RETIRED_ALLOW_MARK = 'canon-lint: allow-retired'
TEXT_EXT = {'.md', '.css', '.html', '.json', '.js', '.mjs', '.ts', '.tsx', '.txt', '.svg'}


@check('retired')
def retired():
    p = []
    for f in walk(ROOT):
        r = rel(f)
        if not r.startswith(RETIRED_SCOPE) or f.suffix not in TEXT_EXT or r.startswith(('10_DESIGN_SYSTEM/_source',)):
            continue
        text = f.read_text(errors='ignore')
        if RETIRED_ALLOW_MARK in text[:1500]:  # near the top, after any front matter
            continue
        low = text.lower()
        for needle, what in RETIRED.items():
            if needle in low:
                p.append(f'{r}: contains {needle} ({what}) — retired canon; add "{RETIRED_ALLOW_MARK}" at the top only if the file is about retired canon')
    return p


@check('archive')
def archive():
    m = ROOT / '90_ARCHIVE/ARCHIVE_MANIFEST.sha256'
    if not m.exists():
        return ['90_ARCHIVE/ARCHIVE_MANIFEST.sha256 missing — run 80_TOOLS/hash-manifest.py archive']
    p, listed = [], set()
    for line in m.read_text().splitlines():
        digest, path = line.split('  ', 1)
        listed.add(path)
        f = ROOT / '90_ARCHIVE' / path
        if not f.exists():
            p.append(f'archive file removed: {path}')
        elif sha256(f) != digest:
            p.append(f'archive file modified: {path} (the archive is read-only)')
    for f in walk(ROOT / '90_ARCHIVE'):
        path = f.relative_to(ROOT / '90_ARCHIVE').as_posix()
        if path != 'ARCHIVE_MANIFEST.sha256' and path not in listed:
            p.append(f'unsealed archive file: {path} (run hash-manifest.py archive after an intentional addition)')
    return p


@check('fonts')
def fonts():
    return [f'{rel(d)}: no OFL.txt' for d in sorted((ROOT / '30_ASSETS/fonts').iterdir()) if d.is_dir() and not (d / 'OFL.txt').exists()]


def main():
    for fn in (tokens, contrast, sidecar_check, mirrors, indexes, icons, adapters, links, retired, archive, fonts):
        fn()
    failed = 0
    for name, problems in results:
        print(f'{"PASS" if not problems else "FAIL"}  {name}' + (f' ({len(problems)})' if problems else ''))
        for msg in problems[:25]:
            print(f'      - {msg}')
        if len(problems) > 25:
            print(f'      … {len(problems) - 25} more')
        failed += bool(problems)
    print(f'\n{len(results) - failed}/{len(results)} checks passed')
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
