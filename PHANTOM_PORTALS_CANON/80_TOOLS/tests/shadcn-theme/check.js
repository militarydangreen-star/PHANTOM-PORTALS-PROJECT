const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 900, height: 900 } });
  const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('requestfailed', r => errs.push('failed ' + r.url()));
  await p.goto('file://' + process.argv[2] + "/index.html"); await p.waitForTimeout(500);
  const expect = [
    ['body', 'backgroundColor', '#F6F5F2'], ['body', 'color', '#151519'], ['#muted', 'color', '#55525A'],
    ['#card', 'backgroundColor', '#FFFFFF'], ['#btn-primary', 'backgroundColor', '#A0112B'], ['#btn-primary', 'color', '#FFFFFF'],
    ['#btn-secondary', 'backgroundColor', '#151519'], ['#input', 'borderTopColor', '#86828A'], ['#badge-ok', 'color', '#1E6B47'],
    ['#badge-warn', 'color', '#8A5300'], ['#destr', 'color', '#A0112B'], ['#rail', 'backgroundColor', '#151519'],
    ['#rail-active', 'backgroundColor', '#A0112B'], ['#inverse', 'backgroundColor', '#151519'], ['#inverse', 'color', '#FFFFFF'],
    ['#inv-destr', 'color', '#FF6B7D'], ['#inv-input', 'borderTopColor', '#86828A'], ['#inv-input', 'backgroundColor', '#2A2A30'],
  ];
  const res = await p.evaluate(async (expect) => {
    await document.fonts.ready;
    const c = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const toHex = (col) => { c.clearRect(0, 0, 1, 1); c.fillStyle = '#000'; c.fillStyle = col; c.fillRect(0, 0, 1, 1); const d = c.getImageData(0, 0, 1, 1).data; return '#' + [d[0], d[1], d[2]].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase(); };
    const rows = expect.map(([sel, prop, want]) => { const v = getComputedStyle(document.querySelector(sel))[prop]; const got = toHex(v); const diff = Math.max(...[1, 3, 5].map(i => Math.abs(parseInt(got.substr(i, 2), 16) - parseInt(want.substr(i, 2), 16)))); return { sel, prop, want, got, diff }; });
    const q = (s) => getComputedStyle(document.querySelector(s));
    return { rows, radiusBtn: q('#btn-primary').borderTopLeftRadius, radiusInput: q('#input').borderTopLeftRadius, radiusCard: q('#card').borderTopLeftRadius,
      fontBody: q('body').fontFamily, fontH1: q('#h1').fontFamily, fontMono: q('#mono').fontFamily,
      loaded: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight) };
  }, expect);
  res.rows.forEach(r => console.log((r.diff <= 1 ? 'PASS ' : 'FAIL ') + r.sel + ' ' + r.prop + ' want ' + r.want + ' got ' + r.got));
  console.log('radius button/input/card:', res.radiusBtn, res.radiusInput, res.radiusCard);
  console.log('fonts:', res.fontBody.slice(0, 30), '|', res.fontH1.slice(0, 30), '|', res.fontMono.slice(0, 30), '| loaded', res.loaded.join(', '));
  console.log('errors', errs);
  await p.screenshot({ path: process.argv[2] + '/proof.png' }); await b.close();
})();
