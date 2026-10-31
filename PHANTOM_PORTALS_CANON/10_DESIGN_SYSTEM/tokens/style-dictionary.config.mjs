// Style Dictionary configuration for the Polka Portals tokens.
// Plain data and format functions only — no imports — so it can be loaded by
// 80_TOOLS/build-tokens.mjs, which owns the Style Dictionary dependency.
//
// Source:  10_DESIGN_SYSTEM/tokens/tokens.json  (W3C DTCG)
// Output:  10_DESIGN_SYSTEM/tokens/build/*      (generated — never edit by hand)

const HEADER = (file) =>
  `Polka Portals canon — ${file}\nGENERATED from 10_DESIGN_SYSTEM/tokens/tokens.json by 80_TOOLS/build-tokens. Do not edit.`;

const comment = (file, style = 'css') =>
  style === 'css' ? `/*\n * ${HEADER(file).replace(/\n/g, '\n * ')}\n */\n` : `// ${HEADER(file).replace(/\n/g, '\n// ')}\n`;

const val = (t) => (t.$value !== undefined ? t.$value : t.value);
const typeOf = (t) => t.$type ?? t.type;

const quoteFamily = (f) => (/^[a-z-]+$/i.test(f) && !/\s/.test(f) ? f : `"${f}"`);
const familyCss = (v) => (Array.isArray(v) ? v.map(quoteFamily).join(', ') : v);

const shadowCss = (v) =>
  (Array.isArray(v) ? v : [v])
    .map((s) => [s.inset ? 'inset' : '', s.offsetX, s.offsetY, s.blur, s.spread, s.color].filter(Boolean).join(' '))
    .join(', ');

// A raw (resolved, untransformed) value as CSS.
const rawCss = (t) => {
  const v = val(t);
  switch (typeOf(t)) {
    case 'fontFamily':
      return familyCss(v);
    case 'shadow':
      return shadowCss(v);
    case 'typography':
      return `${v.fontWeight} ${v.fontSize}/${v.lineHeight} ${familyCss(v.fontFamily)}`;
    default:
      return v;
  }
};

// {font.heading} -> var(--font-heading)
const refToVar = (s) => (typeof s === 'string' ? s.replace(/\{([^}]+)\}/g, (_, p) => `var(--${p.replace(/\./g, '-')})`) : s);

function nest(tokens, leaf) {
  const out = {};
  for (const t of tokens) {
    let node = out;
    t.path.slice(0, -1).forEach((p) => (node = node[p] ??= {}));
    node[t.path[t.path.length - 1]] = leaf(t);
  }
  return out;
}

