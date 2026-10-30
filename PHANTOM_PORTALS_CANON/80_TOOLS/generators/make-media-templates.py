"""Draw the four media templates in 30_ASSETS (PP-TPL-001..004) as editable SVG.

The templates are meant to be edited by hand afterwards; re-running this overwrites
them, so only use it to start over. Art is drawn natively (no embedded rasters) so
the files stay small and recolourable; brand marks are linked from 30_ASSETS/brand.

  python3 80_TOOLS/generators/make-media-templates.py
"""
import math, random, sys
from pathlib import Path

ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[2]
INK, PAPER, CRIMSON, HERO, WHITE = '#151519', '#F6F5F2', '#A0112B', '#B8143E', '#FFFFFF'
ON_INV2, CRIMSON_INV = '#B4B1B9', '#FF6B7D'


def fonts(depth):
    up = '../' * depth
    faces = [('Inter', 'inter', 400), ('Inter', 'inter', 600), ('Space Grotesk', 'space-grotesk', 600),
             ('Space Grotesk', 'space-grotesk', 700), ('JetBrains Mono', 'jetbrains-mono', 500)]
    return '\n'.join(f'    @font-face {{ font-family: "{f}"; font-weight: {w}; src: url("{up}fonts/{d}/{d}-latin-{w}-normal.woff2") format("woff2"); }}'
                     for f, d, w in faces)


def defs(seed=4):
    return f'''  <defs>
    <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="{seed}" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>'''


def slash(x1, y1, x2, y2, w, fill, bristles=14, seed=1):
    """A dry-brush cut from (x1,y1) to (x2,y2): a tapered body plus bristle streaks that run out toward the tail."""
    rnd = random.Random(seed)
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy)
    ux, uy = dx / L, dy / L
    nx, ny = -uy, ux
    out = []
    # body: loaded start, tapering tail
    pts = []
    steps = 24
    for i in range(steps + 1):
        t = i / steps
        half = w / 2 * (1 - 0.75 * t ** 1.6) * (0.92 + 0.08 * rnd.random())
        pts.append((x1 + dx * t + nx * half, y1 + dy * t + ny * half))
    for i in range(steps, -1, -1):
        t = i / steps
        half = w / 2 * (1 - 0.75 * t ** 1.6) * (0.92 + 0.08 * rnd.random())
        pts.append((x1 + dx * t - nx * half, y1 + dy * t - ny * half))
    out.append(f'<polygon points="{" ".join(f"{a:.1f},{b:.1f}" for a, b in pts)}" fill="{fill}"/>')
    # bristle streaks past the body
    for k in range(bristles):
        off = (k / (bristles - 1) - 0.5) * w * 0.9
        t0 = 0.55 + rnd.random() * 0.25
        t1 = min(1.12, t0 + 0.2 + rnd.random() * 0.35)
        sw = max(1.5, w * (0.018 + rnd.random() * 0.03))
        a = (x1 + dx * t0 + nx * off, y1 + dy * t0 + ny * off)
        b = (x1 + dx * t1 + nx * off * 0.7, y1 + dy * t1 + ny * off * 0.7)
        out.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{fill}" stroke-width="{sw:.1f}" stroke-linecap="round"/>')
    return f'<g filter="url(#ink)">' + ''.join(out) + '</g>'


def splatter(cx, cy, r, fill, n=60, seed=2, direction=None):
    rnd = random.Random(seed)
    out = [f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r * 0.16:.1f}" fill="{fill}"/>']
    for _ in range(n):
        ang = rnd.uniform(0, 2 * math.pi) if direction is None else direction + rnd.gauss(0, 0.6)
        d = r * (0.15 + rnd.random() ** 0.7)
        size = max(1.2, r * 0.07 * (1 - d / (r * 1.2)) * rnd.random() + 1)
        out.append(f'<circle cx="{cx + math.cos(ang) * d:.1f}" cy="{cy + math.sin(ang) * d:.1f}" r="{size:.1f}" fill="{fill}"/>')
    return '<g>' + ''.join(out) + '</g>'


