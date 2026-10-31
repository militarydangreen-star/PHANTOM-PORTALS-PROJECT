# Video

| Folder | What | Status |
|---|---|---|
| [yt-thumbnail-templates](yt-thumbnail-templates/README.md) | YouTube thumbnail template, 1280 × 720 (PP-TPL-001) | CURRENT |
| [lower-thirds](lower-thirds/README.md) | Name/role strap, 1920 × 1080 transparent (PP-TPL-002) | CURRENT |
| [intros](intros/README.md) | Channel intro / sting | DRAFT — spec only, no files yet |

All templates are layered SVG (ART / TEXT / GUIDES). Open them in Inkscape (layers are native), Illustrator or Affinity Designer (layers import as groups), or a browser for a quick look. The GUIDES layer is hidden so exports are clean; show it while editing.

**Fonts in desktop apps:** `30_ASSETS/fonts` holds WOFF2 files for the web. Desktop design and video apps need the TTF/OTF versions of the same families (Inter, Space Grotesk, JetBrains Mono — all OFL, from their official repositories or Google Fonts). The SVGs fall back to Inter or a system sans if the font is missing, so check the title before exporting.

**Linked files:** templates link the logo lockup (`brand/logo/polka-lockup-horizontal.svg`) from `30_ASSETS/brand` by relative path. Keep the folder structure, or embed the image (Inkscape: *Extensions → Images → Embed Images*) before sending a template elsewhere.

Regenerate a fresh copy (overwrites edits): `python3 80_TOOLS/generators/make-media-templates.py`.
