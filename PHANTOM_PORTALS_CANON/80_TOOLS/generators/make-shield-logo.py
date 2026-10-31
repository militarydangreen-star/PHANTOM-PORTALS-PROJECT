"""Draw the Polka Portals shield-mask logo family (ADR-0015) as clean vectors, plus PNG/ICO exports and sidecars.

The shield was redrawn from the 2026-10-30 concept sheets (PP-CON-002, PP-CON-004) as straight-edged
geometry on a 200 x 240 grid, mirrored about x = 100. Every output is flattened: each colour is one
non-overlapping path (no masks, no strokes-as-fills, no filters), so the files import cleanly into
Figma, Canva, Illustrator and print workflows.

  pip install shapely fonttools brotli        # one-off
  python3 80_TOOLS/generators/make-shield-logo.py [CANON_ROOT]

Writes 30_ASSETS/brand/shield/*, 30_ASSETS/brand/wordmark/polka-wordmark*.svg and
30_ASSETS/brand/logo/polka-lockup-*.svg, then renders PNGs with Playwright (node) and writes sidecars.
Re-running overwrites those files only; edit the geometry here, not in the SVGs.
"""
import hashlib, io, json, re, subprocess, sys
from pathlib import Path

from shapely.geometry import Polygon
from shapely.ops import unary_union
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[2]
BRAND = ROOT / '30_ASSETS' / 'brand'
CANON_VERSION = (ROOT / 'VERSION').read_text().strip()
INK, PAPER, CRIMSON = '#151519', '#F6F5F2', '#A0112B'

# ---------------------------------------------------------------- geometry (200 x 240 grid)
OUTER = [(100, 3), (127, 38), (193, 68), (168, 184), (100, 238), (32, 184), (7, 68), (73, 38)]
DIAMOND = [(100, 24), (116, 47), (100, 70), (84, 47)]
BROW_L = [(28, 80), (90, 86), (94, 92), (94, 132), (50, 121)]
EYE_L = [(44, 113), (94, 131), (92, 146), (56, 128)]
FANG_L = [(42, 134), (55, 137), (71, 182), (62, 186)]
SPINE = [(100, 74), (103, 88), (103, 190), (100, 198), (97, 190), (97, 88)]
JAW = [(68, 168), (100, 198), (132, 168), (121, 204), (100, 222), (79, 204)]
RIM = 11  # crimson border width


def mirror(pts):
    return [(200 - x, y) for x, y in reversed(pts)]


def inset(pts, d):
    """Miter-offset a polygon inward by d. Points run clockwise on screen (y down)."""
    n, lines, out = len(pts), [], []
    for i in range(n):
        (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % n]
        dx, dy = x2 - x1, y2 - y1
        length = (dx * dx + dy * dy) ** 0.5
        lines.append(((x1 - dy / length * d, y1 + dx / length * d), (dx, dy)))
    for i in range(n):
        (p1, d1), (p2, d2) = lines[i - 1], lines[i]
        t = ((p2[0] - p1[0]) * d2[1] - (p2[1] - p1[1]) * d2[0]) / (d1[0] * d2[1] - d1[1] * d2[0])
        out.append((p1[0] + d1[0] * t, p1[1] + d1[1] * t))
    return out


P = Polygon
SHIELD = P(OUTER)
BODY = P(inset(OUTER, RIM))
PLATES = unary_union([P(DIAMOND), P(BROW_L), P(mirror(BROW_L)), P(JAW)])
ACCENTS = unary_union([P(EYE_L), P(mirror(EYE_L)), P(FANG_L), P(mirror(FANG_L)), P(SPINE)])


def layers(simple=False):
    """Painter's stack -> flattened {role: geometry}. simple drops the eyes and fangs and thickens the rim (<= 32 px)."""
    body = P(inset(OUTER, 15)) if simple else BODY
    plates = PLATES if not simple else unary_union([P([(100, 22), (118, 48), (100, 74), (82, 48)]),
                                                    P([(30, 84), (91, 90), (93, 96), (93, 140), (46, 124)]),
                                                    P(mirror([(30, 84), (91, 90), (93, 96), (93, 140), (46, 124)])),
                                                    P([(64, 164), (100, 196), (136, 164), (122, 204), (100, 220), (78, 204)])])
    accents = P([(100, 76), (105, 92), (105, 186), (100, 196), (95, 186), (95, 92)]) if simple else ACCENTS
    clip = P(inset(OUTER, (15 if simple else RIM) + 5))  # keep an ink band between the rim and every feature
    plates, accents = plates.intersection(clip), accents.intersection(clip)
    plates_vis = plates.difference(accents.buffer(1.6, join_style=2))  # hairline of ink where crimson crosses paper
    body_vis = body.difference(plates_vis).difference(accents)
    rim_vis = SHIELD.difference(body)
    return {'rim': rim_vis, 'body': body_vis, 'plates': plates_vis, 'accents': accents}