def halftone(x, y, w, h, step, fill, corner='br'):
    """45-degree dot field fading from a corner."""
    out = []
    j = 0
    yy = y
    while yy < y + h:
        xx = x + (step / 2 if j % 2 else 0)
        while xx < x + w:
            fx = (xx - x) / w if corner in ('br', 'tr', 'r') else 1 - (xx - x) / w
            fy = (yy - y) / h if corner in ('br', 'bl') else (1 - (yy - y) / h if corner in ('tr', 'tl') else 1)
            v = fx * fy if corner not in ('r', 'l') else fx
            rad = step * 0.48 * v
            if rad > 0.6:
                out.append(f'<circle cx="{xx:.1f}" cy="{yy:.1f}" r="{rad:.1f}"/>')
            xx += step
        yy += step * 0.866
        j += 1
    return f'<g fill="{fill}">' + ''.join(out) + '</g>'


def ring(cx, cy, r, stroke=INK, w=1.5, accent=None):
    circ = 2 * math.pi * r
    out = [f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{stroke}" stroke-width="{w}"/>',
           f'<circle cx="{cx}" cy="{cy}" r="{r * 1.06:.1f}" fill="none" stroke="{stroke}" stroke-width="{w * 4}" stroke-dasharray="{w} {circ * 1.06 / 120 - w:.2f}"/>',
           f'<circle cx="{cx}" cy="{cy}" r="{r * 1.06:.1f}" fill="none" stroke="{stroke}" stroke-width="{w * 9}" stroke-dasharray="{w * 1.4} {circ * 1.06 / 12 - w * 1.4:.2f}"/>',
           f'<circle cx="{cx}" cy="{cy}" r="{r * 0.78:.1f}" fill="none" stroke="{stroke}" stroke-width="{w}" stroke-dasharray="{w * 2} {w * 6}"/>']
    if accent:
        out.append(f'<circle cx="{cx}" cy="{cy}" r="{r * 1.06:.1f}" fill="none" stroke="{accent}" stroke-width="{w * 5}" stroke-dasharray="{circ * 1.06 * 0.08:.1f} {circ * 1.06:.1f}" transform="rotate(-60 {cx} {cy})"/>')
    s = r * 0.08
    out.append(f'<path d="M{cx - s} {cy - s * 0.4}V{cy - s}H{cx - s * 0.4}M{cx + s * 0.4} {cy - s}H{cx + s}V{cy - s * 0.4}M{cx + s} {cy + s * 0.4}V{cy + s}H{cx + s * 0.4}M{cx - s * 0.4} {cy + s}H{cx - s}V{cy + s * 0.4}" fill="none" stroke="{stroke}" stroke-width="{w * 1.5}"/>')
    return '<g>' + ''.join(out) + '</g>'


def iso_grid(x, y, w, h, step, stroke, opacity):
    out = []
    t = math.tan(math.radians(30))
    k = -h
    while k < w + h:
        out.append(f'<line x1="{x + k:.1f}" y1="{y}" x2="{x + k + h / t:.1f}" y2="{y + h}"/>')
        out.append(f'<line x1="{x + k:.1f}" y1="{y + h}" x2="{x + k + h / t:.1f}" y2="{y}"/>')
        k += step
    return (f'<g stroke="{stroke}" stroke-width="1" opacity="{opacity}"><clipPath id="gc{int(x)}{int(y)}"><rect x="{x}" y="{y}" width="{w}" height="{h}"/></clipPath>'
            f'<g clip-path="url(#gc{int(x)}{int(y)})">' + ''.join(out) + '</g></g>')


