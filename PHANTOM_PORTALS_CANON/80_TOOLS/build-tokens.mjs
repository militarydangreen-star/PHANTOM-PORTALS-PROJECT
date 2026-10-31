// Builds 10_DESIGN_SYSTEM/tokens/build/* from tokens.json with Style Dictionary.
// Usage (from 80_TOOLS): npm ci && node build-tokens.mjs   — or ./build-tokens.sh / .\build-tokens.ps1
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import StyleDictionary from 'style-dictionary';
import { config, formats } from '../10_DESIGN_SYSTEM/tokens/style-dictionary.config.mjs';

const here = dirname(fileURLToPath(import.meta.url));
process.chdir(here);

const sourceText = await readFile(join(here, '../10_DESIGN_SYSTEM/tokens/tokens.json'), 'utf8');
const tokens = JSON.parse(sourceText);
const fontFiles = tokens.font.$extensions['com.phantomportals'].files;

for (const [name, format] of Object.entries(formats)) StyleDictionary.registerFormat({ name, format });

const sd = new StyleDictionary(config(fontFiles));
await sd.buildAllPlatforms();

// css/variables has no header option that matches ours; prepend it.
const cssPath = join(here, '../10_DESIGN_SYSTEM/tokens/build/tokens.css');
const css = await readFile(cssPath, 'utf8');
if (!css.startsWith('/*\n * Polka Portals canon')) {
  await writeFile(
    cssPath,
    '/*\n * Polka Portals canon — tokens.css\n * GENERATED from 10_DESIGN_SYSTEM/tokens/tokens.json by 80_TOOLS/build-tokens. Do not edit.\n */\n' + css,
  );
}
// validate-canon.py compares this against tokens.json to catch a stale build.
await writeFile(
  join(here, '../10_DESIGN_SYSTEM/tokens/build/.source.sha256'),
  createHash('sha256').update(sourceText).digest('hex') + '  tokens.json\n',
);
console.log(`Built ${Object.keys(formats).length + 1} files into 10_DESIGN_SYSTEM/tokens/build/ with Style Dictionary ${StyleDictionary.VERSION}`);