def mono_shape(simple=False):
    """One-colour silhouette: features knocked out, a 2.2-unit ink gap kept between touching features,
    and a knocked-out keyline where the rim meets the body so the crest border survives in one colour."""
    L = layers(simple)
    gap = 2.2
    holes = unary_union([L['plates'].difference(L['accents'].buffer(gap, join_style=2)), L['accents']])
    d = 15 if simple else RIM
    keyline = P(inset(OUTER, d - 2.4)).difference(P(inset(OUTER, d)))
    return SHIELD.difference(holes).difference(keyline)


def path_d(geom, dx=0.0, dy=0.0, s=1.0):
    polys = [geom] if geom.geom_type == 'Polygon' else [g for g in getattr(geom, 'geoms', []) if g.geom_type == 'Polygon']
    out = []
    for poly in polys:
        for ring in [poly.exterior, *poly.interiors]:
            pts = list(ring.coords)[:-1]
            out.append('M' + ' '.join(f'{round(x * s + dx, 2):g},{round(y * s + dy, 2):g}' for x, y in pts) + 'Z')
    return ''.join(out)


def svg(w, h, body, label, vb=None):
    vb = vb or f'0 0 {w:g} {h:g}'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w:g}" height="{h:g}" role="img" '
            f'aria-label="{label}"><title>{label}</title>{body}</svg>\n')


def shield_paths(colors, dx=0.0, dy=0.0, s=1.0, simple=False):
    L = layers(simple)
    return ''.join(f'<path fill="{colors[k]}" fill-rule="evenodd" d="{path_d(L[k], dx, dy, s)}"/>'
                   for k in ('rim', 'body', 'plates', 'accents'))


PRIMARY = {'rim': CRIMSON, 'body': INK, 'plates': PAPER, 'accents': CRIMSON}


def outline_paths(color=INK, width=2.6):
    L = layers()
    return ''.join(f'<path fill="none" stroke="{color}" stroke-width="{width}" stroke-linejoin="miter" stroke-miterlimit="8" d="{path_d(L[k])}"/>'
                   for k in ('rim', 'plates', 'accents'))


# ---------------------------------------------------------------- wordmark (Space Grotesk 700, outlined)
FONT = ROOT / '30_ASSETS' / 'fonts' / 'space-grotesk' / 'space-grotesk-latin-700-normal.woff2'
TRACK = 0.2  # em


def wordmark_path(text='POLKA PORTALS', size=100.0):
    """Outline `text` with uniform tracking; returns (path d, width, cap height) in px at `size` (font px)."""
    font = TTFont(str(FONT))
    gs, cmap, hmtx = font.getGlyphSet(), font.getBestCmap(), font['hmtx']
    upm, cap = font['head'].unitsPerEm, font['OS/2'].sCapHeight
    k = size / upm
    x, parts, last_adv = 0.0, [], 0.0
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        adv = hmtx[name][0]
        if ch != ' ':
            rec = DecomposingRecordingPen(gs)
            gs[name].draw(rec)
            pen = SVGPathPen(gs, ntos=lambda v: f'{round(v, 2):g}')
            rec.replay(TransformPen(pen, (k, 0, 0, -k, x, cap * k)))  # flip y, baseline at cap height
            parts.append(pen.getCommands())
        last_adv = adv * k
        x += adv * k + (TRACK * size if i < len(text) - 1 else 0)
    # trim the right side bearing of the last glyph so the box ends at the ink
    width = x - (last_adv - _ink_right(gs, cmap[ord(text[-1])], k))
    return ''.join(parts), round(width, 2), round(cap * k, 2), round(hmtx[cmap[ord(text[0])]][1] * k, 2)


def _ink_right(gs, name, k):
    from fontTools.pens.boundsPen import BoundsPen
    b = BoundsPen(gs)
    gs[name].draw(b)
    return b.bounds[2] * k


def wordmark_svg(color):
    d, w, cap, lsb = wordmark_path()
    return svg(round(w - lsb, 2), cap, f'<path fill="{color}" d="{d}"/>', 'Polka Portals wordmark',
               vb=f'{lsb:g} 0 {round(w - lsb, 2):g} {cap:g}')


