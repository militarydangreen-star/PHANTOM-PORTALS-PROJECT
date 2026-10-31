# References

Material that **informs** the look but is **not ours to ship**. Nothing in this folder may be copied into a product, a template or a generated-image prompt as-is ([ADR-0007](../../00_START_HERE/decisions/ADR-0007-third-party-references.md)).

| Folder | Status | What |
|---|---|---|
| [third-party/inspiration](third-party/inspiration/) | REFERENCE | 25 Trash Polka tattoo and grunge-design images collected for mood (PP-REF-001…025). Artists unknown — see [SOURCES.md](third-party/SOURCES.md) |
| [third-party/source-pages](third-party/source-pages/) | REFERENCE | Three saved Google Images result pages; each sidecar records the site and image URL they pointed to (PP-REF-SRC-001…003) |
| [unclear](unclear/) | UNCLEAR | Two "PHANTOM" logo images of unknown origin found among the design system's assets (PP-UNC-001, 002) |

## Local-only: not in the public repository
The 25 inspiration images, 3 saved result pages and 2 UNCLEAR logos are kept **only in the owner's local copy** of the canon. They are not ours to publish, and the GitHub repository is public. Their sidecars stay in the repository with the hash, size and origin of each file, marked `"distribution": "local-only"`. `.gitignore` keeps the files out, and the validator and `hash-manifest.py verify` treat them as absent by design in a public clone. In a public clone the links in [SOURCES.md](third-party/SOURCES.md) open nothing; that is expected.

## How references may be used
- **Allowed:** studying them to describe the style in words — mark-making, composition, the ratio of gesture to precision — and writing that into our own rules and prompts.
- **Not allowed:** tracing, collaging, image-to-image generation from them, naming the artists in prompts, or shipping them.
- The two UNCLEAR logos look like marketplace templates. Treat them as third-party until the owner proves otherwise; they are register entries CR-063 and CR-064 in the [register](../../00_START_HERE/CANON_REGISTER.md).
