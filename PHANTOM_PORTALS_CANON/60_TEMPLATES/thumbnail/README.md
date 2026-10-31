# Thumbnail template — PSD / AFDesign

**Not included.** The owner's tree asked for Photoshop and Affinity files. Neither app can be run in the environment that built this canon, and hand-writing their binary formats would produce files nobody could trust. The canon ships the thumbnail as a layered SVG instead, which both apps open:

**Source:** [`30_ASSETS/video/yt-thumbnail-templates/youtube-thumbnail-1280x720.svg`](../../30_ASSETS/video/yt-thumbnail-templates/youtube-thumbnail-1280x720.svg) (PP-TPL-001) — layers ART, TEXT, GUIDES.

| App | How to make the native template | Notes |
|---|---|---|
| **Affinity Designer / Photo** | *File → Open* the SVG → check layers → *File → Save As* `youtube-thumbnail-1280x720.afdesign` | Groups stay vector and editable; text stays live if the fonts are installed (TTF/OTF of Space Grotesk, Inter, JetBrains Mono) |
| **Photoshop** | Open the SVG in Illustrator (or Affinity) first → export PSD with layers; or *File → Open* the SVG in Photoshop at 1280 × 720, 72 ppi (flattens to one layer — then add live text layers on top) | Photoshop rasterises SVG on open; going through Illustrator keeps layers |
| **Illustrator** | *File → Open* the SVG → layers arrive as groups → *Save As* `.ai` | Re-link the logo if it shows as missing (it is linked from `30_ASSETS/brand/logo/polka-lockup-horizontal.svg`) |
| **Inkscape / browser** | Open directly | Native layers; GUIDES hidden by default |

When a native file has been made and checked against [PP-AUD-BALANCE-001](../../20_PROMPT_LIBRARY/design-audit/PP-AUD-BALANCE-001-trash-polka-balance.md), save it here as `youtube-thumbnail-1280x720.afdesign` / `.psd`, and record it in the register under CR-054.