# ---------------------------------------------------------------- lockups
def lockup_h(word_color):
    """Shield + one-line wordmark. Shield height 120; caps height 0.30 x shield; gap 0.25 x shield."""
    sh = 120.0
    s = sh / 240
    sw = 200 * s
    d, w, cap, lsb = wordmark_path(size=sh * 0.30 / 0.7)
    gap = sh * 0.25
    tx = sw + gap - lsb
    ty = (sh - cap) / 2
    body = shield_paths(PRIMARY, 0, 0, s) + f'<g transform="translate({tx:g} {ty:g})"><path fill="{word_color}" d="{d}"/></g>'
    return svg(round(sw + gap + w - lsb, 2), sh, body, 'Polka Portals logo')


def lockup_v(word_color):
    sh = 240.0
    d, w, cap, lsb = wordmark_path(size=sh * 0.15 / 0.7)
    W = max(200.0, w - lsb)
    gap = sh * 0.14
    body = shield_paths(PRIMARY, (W - 200) / 2, 0) + \
        f'<g transform="translate({(W - (w - lsb)) / 2 - lsb:g} {sh + gap:g})"><path fill="{word_color}" d="{d}"/></g>'
    return svg(round(W, 2), round(sh + gap + cap, 2), body, 'Polka Portals logo')


# ---------------------------------------------------------------- badge, app icon
def badge():
    """Concept-sheet circular badge: crimson ring, ink inner disc, shield inside (true arcs, no overlaps under the shield)."""
    R, r = 128, 114

    def circle(c, rad):
        return f'M{c - rad:g},{c:g}A{rad:g},{rad:g} 0 1 0 {c + rad:g},{c:g}A{rad:g},{rad:g} 0 1 0 {c - rad:g},{c:g}Z'
    s = 0.74
    dx, dy = R - 100 * s, R - 120 * s - 2
    body = (f'<path fill="{CRIMSON}" fill-rule="evenodd" d="{circle(R, R)}{circle(R, r)}"/>'
            f'<path fill="{INK}" d="{circle(R, r)}"/>' + shield_paths(PRIMARY, dx, dy, s))
    return svg(2 * R, 2 * R, body, 'Polka Portals badge')


def app_icon():
    """1024 square, full-bleed ink (platforms apply their own corner mask); shield at 70 % height, simplified."""
    S = 1024.0
    s = S * 0.70 / 240
    dx, dy = (S - 200 * s) / 2, (S - 240 * s) / 2
    return svg(S, S, f'<rect width="{S:g}" height="{S:g}" fill="{INK}"/>' + shield_paths(PRIMARY, dx, dy, s, simple=True),
               'Polka Portals app icon')


# ---------------------------------------------------------------- outputs
def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)


def main():
    sh_dir, wm_dir, lo_dir = BRAND / 'shield', BRAND / 'wordmark', BRAND / 'logo'
    files = {
        sh_dir / 'polka-shield.svg': svg(200, 240, shield_paths(PRIMARY), 'Polka Portals shield'),
        sh_dir / 'polka-shield-mono-ink.svg': svg(200, 240, f'<path fill="{INK}" fill-rule="evenodd" d="{path_d(mono_shape())}"/>', 'Polka Portals shield, one colour'),
        sh_dir / 'polka-shield-mono-paper.svg': svg(200, 240, f'<path fill="{PAPER}" fill-rule="evenodd" d="{path_d(mono_shape())}"/>', 'Polka Portals shield, one colour (on ink)'),
        sh_dir / 'polka-shield-outline.svg': svg(200, 240, outline_paths(), 'Polka Portals shield, line art', vb='-2 -2 204 244'),
        sh_dir / 'polka-shield-small.svg': svg(200, 240, shield_paths(PRIMARY, simple=True), 'Polka Portals shield, small sizes'),
        sh_dir / 'polka-shield-badge.svg': badge(),
        sh_dir / 'polka-app-icon.svg': app_icon(),
        wm_dir / 'polka-wordmark.svg': wordmark_svg(INK),
        wm_dir / 'polka-wordmark-inverse.svg': wordmark_svg(PAPER),
        lo_dir / 'polka-lockup-horizontal.svg': lockup_h(INK),
        lo_dir / 'polka-lockup-horizontal-inverse.svg': lockup_h(PAPER),
        lo_dir / 'polka-lockup-stacked.svg': lockup_v(INK),
    }
    for p, t in files.items():
        write(p, t)
    pngs = [  # (svg, png, width px, height px)
        (sh_dir / 'polka-shield.svg', sh_dir / 'polka-shield-512.png', 427, 512),
        (sh_dir / 'polka-shield.svg', sh_dir / 'polka-shield-2048.png', 1707, 2048),
        (sh_dir / 'polka-app-icon.svg', sh_dir / 'polka-app-icon-1024.png', 1024, 1024),
        (sh_dir / 'polka-app-icon.svg', sh_dir / 'polka-app-icon-180.png', 180, 180),
        (sh_dir / 'polka-shield-small.svg', sh_dir / 'polka-favicon-48.png', 40, 48),
        (sh_dir / 'polka-shield-small.svg', sh_dir / 'polka-favicon-32.png', 27, 32),
        (sh_dir / 'polka-shield-small.svg', sh_dir / 'polka-favicon-16.png', 14, 16),
    ]
    render_pngs(pngs)
    make_ico(sh_dir)
    write_sidecars()
    print(f'wrote {len(files)} SVG, {len(pngs)} PNG, 1 ICO under {BRAND.relative_to(ROOT)}')


