---
id: PP-NEG-IMAGE-001
title: Image-generation avoid-list
category: negative
status: CURRENT
version: 1.0.0
targets: [midjourney, openai-image, adobe-firefly, stable-diffusion, flux, ideogram]
output: Text appended to every image prompt (after the global list)
canon_refs:
  - 10_DESIGN_SYSTEM/visual-language/ink-protocol.md
  - 10_DESIGN_SYSTEM/visual-language/trash-polka-rules.md
tags: [negative, image]
updated: 2026-10-29
---
# Image-generation avoid-list

```text
Avoid: photorealism, 3D render look, plastic or glossy CGI, airbrushed smoothness, soft digital painting; muddy greys, sepia or yellowed paper; pink, magenta or orange-red instead of blood crimson; crimson used as a wash rather than a single cut; more than one brush gesture competing; symmetrical tidy splatter; fake halftone made of perfect circles in a square grid; random runes, fake kanji or illegible lettering; text, captions, letters or numbers (unless the prompt asks for them); frames, borders and mock-up devices; skulls, roses, clocks, compasses, birds, wolves, ravens or other classic tattoo-flash motifs (unless the prompt asks); blood splatter gore; weapons; horror monster faces; anime styling; tattoo on skin, arms or photographs of tattoos; stock-photo backgrounds; copying any specific artist's work.
```

Short form:
```text
photorealistic, 3D render, CGI, airbrushed, sepia, pink, magenta, orange-red, crimson wash, perfect-circle halftone, fake kanji, text, letters, frame, mockup, skull, rose, clock, raven, gore, anime, tattoo on skin, stock photo
```