def ruler(x, y, w, stroke, every=12, major=5):
    out = [f'<line x1="{x}" y1="{y}" x2="{x + w}" y2="{y}"/>']
    i = 0
    xx = x
    while xx <= x + w:
        h = 18 if i % major == 0 else 8
        out.append(f'<line x1="{xx:.1f}" y1="{y}" x2="{xx:.1f}" y2="{y + h}"/>')
        xx += every
        i += 1
    return f'<g stroke="{stroke}" stroke-width="1.5">' + ''.join(out) + '</g>'


def doc(w, h, title, desc, body, depth, bg=True):
    paper = f'  <rect id="paper" width="{w}" height="{h}" fill="{PAPER}"/>\n' if bg else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <title>{title}</title>
  <desc>{desc}</desc>
  <style>
{fonts(depth)}
    .display {{ font-family: "Space Grotesk", "Inter", sans-serif; font-weight: 700; letter-spacing: -0.02em; }}
    .heading {{ font-family: "Space Grotesk", "Inter", sans-serif; font-weight: 600; }}
    .body {{ font-family: "Inter", sans-serif; font-weight: 400; }}
    .mono {{ font-family: "JetBrains Mono", monospace; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; }}
  </style>
{defs()}
{paper}{body}
</svg>
'''


def layer(name, content, hidden=False):
    style = ' style="display:none"' if hidden else ''
    return f'  <g id="{name.lower().replace(" ", "-")}" inkscape:groupmode="layer" inkscape:label="{name}"{style}>\n    {content}\n  </g>\n'


# ---------------------------------------------------------------- PP-TPL-001 thumbnail 1280x720
W, H = 1280, 720
art = (iso_grid(640, 0, 640, 720, 56, INK, 0.08)
       + halftone(820, 420, 460, 300, 14, INK, 'br')
       + ring(960, 340, 210, INK, 2, accent=CRIMSON)
       + slash(1210, 70, 760, 640, 120, CRIMSON, seed=3)
       + splatter(1150, 160, 120, CRIMSON, 50, seed=5, direction=-0.6))
text = (f'<text class="mono" x="64" y="120" font-size="26" fill="{CRIMSON}">EP. 001 // DIAGNOSTICS</text>'
        f'<text class="display" x="64" y="250" font-size="104" fill="{INK}">TITLE LINE</text>'
        f'<text class="display" x="64" y="362" font-size="104" fill="{INK}">GOES HERE</text>'
        f'<rect x="64" y="400" width="140" height="10" fill="{CRIMSON}"/>'
        f'<text class="body" x="64" y="470" font-size="34" fill="#55525A">Optional subtitle, 1 line</text>'
        f'<image x="64" y="600" width="260" height="70" preserveAspectRatio="xMinYMid meet" href="../../brand/wordmark/phantom-wordmark.svg" xlink:href="../../brand/wordmark/phantom-wordmark.svg"/>')
guides = (f'<rect x="64" y="64" width="{W - 128}" height="{H - 128}" fill="none" stroke="#2F80ED" stroke-dasharray="8 6" stroke-width="2"/>'
          f'<rect x="{W - 180}" y="{H - 70}" width="164" height="54" fill="#2F80ED" opacity="0.25"/>'
          f'<text x="{W - 176}" y="{H - 38}" font-size="14" fill="#2F80ED" font-family="monospace">timestamp overlay</text>'
          f'<line x1="704" y1="0" x2="704" y2="{H}" stroke="#2F80ED" stroke-width="2" stroke-dasharray="4 4"/>'
          f'<text x="712" y="40" font-size="14" fill="#2F80ED" font-family="monospace">art zone → (or place PP-IMG-THUMB art full-bleed)</text>')
tpl1 = doc(W, H, 'Phantom Portals — YouTube thumbnail 1280×720 (PP-TPL-001)',
           'Edit the TEXT layer. Replace the ART layer with art generated from PP-IMG-THUMB-001/002, or keep the drawn art. Show the GUIDES layer while editing; it is hidden for export. Fonts: Space Grotesk 700, Inter 400, JetBrains Mono 500 (30_ASSETS/fonts). The wordmark is linked from 30_ASSETS/brand — keep the folder structure or embed on export.',
           layer('ART', art) + layer('TEXT', text) + layer('GUIDES', guides, hidden=True), depth=2)

# ---------------------------------------------------------------- PP-TPL-002 lower third 1920x1080 (transparent)
W, H = 1920, 1080
x0, y0, pw, ph = 96, 820, 820, 150
c = 16
plate = (f'<path d="M{x0} {y0}H{x0 + pw - c}L{x0 + pw} {y0 + c}V{y0 + ph}H{x0}Z" fill="{INK}"/>'
         + slash(x0 + 5, y0 + ph, x0 + 9, y0 - 70, 18, CRIMSON, bristles=6, seed=7)
         + ruler(x0 + 40, y0 + ph - 22, 360, '#6E6A73', every=10))
text = (f'<text class="heading" x="{x0 + 40}" y="{y0 + 62}" font-size="48" fill="{WHITE}">Speaker Name</text>'
        f'<text class="mono" x="{x0 + 40}" y="{y0 + 104}" font-size="24" fill="{ON_INV2}">ROLE // TOPIC</text>')
guides = (f'<rect x="96" y="54" width="{W - 192}" height="{H - 108}" fill="none" stroke="#2F80ED" stroke-dasharray="8 6" stroke-width="2"/>'
          f'<text x="104" y="84" font-size="18" fill="#2F80ED" font-family="monospace">title-safe (5 %)</text>'
          f'<rect width="{W}" height="{H}" fill="#9AA0A6" opacity="0.35"/>')
tpl2 = doc(W, H, 'Phantom Portals — lower third 1920×1080 (PP-TPL-002)',
           'Transparent background for video editors. Black plate with a dry-brush crimson spine that breaks out above the plate; name in white (18.2:1), role in on-inverse-secondary (8.61:1). Crimson stays on the spine only — crimson text on black is forbidden (2.26:1). Edit the TEXT layer; GUIDES (hidden) shows title-safe. Motion: see 30_ASSETS/video/lower-thirds/README.md.',
           layer('GUIDES', guides, hidden=True) + layer('PLATE', plate) + layer('TEXT', text), depth=2, bg=False)

# ---------------------------------------------------------------- PP-TPL-003 album cover 3000x3000
W = H = 3000
enso = (f'<g filter="url(#ink)"><circle cx="1500" cy="1380" r="980" fill="none" stroke="{INK}" stroke-width="150" stroke-linecap="round" '
        f'stroke-dasharray="{2 * math.pi * 980 * 0.9:.0f} {2 * math.pi * 980:.0f}" transform="rotate(-62 1500 1380)"/></g>')
art = (iso_grid(0, 0, 3000, 3000, 180, INK, 0.06)
       + halftone(1900, 2000, 1100, 1000, 40, INK, 'br')
       + enso
       + ring(1500, 1380, 760, INK, 4, accent=CRIMSON)
       + slash(2620, 420, 860, 2120, 300, HERO, bristles=22, seed=9)
       + splatter(2560, 470, 300, HERO, 70, seed=11, direction=-0.8))
centre = (f'<rect x="1050" y="930" width="900" height="900" fill="none" stroke="#2F80ED" stroke-width="6" stroke-dasharray="24 18"/>'
          f'<text x="1080" y="990" font-size="44" fill="#2F80ED" font-family="monospace">CENTREPIECE — place emblem or PP-IMG-ALBUM-001 art</text>'
          f'<rect x="150" y="150" width="2700" height="2700" fill="none" stroke="#2F80ED" stroke-width="6" stroke-dasharray="24 18"/>'
          f'<text x="170" y="210" font-size="44" fill="#2F80ED" font-family="monospace">5 % margin — keep type inside</text>')
text = (f'<text class="display" x="180" y="2700" font-size="210" fill="{INK}">RELEASE TITLE</text>'
        f'<text class="mono" x="186" y="2820" font-size="72" fill="{CRIMSON}">PHANTOM PORTALS</text>'
        f'<text class="mono" x="186" y="280" font-size="56" fill="{INK}">VOL. 01</text>')
tpl3 = doc(W, H, 'Phantom Portals — album / single cover 3000×3000 (PP-TPL-003)',
           'Streaming services require 3000×3000 RGB, no URLs or social handles in the art. Must read at 64 px: keep the title short or drop it. Paper ground (#F6F5F2); for the dark edition swap the paper rect to #151519 and the ink to #FFFFFF. GUIDES are hidden for export.',
           layer('ART', art) + layer('TEXT', text) + layer('GUIDES', centre, hidden=True), depth=1)

# ---------------------------------------------------------------- PP-TPL-004 channel banner 2560x1440
W, H = 2560, 1440
sx, sy, sw, sh = 507, 508, 1546, 423
band = (halftone(0, 360, 520, 720, 22, INK, 'l') + halftone(2040, 360, 520, 720, 22, INK, 'r')
        + f'<g filter="url(#ink)"><path d="M300 770 C 900 740, 1700 800, 2260 760 L 2270 840 C 1700 880, 900 830, 290 860 Z" fill="{INK}"/></g>'
        + slash(1570, 470, 1370, 990, 90, CRIMSON, bristles=10, seed=13)
        + ruler(560, 895, 1440, INK, every=12)
        + iso_grid(0, 0, 2560, 1440, 120, INK, 0.05))
logo = (f'<image x="{sx + 60}" y="{sy + 50}" width="720" height="170" preserveAspectRatio="xMinYMid meet" href="../brand/wordmark/phantom-wordmark.svg" xlink:href="../brand/wordmark/phantom-wordmark.svg"/>'
        f'<text class="mono" x="{sx + 1506}" y="{sy + 120}" font-size="34" fill="{INK}" text-anchor="end">CHANNEL TAGLINE</text>'
        f'<text class="mono" x="{sx + 1506}" y="{sy + 168}" font-size="34" fill="{CRIMSON}" text-anchor="end">NEW UPLOAD DAY</text>')
guides = ''.join(f'<rect x="{(W - gw) / 2}" y="{(H - gh) / 2}" width="{gw}" height="{gh}" fill="none" stroke="#2F80ED" stroke-width="4" stroke-dasharray="20 12"/>'
                 f'<text x="{(W - gw) / 2 + 12}" y="{(H - gh) / 2 + 40}" font-size="30" fill="#2F80ED" font-family="monospace">{label}</text>'
                 for gw, gh, label in [(2560, 1440, 'TV 2560×1440'), (2560, 423, 'desktop max 2560×423'),
                                       (1855, 423, 'tablet 1855×423'), (1546, 423, 'SAFE — all devices 1546×423')])
tpl4 = doc(W, H, 'Phantom Portals — channel banner 2560×1440 (PP-TPL-004)',
           'YouTube channel art. Only the central 1546×423 band is visible on every device; keep the wordmark and tagline there. Max file 6 MB. GUIDES (hidden) show the TV, desktop, tablet and all-device crops.',
           layer('ART', band) + layer('LOGO', logo) + layer('GUIDES', guides, hidden=True), depth=1)

out = {
    '30_ASSETS/video/yt-thumbnail-templates/youtube-thumbnail-1280x720.svg': tpl1,
    '30_ASSETS/video/lower-thirds/lower-third-1920x1080.svg': tpl2,
    '30_ASSETS/audio-visual/album-cover-3000.svg': tpl3,
    '30_ASSETS/audio-visual/channel-banner-2560x1440.svg': tpl4,
}
for p, s in out.items():
    f = ROOT / p
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_text(s)
    print(p, len(s) // 1024, 'KB')