def render_pngs(jobs):
    js = r'''
const { chromium } = require('playwright');
(async () => {
  const jobs = JSON.parse(require('fs').readFileSync(0, 'utf8'));
  const b = await chromium.launch();
  for (const [src, out, w, h] of jobs) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    const svg = require('fs').readFileSync(src, 'utf8');
    await p.setContent(`<html><body style="margin:0;background:transparent"><img style="display:block;width:${w}px;height:${h}px" src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}"></body></html>`);
    await p.waitForTimeout(50);
    await p.screenshot({ path: out, omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
    await p.close();
  }
  await b.close();
})();'''
    subprocess.run(['node', '-e', js], input=json.dumps([[str(a), str(b), w, h] for a, b, w, h in jobs]),
                   text=True, check=True, cwd=str(Path.home()))


def make_ico(sh_dir):
    from PIL import Image
    imgs = []
    for n in (16, 32, 48):
        src = Image.open(sh_dir / f'polka-favicon-{n}.png').convert('RGBA')
        sq = Image.new('RGBA', (n, n), (0, 0, 0, 0))
        sq.paste(src, ((n - src.width) // 2, 0))
        imgs.append(sq)
    imgs[2].save(sh_dir / 'polka-favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)], append_images=imgs[:2])


# ---------------------------------------------------------------- sidecars
LICENSE = ('Project-original artwork for Polka Portals. Owner-controlled; all rights reserved by the project owner. '
           'Wordmark letterforms are outlined from Space Grotesk (SIL Open Font License 1.1).')
SOURCE = {'system': 'Polka Portals canon (White / Crimson / Black)', 'decision': 'ADR-0015',
          'generator': '80_TOOLS/generators/make-shield-logo.py',
          'derived_from': ['PP-CON-002 polka-portals-asset-pack-dark.webp', 'PP-CON-004 phantom-portals-plate-01-operator-spec.webp'],
          'drawn': '2026-10-31'}
SHIELD_RULES = ['Clear space: half the shield width on every side.',
                'Minimum size: 48 px tall for the full shield; below that use polka-shield-small.svg (32 px) or the favicon.',
                'Three inks only (ink #151519, paper #F6F5F2, crimson #A0112B). Never recolour, outline, add effects, rotate or stretch.',
                'One shield per surface. The hooded Phantom is the character, not the logo; never combine them into one mark.']
META = [  # (relative path, id, title, usage, tags, extra rules)
    ('shield/polka-shield.svg', 'PP-BRAND-013', 'Polka Portals shield (primary)', 'The logo. Full colour on paper or ink; app chrome, splash, documents, merch.', ['shield', 'logo', 'primary']),
    ('shield/polka-shield-mono-ink.svg', 'PP-BRAND-014', 'Polka Portals shield, one colour ink', 'One-colour print, stamps, embossing, engraving, fax-safe documents; on paper.', ['shield', 'logo', 'mono']),
    ('shield/polka-shield-mono-paper.svg', 'PP-BRAND-015', 'Polka Portals shield, one colour paper', 'One-colour reversed use on ink or photography where the full-colour shield fights the art.', ['shield', 'logo', 'mono', 'inverse']),
    ('shield/polka-shield-outline.svg', 'PP-BRAND-016', 'Polka Portals shield, line art', 'Blueprint and spec sheets, line-art illustration, laser cutting. Not a primary logo.', ['shield', 'line-art']),
    ('shield/polka-shield-small.svg', 'PP-BRAND-017', 'Polka Portals shield, small sizes', 'Simplified shield for 16-47 px: favicons, tab icons, tray icons, dense lists. No eye or fang marks.', ['shield', 'favicon', 'small']),
    ('shield/polka-shield-badge.svg', 'PP-BRAND-018', 'Polka Portals badge', 'Round avatar and sticker form (social avatars, patches, achievement medallions).', ['shield', 'badge', 'avatar']),
    ('shield/polka-app-icon.svg', 'PP-BRAND-019', 'Polka Portals app icon', 'Master for app and PWA icons: full-bleed ink square; the platform applies its own corner mask.', ['shield', 'app-icon']),
    ('shield/polka-shield-512.png', 'PP-BRAND-020', 'Polka Portals shield, 512 px PNG', 'Raster fallback for tools that do not take SVG (Canva brand kit, slides, email).', ['shield', 'png']),
    ('shield/polka-shield-2048.png', 'PP-BRAND-021', 'Polka Portals shield, 2048 px PNG', 'High-resolution raster for print proofs and video.', ['shield', 'png']),
    ('shield/polka-app-icon-1024.png', 'PP-BRAND-022', 'Polka Portals app icon, 1024 px', 'Store listing and app-icon master raster.', ['app-icon', 'png']),
    ('shield/polka-app-icon-180.png', 'PP-BRAND-023', 'Polka Portals app icon, 180 px', 'apple-touch-icon and PWA manifest icon.', ['app-icon', 'png']),
    ('shield/polka-favicon-48.png', 'PP-BRAND-024', 'Polka Portals favicon, 48 px', 'Favicon / PWA small icon.', ['favicon', 'png']),
    ('shield/polka-favicon-32.png', 'PP-BRAND-025', 'Polka Portals favicon, 32 px', 'Favicon.', ['favicon', 'png']),
    ('shield/polka-favicon-16.png', 'PP-BRAND-026', 'Polka Portals favicon, 16 px', 'Favicon.', ['favicon', 'png']),
    ('shield/polka-favicon.ico', 'PP-BRAND-027', 'Polka Portals favicon (ICO 16/32/48)', 'Legacy favicon.ico for browsers and Windows shortcuts.', ['favicon', 'ico']),
    ('wordmark/polka-wordmark.svg', 'PP-BRAND-028', 'Polka Portals wordmark', 'Name on its own, ink on paper. Space Grotesk 700 outlined, tracking +0.20 em.', ['wordmark']),
    ('wordmark/polka-wordmark-inverse.svg', 'PP-BRAND-029', 'Polka Portals wordmark, inverse', 'Name on its own, paper on ink.', ['wordmark', 'inverse']),
    ('logo/polka-lockup-horizontal.svg', 'PP-BRAND-030', 'Polka Portals lockup, horizontal', 'Shield + wordmark on paper: headers, documents, slides, email signatures.', ['lockup', 'logo']),
    ('logo/polka-lockup-horizontal-inverse.svg', 'PP-BRAND-031', 'Polka Portals lockup, horizontal inverse', 'Shield + wordmark on ink: app headers, dark slides, video end cards.', ['lockup', 'logo', 'inverse']),
    ('logo/polka-lockup-stacked.svg', 'PP-BRAND-032', 'Polka Portals lockup, stacked', 'Shield over wordmark on paper: splash screens, posters, covers, square formats.', ['lockup', 'logo']),
]


def write_sidecars():
    from PIL import Image
    for relp, pid, title, usage, tags in META:
        f = BRAND / relp
        data = f.read_bytes()
        if f.suffix == '.svg':
            m = re.search(r'width="([\d.]+)" height="([\d.]+)"', data.decode())
            dims, kind = f'{m.group(1)}x{m.group(2)}', 'vector'
        else:
            im = Image.open(io.BytesIO(data))
            dims, kind = f'{im.width}x{im.height}', 'raster'
        rules = list(SHIELD_RULES) if 'wordmark' not in relp else [
            'Clear space: the cap height on every side.', 'Minimum width: 120 px on screen, 30 mm in print.',
            'Never retype the name in another font, re-track it, or set it in crimson.']
        meta = {'id': pid, 'file': f.name, 'title': title, 'status': 'CURRENT', 'canon_version': CANON_VERSION,
                'kind': kind, 'format': f.suffix[1:], 'dimensions': dims, 'bytes': len(data),
                'sha256': hashlib.sha256(data).hexdigest(), 'usage': usage, 'rules': rules,
                'tags': ['polka-portals', *tags], 'license': LICENSE, 'source': SOURCE}
        f.with_name(f.name + '.meta.json').write_text(json.dumps(meta, indent=2, ensure_ascii=False) + '\n')


if __name__ == '__main__':
    main()