export const formats = {
  'phantom/typography-classes': ({ dictionary }) => {
    const rules = dictionary.allTokens
      .filter((t) => typeOf(t) === 'typography')
      .map((t) => {
        const o = t.original.$value ?? t.original.value;
        const v = val(t);
        return `.${t.path[t.path.length - 1]} {\n  font-family: ${refToVar(o.fontFamily)};\n  font-size: ${v.fontSize};\n  line-height: ${v.lineHeight};\n  font-weight: ${v.fontWeight};\n  letter-spacing: ${v.letterSpacing};\n}`;
      });
    return comment('typography.css') + rules.join('\n') + '\n';
  },

  'phantom/font-face': ({ options }) => {
    const base = options.fontsBase.replace(/\/$/, '');
    const dirOf = (file) => file.split('-latin-')[0];
    const faces = options.fontFiles.map(
      (f) =>
        `@font-face {\n  font-family: "${f.family}";\n  src: url("${base}/${dirOf(f.file)}/${f.file}") format("woff2");\n  font-weight: ${f.weight};\n  font-style: ${f.style};\n  font-display: swap;\n}`,
    );
    return comment('fonts.css') + faces.join('\n') + '\n';
  },

  'phantom/ts': ({ dictionary }) => {
    const tree = nest(dictionary.allTokens, (t) => {
      const v = val(t);
      if (typeOf(t) === 'typography') return { ...v, fontFamily: familyCss(v.fontFamily) };
      if (typeOf(t) === 'shadow' || typeOf(t) === 'fontFamily') return rawCss(t);
      return v;
    });
    const names = dictionary.allTokens.map((t) => `  | '${t.name}'`).join('\n');
    return (
      comment('tokens.ts', 'js') +
      `export const tokens = ${JSON.stringify(tree, null, 2)} as const;\n\n` +
      `export type Tokens = typeof tokens;\n\n/** Every CSS custom property in tokens.css, without the leading dashes. */\nexport type TokenName =\n${names};\n\n` +
      `/** \`var(--name)\` for a token, e.g. cssVar('accent-crimson'). */\nexport const cssVar = (name: TokenName): string => \`var(--\${name})\`;\n`
    );
  },

  'phantom/tailwind-preset': ({ dictionary }) => {
    const by = (type) => dictionary.allTokens.filter((t) => typeOf(t) === type);
    const map = (list, key = (t) => t.name) => Object.fromEntries(list.map((t) => [key(t), rawCss(t)]));
    const colors = map(by('color'));
    const dims = (group) => map(dictionary.allTokens.filter((t) => t.path[0] === group), (t) => t.path.slice(1).join('-'));
    const preset = {
      theme: {
        extend: {
          colors,
          spacing: dims('space'),
          borderRadius: dims('radius'),
          boxShadow: map(by('shadow')),
          fontFamily: Object.fromEntries(by('fontFamily').map((t) => [t.path[1], val(t)])),
          fontSize: Object.fromEntries(
            by('typography').map((t) => {
              const v = val(t);
              return [t.path[1], [v.fontSize, { lineHeight: v.lineHeight, fontWeight: String(v.fontWeight), letterSpacing: v.letterSpacing }]];
            }),
          ),
        },
      },
    };
    return (
      comment('tailwind.tokens.js', 'js') +
      `// Tailwind CSS v3 preset: presets: [require('./tailwind.tokens.js')]. For Tailwind v4 import tailwind.theme.css instead.\n` +
      `module.exports = ${JSON.stringify(preset, null, 2)};\n`
    );
  },

  'phantom/tailwind-theme': ({ dictionary }) => {
    const prefix = { color: 'color', fontFamily: 'font', shadow: 'shadow' };
    const lines = dictionary.allTokens
      .map((t) => {
        if (t.path[0] === 'space') return `  --spacing-${t.path[1]}: ${val(t)};`;
        if (t.path[0] === 'radius') return `  --radius-${t.path[1]}: ${val(t)};`;
        if (typeOf(t) === 'typography') return `  --text-${t.path[1]}: ${val(t).fontSize};\n  --text-${t.path[1]}--line-height: ${val(t).lineHeight};`;
        const p = prefix[typeOf(t)];
        return p ? `  --${p}-${p === 'font' ? t.path[1] : t.name}: ${rawCss(t)};` : null;
      })
      .filter(Boolean);
    return comment('tailwind.theme.css') + `/* Tailwind CSS v4: @import "./tailwind.theme.css"; */\n@theme {\n${lines.join('\n')}\n}\n`;
  },

  'phantom/flat-json': ({ dictionary }) =>
    JSON.stringify(
      Object.fromEntries(dictionary.allTokens.map((t) => [t.name, { value: rawCss(t), type: typeOf(t), path: t.path.join('.') }])),
      null,
      2,
    ) + '\n',

  // For pages opened from disk (file://), where fetch() of JSON is blocked: the gallery loads this as a script.
  'phantom/js-global': ({ dictionary }) =>
    comment('tokens.global.js', 'js') +
    'window.PhantomTokens = ' +
    JSON.stringify(
      dictionary.allTokens.map((t) => ({
        name: t.name,
        path: t.path.join('.'),
        type: typeOf(t),
        value: rawCss(t),
        parts: typeOf(t) === 'typography' ? val(t) : undefined,
        description: t.$description ?? t.description ?? '',
        meta: t.$extensions?.['com.phantomportals'],
      })),
      null,
      2,
    ) +
    ';\n',

  'phantom/index-css': () =>
    comment('index.css') + '@import "./fonts.css";\n@import "./tokens.css";\n@import "./typography.css";\n',
};

export const config = (fontFiles) => ({
  source: ['../10_DESIGN_SYSTEM/tokens/tokens.json'],
  usesDtcg: true,
  log: { verbosity: 'default', warnings: 'warn' },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: '../10_DESIGN_SYSTEM/tokens/build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true, showFileHeader: false },
        },
      ],
    },
    raw: {
      transforms: ['name/kebab'],
      buildPath: '../10_DESIGN_SYSTEM/tokens/build/',
      files: [
        { destination: 'typography.css', format: 'phantom/typography-classes' },
        { destination: 'fonts.css', format: 'phantom/font-face', options: { fontFiles, fontsBase: '../../../30_ASSETS/fonts' } },
        { destination: 'index.css', format: 'phantom/index-css' },
        { destination: 'tokens.ts', format: 'phantom/ts' },
        { destination: 'tailwind.tokens.js', format: 'phantom/tailwind-preset' },
        { destination: 'tailwind.theme.css', format: 'phantom/tailwind-theme' },
        { destination: 'tokens.resolved.json', format: 'phantom/flat-json' },
        { destination: 'tokens.global.js', format: 'phantom/js-global' },
      ],
    },
  },
});
