<img src="30_ASSETS/brand/logo/polka-lockup-horizontal.svg" alt="Polka Portals" height="64">

# POLKA PORTALS — CANON

The single folder that holds everything current for the Polka Portals project: the design system, the prompt library, the asset library, mockups, agent instructions, templates, tooling, the retired canon and every release.

**Start here → [00_START_HERE/README.md](00_START_HERE/README.md)**

| | |
|---|---|
| Canon version | **1.3.0** (see [VERSION](VERSION) and [CHANGELOG](00_START_HERE/CHANGELOG.md)) |
| Visual identity | White-forward Trash Polka × isometric cybernetic HUD — white, matte black, blood crimson; the shield-mask logo; one hooded Phantom as the character |
| Quality gate | `python3 80_TOOLS/validate-canon.py` must print `11/11 checks passed` |
| Offline gallery | [10_DESIGN_SYSTEM/gallery/index.html](10_DESIGN_SYSTEM/gallery/index.html) — open in a browser, no network needed |

```
00_START_HERE/     what this is, the canon register, changelog, decisions
10_DESIGN_SYSTEM/  tokens (DTCG + builds), foundations, visual language, components, motion, icons, accessibility, gallery
20_PROMPT_LIBRARY/ image-generation, UI-build, audit and negative prompts, with a schema and a generated catalog
30_ASSETS/         brand, fonts, textures, HUD geometry, icons, video, audio-visual — every file with a provenance sidecar
40_MOCKUPS/        screen designs, clearly marked third-party references, dated screenshots
50_AGENTS/         agent definitions, project instructions, engineering handoffs
60_TEMPLATES/      HTML/CSS starter, deck, documents, thumbnails
80_TOOLS/          token build, indexers, hash manifests, contrast matrix, validator
90_ARCHIVE/        retired canon — read-only, sealed by hash
99_RELEASES/       versioned manifests and release notes
```
