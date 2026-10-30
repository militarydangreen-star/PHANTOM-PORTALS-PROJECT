#!/usr/bin/env python3
"""Validate every prompt in 20_PROMPT_LIBRARY against _schema/prompt.schema.json
and write 20_PROMPT_LIBRARY/INDEX.json.

  python3 80_TOOLS/index-prompts.py          # rebuild the catalog
  python3 80_TOOLS/index-prompts.py --check  # exit 1 if a prompt is invalid or the catalog is stale
"""
import argparse
import json
import re
import sys
from collections import Counter

from canon_common import CANON_VERSION, ROOT, dump_json, front_matter, rel, walk

BASE = ROOT / '20_PROMPT_LIBRARY'
INDEX = BASE / 'INDEX.json'
SCHEMA = json.loads((BASE / '_schema/prompt.schema.json').read_text())


def check(meta, path):
    errs = []
    for key in SCHEMA['required']:
        if key not in meta or meta[key] in ('', []):
            errs.append(f'missing {key}')
    for key, spec in SCHEMA['properties'].items():
        if key not in meta:
            continue
        v = meta[key]
        if 'enum' in spec and v not in spec['enum']:
            errs.append(f'{key}={v!r} not in {spec["enum"]}')
        if spec.get('type') == 'array' and not isinstance(v, list):
            errs.append(f'{key} must be a list')
        if 'pattern' in spec and isinstance(v, str) and not re.fullmatch(spec['pattern'], v):
            errs.append(f'{key}={v!r} does not match {spec["pattern"]}')
    for ref in meta.get('canon_refs', []) + meta.get('negative_refs', []):
        target = (ROOT / ref.split('#')[0])
        if not target.exists():
            errs.append(f'broken ref {ref}')
    return [f'{rel(path)}: {e}' for e in errs]


def build():
    prompts, problems = [], []
    for p in walk(BASE):
        if p.suffix != '.md' or p.name in ('README.md',) or '_schema' in p.parts:
            continue
        meta, body = front_matter(p.read_text())
        if meta is None:
            problems.append(f'{rel(p)}: no front matter')
            continue
        problems += check(meta, p)
        prompts.append({**{k: meta.get(k) for k in SCHEMA['properties'] if k in meta},
                        'path': rel(p), 'words': len(body.split())})
    ids = Counter(x.get('id') for x in prompts)
    problems += [f'duplicate id {i}' for i, n in ids.items() if n > 1]
    prompts.sort(key=lambda x: x.get('id', ''))
    return {'generated_by': '80_TOOLS/index-prompts.py', 'canon_version': CANON_VERSION, 'count': len(prompts),
            'by_category': dict(sorted(Counter(x.get('category') for x in prompts).items())),
            'by_status': dict(sorted(Counter(x.get('status') for x in prompts).items())),
            'prompts': prompts}, problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true')
    args = ap.parse_args()
    index, problems = build()
    text = dump_json(index)
    for p in problems:
        print('  PROBLEM', p)
    if args.check:
        stale = not INDEX.exists() or INDEX.read_text() != text
        if stale:
            print('  STALE 20_PROMPT_LIBRARY/INDEX.json — run python3 80_TOOLS/index-prompts.py')
        print(f'prompts: {index["count"]} indexed, {len(problems)} problems{", index stale" if stale else ""}')
        return 1 if (problems or stale) else 0
    INDEX.write_text(text)
    print(f'Wrote 20_PROMPT_LIBRARY/INDEX.json — {index["count"]} prompts, {len(problems)} problems')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
