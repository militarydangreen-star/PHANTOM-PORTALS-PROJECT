// Phantom Portals canon — tokens.global.js
// GENERATED from 10_DESIGN_SYSTEM/tokens/tokens.json by 80_TOOLS/build-tokens. Do not edit.
window.PhantomTokens = [
  {
    "name": "surface-canvas",
    "path": "surface.canvas",
    "type": "color",
    "value": "#f6f5f2",
    "description": "Main white-forward background (55–65% of any composition). Spec: surface.canvas.",
    "meta": {
      "spec": "surface.canvas",
      "v31": {
        "role": "Paper",
        "value": "#F7F7F7",
        "deltaE76": 1.7,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "surface-primary",
    "path": "surface.primary",
    "type": "color",
    "value": "#ffffff",
    "description": "Cards, forms, command surfaces. Spec: surface.primary.",
    "meta": {
      "spec": "surface.primary",
      "v31": {
        "role": "White",
        "value": "#FFFFFF",
        "deltaE76": 0,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "surface-sunken",
    "path": "surface.sunken",
    "type": "color",
    "value": "#eceae6",
    "description": "Wells, tab-strip ground, table header rows, disabled fills. ink-secondary reads 6.38:1 on it.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "surface-inverse",
    "path": "surface.inverse",
    "type": "color",
    "value": "#151519",
    "description": "Matte-black architecture: utility rail, terminals, HUD panels, secondary buttons. Spec: surface.inverse.",
    "meta": {
      "spec": "surface.inverse",
      "v31": {
        "role": "Matte black",
        "value": "#121316",
        "deltaE76": 1.5,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "surface-inverse-raised",
    "path": "surface.inverse-raised",
    "type": "color",
    "value": "#2a2a30",
    "description": "Raised layer on black: terminal title bar, hovered rail item. White reads 14.3:1.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "surface-crimson-soft",
    "path": "surface.crimson-soft",
    "type": "color",
    "value": "#fce8eb",
    "description": "Selected rows, active tab ground, annotations. ink-primary 15.5:1, accent-crimson 6.85:1 on it. Spec: surface.crimson-soft.",
    "meta": {
      "spec": "surface.crimson-soft"
    }
  },
  {
    "name": "ink-primary",
    "path": "ink.primary",
    "type": "color",
    "value": "#151519",
    "description": "Main typography and technical markings. 18.2:1 on white, 16.7:1 on canvas. Spec: ink.primary.",
    "meta": {
      "spec": "ink.primary",
      "v31": {
        "role": "Main text",
        "value": "#17181B",
        "deltaE76": 1.6,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "ink-secondary",
    "path": "ink.secondary",
    "type": "color",
    "value": "#55525a",
    "description": "Descriptions, metadata, labels. 7.66:1 on white, 7.03:1 on canvas. Spec: ink.secondary.",
    "meta": {
      "spec": "ink.secondary",
      "v31": {
        "role": "Secondary text",
        "value": "#697078",
        "deltaE76": 12.2,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "ink-on-inverse",
    "path": "ink.on-inverse",
    "type": "color",
    "value": "#ffffff",
    "description": "Text and icons on surface-inverse (18.2:1) and on crimson (8.05:1)."
  },
  {
    "name": "ink-on-inverse-secondary",
    "path": "ink.on-inverse-secondary",
    "type": "color",
    "value": "#b4b1b9",
    "description": "Secondary text on surface-inverse: 8.61:1.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "accent-crimson",
    "path": "accent.crimson",
    "type": "color",
    "value": "#a0112b",
    "description": "Primary actions, active indicators, focus ring on light. 8.05:1 on white — safe for text and icons. Spec: accent.crimson.",
    "meta": {
      "spec": "accent.crimson",
      "v31": {
        "role": "Blood crimson",
        "value": "#A00920",
        "deltaE76": 6.3,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      },
      "v31_alsoMapsHere": {
        "role": "Primary red",
        "value": "#CE102B",
        "note": "Maps to accent-crimson (owner decision 2026-10-30, ADR-0011 accepted). No accent-signal token."
      }
    }
  },
  {
    "name": "accent-crimson-pressed",
    "path": "accent.crimson-pressed",
    "type": "color",
    "value": "#7e0d22",
    "description": "Pressed state of crimson controls; white reads 10.7:1.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "accent-hero",
    "path": "accent.hero",
    "type": "color",
    "value": "#b8143e",
    "description": "Large crimson artwork and signature graphics (brush cuts, hero fields). White reads 6.55:1. Spec: accent.hero.",
    "meta": {
      "spec": "accent.hero"
    }
  },
  {
    "name": "accent-electric",
    "path": "accent.electric",
    "type": "color",
    "value": "#ee5367",
    "description": "Decorative lighting and animation only (laser lines, scan sweeps). Never text on light: 3.46:1 on white. Spec: accent.electric.",
    "meta": {
      "spec": "accent.electric"
    }
  },
  {
    "name": "accent-crimson-on-inverse",
    "path": "accent.crimson-on-inverse",
    "type": "color",
    "value": "#ff6b7d",
    "description": "Active indicators and crimson text on surface-inverse — accent-crimson is only 2.26:1 there. 6.63:1.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "border-default",
    "path": "border.default",
    "type": "color",
    "value": "#d8d5d6",
    "description": "Subtle separation between surfaces (1.46:1 — never the only boundary of a control). Spec: border.default.",
    "meta": {
      "spec": "border.default",
      "v31": {
        "role": "Border",
        "value": "#DFE1E3",
        "deltaE76": 4.3,
        "source": "00_START_HERE/directions/2026-10-29_TRASH_POLKA_DESIGN_DIRECTION.md"
      }
    }
  },
  {
    "name": "border-control",
    "path": "border.control",
    "type": "color",
    "value": "#86828a",
    "description": "Boundaries of inputs, toggles, ghost buttons: 3.77:1 on white, 3.46:1 on canvas (meets 3:1 for UI boundaries).",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "border-inverse",
    "path": "border.inverse",
    "type": "color",
    "value": "#6e6a73",
    "description": "Control boundaries on surface-inverse: 3.44:1.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "status-success",
    "path": "status.success",
    "type": "color",
    "value": "#1e6b47",
    "description": "Verified / complete. Muted, not neon: 6.46:1 on white. Always with an icon and a word.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "status-warning",
    "path": "status.warning",
    "type": "color",
    "value": "#8a5300",
    "description": "Caution, degraded, pending review: 6.33:1 on white. Always with an icon and a word.",
    "meta": {
      "derived": true
    }
  },
  {
    "name": "status-error",
    "path": "status.error",
    "type": "color",
    "value": "#a0112b",
    "description": "Errors and failed operations. Pair with the alert icon and a label."
  },
  {
    "name": "focus-ring",
    "path": "focus.ring",
    "type": "color",
    "value": "#a0112b",
    "description": "Keyboard focus on light surfaces: 2px solid, 2px offset."
  },
  {
    "name": "focus-ring-inverse",
    "path": "focus.ring-inverse",
    "type": "color",
    "value": "#ffffff",
    "description": "Keyboard focus on surface-inverse: 2px solid white, 2px offset."
  },
  {
    "name": "overlay-glass",
    "path": "overlay.glass",
    "type": "color",
    "value": "rgba(255,255,255,.88)",
    "description": "Glass overlays over artwork. Keep ≥ .85 alpha so text contrast holds; verify over the actual art."
  },
  {
    "name": "overlay-scrim",
    "path": "overlay.scrim",
    "type": "color",
    "value": "rgba(21,21,25,.48)",
    "description": "Modal scrim over the canvas."
  },
  {
    "name": "font-sans",
    "path": "font.sans",
    "type": "fontFamily",
    "value": "Inter, \"Segoe UI\", system-ui, sans-serif",
    "description": ""
  },
  {
    "name": "font-heading",
    "path": "font.heading",
    "type": "fontFamily",
    "value": "\"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "description": ""
  },
  {
    "name": "font-mono",
    "path": "font.mono",
    "type": "fontFamily",
    "value": "\"JetBrains Mono\", \"Cascadia Mono\", Consolas, monospace",
    "description": ""
  },
  {
    "name": "text-display",
    "path": "text.display",
    "type": "typography",
    "value": "700 56px/60px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "56px",
      "fontWeight": 700,
      "lineHeight": "60px",
      "letterSpacing": "-0.02em"
    },
    "description": "Hero headline only (spec 48–64px). One per screen.",
    "meta": {
      "sample": "Enter the Portal",
      "group": "Headings"
    }
  },
  {
    "name": "text-h1",
    "path": "text.h1",
    "type": "typography",
    "value": "700 36px/44px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": "44px",
      "letterSpacing": "-0.01em"
    },
    "description": "Page titles (spec 32–40px).",
    "meta": {
      "sample": "Command Center",
      "group": "Headings"
    }
  },
  {
    "name": "text-h2",
    "path": "text.h2",
    "type": "typography",
    "value": "600 26px/34px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "26px",
      "fontWeight": 600,
      "lineHeight": "34px",
      "letterSpacing": "0"
    },
    "description": "Section headings (spec 24–28px).",
    "meta": {
      "sample": "System Diagnostics",
      "group": "Headings"
    }
  },
  {
    "name": "text-h3",
    "path": "text.h3",
    "type": "typography",
    "value": "600 20px/28px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": "28px",
      "letterSpacing": "0"
    },
    "description": "Panel and card titles (spec 18–20px).",
    "meta": {
      "sample": "Network Adapters",
      "group": "Headings"
    }
  },
  {
    "name": "text-stat",
    "path": "text.stat",
    "type": "typography",
    "value": "600 40px/44px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "40px",
      "fontWeight": 600,
      "lineHeight": "44px",
      "letterSpacing": "-0.01em"
    },
    "description": "Prominent statistics; use tabular figures (font-variant-numeric: tabular-nums).",
    "meta": {
      "sample": "98.6%",
      "group": "Headings"
    }
  },
  {
    "name": "text-eyebrow",
    "path": "text.eyebrow",
    "type": "typography",
    "value": "600 12px/16px \"Space Grotesk\", Inter, \"Segoe UI\", sans-serif",
    "parts": {
      "fontFamily": [
        "Space Grotesk",
        "Inter",
        "Segoe UI",
        "sans-serif"
      ],
      "fontSize": "12px",
      "fontWeight": 600,
      "lineHeight": "16px",
      "letterSpacing": "0.14em"
    },
    "description": "Uppercase section markers above headings.",
    "meta": {
      "sample": "MODULE 04 — RECOVERY",
      "group": "Headings"
    }
  },
  {
    "name": "text-body-lg",
    "path": "text.body-lg",
    "type": "typography",
    "value": "400 16px/26px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": "26px",
      "letterSpacing": "0"
    },
    "description": "Lead paragraphs.",
    "meta": {
      "sample": "Diagnose, repair and recover machines from one offline toolkit.",
      "group": "Interface"
    }
  },
  {
    "name": "text-body",
    "path": "text.body",
    "type": "typography",
    "value": "400 15px/24px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "15px",
      "fontWeight": 400,
      "lineHeight": "24px",
      "letterSpacing": "0"
    },
    "description": "Default reading text (spec 14–16px).",
    "meta": {
      "sample": "Select a tool to inspect its sources and run history.",
      "group": "Interface"
    }
  },
  {
    "name": "text-body-sm",
    "path": "text.body-sm",
    "type": "typography",
    "value": "400 14px/22px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": "22px",
      "letterSpacing": "0"
    },
    "description": "Dense panels, table cells.",
    "meta": {
      "sample": "Last verified 12 minutes ago.",
      "group": "Interface"
    }
  },
  {
    "name": "text-label",
    "path": "text.label",
    "type": "typography",
    "value": "500 14px/20px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": "20px",
      "letterSpacing": "0"
    },
    "description": "Form labels, navigation, tabs (spec labels 12–14px).",
    "meta": {
      "sample": "Bookmarks",
      "group": "Interface"
    }
  },
  {
    "name": "text-button",
    "path": "text.button",
    "type": "typography",
    "value": "600 14px/20px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "14px",
      "fontWeight": 600,
      "lineHeight": "20px",
      "letterSpacing": "0.01em"
    },
    "description": "Button labels.",
    "meta": {
      "sample": "Run Diagnostics",
      "group": "Interface"
    }
  },
  {
    "name": "text-label-sm",
    "path": "text.label-sm",
    "type": "typography",
    "value": "600 12px/16px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "12px",
      "fontWeight": 600,
      "lineHeight": "16px",
      "letterSpacing": "0.02em"
    },
    "description": "Badges, column headers, compact controls.",
    "meta": {
      "sample": "ONLINE",
      "group": "Interface"
    }
  },
  {
    "name": "text-caption",
    "path": "text.caption",
    "type": "typography",
    "value": "400 12px/16px Inter, \"Segoe UI\", system-ui, sans-serif",
    "parts": {
      "fontFamily": [
        "Inter",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ],
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": "16px",
      "letterSpacing": "0"
    },
    "description": "Helper text, tooltips.",
    "meta": {
      "sample": "Requires administrator rights",
      "group": "Interface"
    }
  },
  {
    "name": "text-mono",
    "path": "text.mono",
    "type": "typography",
    "value": "400 13px/20px \"JetBrains Mono\", \"Cascadia Mono\", Consolas, monospace",
    "parts": {
      "fontFamily": [
        "JetBrains Mono",
        "Cascadia Mono",
        "Consolas",
        "monospace"
      ],
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": "20px",
      "letterSpacing": "0"
    },
    "description": "Terminal output, code (spec 11–13px).",
    "meta": {
      "sample": "PS C:\\> Get-NetAdapter | Format-Table",
      "group": "Technical"
    }
  },
  {
    "name": "text-mono-sm",
    "path": "text.mono-sm",
    "type": "typography",
    "value": "400 12px/18px \"JetBrains Mono\", \"Cascadia Mono\", Consolas, monospace",
    "parts": {
      "fontFamily": [
        "JetBrains Mono",
        "Cascadia Mono",
        "Consolas",
        "monospace"
      ],
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": "18px",
      "letterSpacing": "0"
    },
    "description": "Timestamps, command identifiers, paths.",
    "meta": {
      "sample": "2026-10-29 12:44:09",
      "group": "Technical"
    }
  },
  {
    "name": "text-mono-label",
    "path": "text.mono-label",
    "type": "typography",
    "value": "500 11px/16px \"JetBrains Mono\", \"Cascadia Mono\", Consolas, monospace",
    "parts": {
      "fontFamily": [
        "JetBrains Mono",
        "Cascadia Mono",
        "Consolas",
        "monospace"
      ],
      "fontSize": "11px",
      "fontWeight": 500,
      "lineHeight": "16px",
      "letterSpacing": "0.06em"
    },
    "description": "Telemetry labels and HUD coordinates.",
    "meta": {
      "sample": "CPU 42% · MEM 6.1/16 GB",
      "group": "Technical"
    }
  },
  {
    "name": "space-4",
    "path": "space.4",
    "type": "dimension",
    "value": "4px",
    "description": "Icon-to-text in compact chips; hairline gaps."
  },
  {
    "name": "space-8",
    "path": "space.8",
    "type": "dimension",
    "value": "8px",
    "description": "Compact HUD internal spacing; gap between related controls."
  },
  {
    "name": "space-12",
    "path": "space.12",
    "type": "dimension",
    "value": "12px",
    "description": "Compact HUD padding; list row gap."
  },
  {
    "name": "space-16",
    "path": "space.16",
    "type": "dimension",
    "value": "16px",
    "description": "Panel padding (minimum); grid gutter."
  },
  {
    "name": "space-24",
    "path": "space.24",
    "type": "dimension",
    "value": "24px",
    "description": "Panel padding (comfortable); card gap."
  },
  {
    "name": "space-32",
    "path": "space.32",
    "type": "dimension",
    "value": "32px",
    "description": "Separation between major sections (minimum)."
  },
  {
    "name": "space-48",
    "path": "space.48",
    "type": "dimension",
    "value": "48px",
    "description": "Separation between major sections (generous); hero padding."
  },
  {
    "name": "space-64",
    "path": "space.64",
    "type": "dimension",
    "value": "64px",
    "description": "Hero and page-level breathing room."
  },
  {
    "name": "radius-0",
    "path": "radius.0",
    "type": "dimension",
    "value": "0px",
    "description": "Tactical frames, buttons, inputs, terminal and HUD panels — sharp or chamfered."
  },
  {
    "name": "radius-8",
    "path": "radius.8",
    "type": "dimension",
    "value": "8px",
    "description": "Cards, tool tiles, notifications (spec 8–12px)."
  },
  {
    "name": "radius-12",
    "path": "radius.12",
    "type": "dimension",
    "value": "12px",
    "description": "Large surfaces: dialogs, AI response panel, hero card."
  },
  {
    "name": "radius-full",
    "path": "radius.full",
    "type": "dimension",
    "value": "999px",
    "description": "Pills, toggles, status dots, HUD rings."
  },
  {
    "name": "chamfer-6",
    "path": "chamfer.6",
    "type": "dimension",
    "value": "6px",
    "description": "Small controls, badges."
  },
  {
    "name": "chamfer-10",
    "path": "chamfer.10",
    "type": "dimension",
    "value": "10px",
    "description": "Buttons, inputs, HUD frames."
  },
  {
    "name": "chamfer-16",
    "path": "chamfer.16",
    "type": "dimension",
    "value": "16px",
    "description": "Hero frames, terminal panels."
  },
  {
    "name": "stroke-1",
    "path": "stroke.1",
    "type": "dimension",
    "value": "1px",
    "description": "Default borders, technical lines."
  },
  {
    "name": "stroke-2",
    "path": "stroke.2",
    "type": "dimension",
    "value": "2px",
    "description": "Heavier framing of major surfaces, focus rings, active indicators."
  },
  {
    "name": "depth-1",
    "path": "depth.1",
    "type": "shadow",
    "value": "0px 1px 2px 0px rgba(21,21,25,.08), 0px 1px 1px 0px rgba(21,21,25,.04)",
    "description": "Resting cards and tiles."
  },
  {
    "name": "depth-2",
    "path": "depth.2",
    "type": "shadow",
    "value": "0px 8px 24px 0px rgba(21,21,25,.10), 0px 2px 6px 0px rgba(21,21,25,.06)",
    "description": "Hovered tiles, dropdowns, tooltips."
  },
  {
    "name": "depth-3",
    "path": "depth.3",
    "type": "shadow",
    "value": "0px 18px 48px 0px rgba(21,21,25,.16), 0px 4px 12px 0px rgba(21,21,25,.08)",
    "description": "Dialogs, command palette, floating panels."
  },
  {
    "name": "crimson-edge",
    "path": "crimson-edge",
    "type": "shadow",
    "value": "0px 0px 0px 1px #a0112b, 0px 6px 18px 0px rgba(160,17,43,.20)",
    "description": "Active/selected signature edge with controlled bloom. One per view."
  },
  {
    "name": "laser-glow",
    "path": "laser-glow",
    "type": "shadow",
    "value": "0px 0px 10px 0px rgba(238,83,103,.45)",
    "description": "Electric laser lines and scan sweeps only."
  },
  {
    "name": "inset-well",
    "path": "inset-well",
    "type": "shadow",
    "value": "inset 0px 1px 2px 0px rgba(21,21,25,.08)",
    "description": "Input wells and sunken fields."
  },
  {
    "name": "control-sm",
    "path": "control.sm",
    "type": "dimension",
    "value": "32px",
    "description": "Compact toolbar controls (pointer only; ≥24px target)."
  },
  {
    "name": "control-md",
    "path": "control.md",
    "type": "dimension",
    "value": "40px",
    "description": "Default buttons and inputs (spec minimum 40px)."
  },
  {
    "name": "control-lg",
    "path": "control.lg",
    "type": "dimension",
    "value": "44px",
    "description": "Primary and touch actions (spec preferred 44px)."
  },
  {
    "name": "tabstrip-height",
    "path": "tabstrip.height",
    "type": "dimension",
    "value": "40px",
    "description": "Browser tab strip."
  },
  {
    "name": "omnibox-height",
    "path": "omnibox.height",
    "type": "dimension",
    "value": "44px",
    "description": "Omnibox / command field."
  },
  {
    "name": "rail-width",
    "path": "rail.width",
    "type": "dimension",
    "value": "56px",
    "description": "Left utility rail."
  },
  {
    "name": "bookmarks-height",
    "path": "bookmarks.height",
    "type": "dimension",
    "value": "32px",
    "description": "Favorites bar."
  }
];
