# Audio-visual

Templates for the project's music and channel presence.

| File | Id | Size | Use |
|---|---|---|---|
| [`album-cover-3000.svg`](album-cover-3000.svg) | PP-TPL-003 | 3000 × 3000 | Album / single / soundtrack covers |
| [`channel-banner-2560x1440.svg`](channel-banner-2560x1440.svg) | PP-TPL-004 | 2560 × 1440 | YouTube channel art |

## Album cover
- Streaming stores ask for 3000 × 3000 px RGB, square, with no URLs, social handles, prices or blurry art. Check the distributor's current rules before release.
- It must read at 64 px in a playlist: one centrepiece, one crimson cut, short title or none. The GUIDES layer marks the centrepiece box (900 × 900) and the 5 % type margin.
- Art: keep the drawn ensō, ring and cut, or place the emblem (`brand/phantom-hero/phantom-emblem-2048.png`) or art from [PP-IMG-ALBUM-001](../../20_PROMPT_LIBRARY/image-gen/album-art/PP-IMG-ALBUM-001-cover.md) in the centrepiece box.
- Dark edition: set the `paper` rect to `#151519`, ink to `#FFFFFF`, and keep the crimson as is (it is art, not text).

## Channel banner
- YouTube crops it per device. Only the central **1546 × 423** band is visible everywhere; desktop shows up to 2560 × 423, TV the whole 2560 × 1440. The GUIDES layer draws all four.
- Logo (the horizontal lockup, [logo.md](../../10_DESIGN_SYSTEM/visual-language/logo.md)) and tagline stay in the safe band. One shield per surface.
- Max 6 MB. Art from [PP-IMG-ALBUM-002](../../20_PROMPT_LIBRARY/image-gen/album-art/PP-IMG-ALBUM-002-channel-banner.md) can replace the ART layer.

Fonts, linked files and editing apps: see [video/README.md](../video/README.md) — the same notes apply.
