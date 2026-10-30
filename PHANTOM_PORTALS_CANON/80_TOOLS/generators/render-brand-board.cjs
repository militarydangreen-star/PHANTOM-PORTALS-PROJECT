// Render 10_DESIGN_SYSTEM/adapters/canva/brand-board.html to brand-board.pdf (and page PNGs with --png).
// Usage: node 80_TOOLS/generators/render-brand-board.cjs [--png]   (needs Playwright Chromium)
const { chromium } = require('playwright');
(async () => {
  const path = require('path');
  const root = path.resolve(__dirname, '../..');
  const url = 'file://' + path.join(root, '10_DESIGN_SYSTEM/adapters/canva/brand-board.html');
  const out = path.join(root, '10_DESIGN_SYSTEM/adapters/canva');
  const png = process.argv.includes('--png');
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', e => errs.push(String(e))); p.on('requestfailed', r => errs.push('failed ' + r.url()));
  await p.route('**/*', r => /^(file|data|blob):/.test(r.request().url()) ? r.continue() : r.abort());
  await p.goto(url); await p.waitForTimeout(1500);
  const info = await p.evaluate(async () => { await document.fonts.ready;
    const over = [...document.querySelectorAll('.page')].map((pg, i) => { const r = pg.getBoundingClientRect(); const bad = [...pg.querySelectorAll('*')].filter(e => !e.classList.contains('art') && !e.closest('.art')).filter(e => { const q = e.getBoundingClientRect(); return q.width > 0 && (q.right > r.right + 1 || q.bottom > r.bottom + 1); }).map(e => e.tagName + '.' + e.className).slice(0, 3); return [i + 1, bad]; });
    return { pages: document.querySelectorAll('.page').length, fonts: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight), over }; });
  if (png) { const pages = await p.$$('.page'); for (let i = 0; i < pages.length; i++) await pages[i].screenshot({ path: `${out}/page-${i + 1}.png` }); }
  await p.emulateMedia({ media: 'print' });
  await p.pdf({ path: `${out}/brand-board.pdf`, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true });
  console.log(JSON.stringify(info)); console.log('errors', errs); if (errs.length || info.over.some(([, bad]) => bad.length)) process.exitCode = 1; await b.close();
})();
