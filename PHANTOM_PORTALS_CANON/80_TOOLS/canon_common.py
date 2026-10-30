"""Shared helpers for the Phantom Portals canon tools. Stdlib only, offline."""
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CANON_VERSION = (ROOT / 'VERSION').read_text().strip() if (ROOT / 'VERSION').exists() else '0.0.0'

STATUSES = {'CURRENT', 'RETIRED', 'UNCLEAR', 'REFERENCE', 'DRAFT'}
SIDECAR_REQUIRED = ['id', 'file', 'title', 'status', 'canon_version', 'kind', 'format', 'bytes', 'sha256', 'license', 'source']
# Folders whose binaries must carry a sidecar.
SIDECAR_ROOTS = ['30_ASSETS', '10_DESIGN_SYSTEM/iconography', '40_MOCKUPS/references', '40_MOCKUPS/concepts', '40_MOCKUPS/screens/_assets']
# Files in those folders that are not assets: docs (any .md), licences, generated catalogs.
# icons.data.js is generated from the icon SVGs (which carry the sidecars) and checked by build-icon-data.py --check.
SIDECAR_EXEMPT = {'OFL.txt', 'INDEX.json', 'INDEX.js', '.gitkeep', 'icons.data.js'}


def sidecar_exempt(path):
    p = Path(path)
    return p.suffix == '.md' or p.name in SIDECAR_EXEMPT
SKIP_DIRS = {'node_modules', '.git', '__pycache__'}


def sha256(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(1 << 20), b''):
            h.update(chunk)
    return h.hexdigest()


def rel(path):
    return Path(path).resolve().relative_to(ROOT).as_posix()


def walk(base, skip=SKIP_DIRS):
    for p in sorted(Path(base).rglob('*')):
        if p.is_file() and not any(part in skip for part in p.relative_to(ROOT).parts):
            yield p


def sidecars(base):
    return [p for p in walk(base) if p.name.endswith('.meta.json')]


def load_sidecar(path):
    return json.loads(Path(path).read_text())


def dump_json(obj):
    return json.dumps(obj, indent=2, ensure_ascii=False) + '\n'


# ---------------------------------------------------------------- front matter (YAML subset)
_FM = re.compile(r'\A---\n(.*?)\n---\n', re.S)


def _scalar(v):
    v = v.strip()
    if v.startswith('[') and v.endswith(']'):
        return [_scalar(x) for x in v[1:-1].split(',') if x.strip()]
    if len(v) >= 2 and v[0] == v[-1] and v[0] in '"\'':
        return v[1:-1]
    if re.fullmatch(r'-?\d+', v):
        return int(v)
    if v in ('true', 'false'):
        return v == 'true'
    return v


def front_matter(text):
    """Parse the YAML subset used by prompt files: `key: value`, `key: [a, b]`,
    and `key:` followed by indented `- item` lines. Returns (meta, body)."""
    m = _FM.match(text)
    if not m:
        return None, text
    meta, key = {}, None
    for line in m.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith('#'):
            continue
        item = re.match(r'^\s+-\s+(.*)$', line)
        if item and key:
            if not isinstance(meta.get(key), list):
                meta[key] = []
            meta[key].append(_scalar(item.group(1)))
            continue
        kv = re.match(r'^([A-Za-z_][\w-]*):\s*(.*)$', line)
        if not kv:
            raise ValueError(f'Unparseable front-matter line: {line!r}')
        key, value = kv.group(1), kv.group(2)
        meta[key] = _scalar(value) if value.strip() else []
    return meta, text[m.end():]
