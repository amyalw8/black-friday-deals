// DealHound app: search + filters by category, store and discount, a
// "really a deal" verdict per deal, and a detail page per deal. Static only:
// all data lives in data.js, no network calls at runtime.
import { DEALS, CATEGORIES, STORES, CHECKED_DATE, discountPct, saving, verdict, bestPrice } from './data.js';

const app = document.getElementById('app');
const money = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const state = { q: '', category: 'All', store: 'All', minPct: 0, sort: 'discount' };

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  let list = DEALS.filter((d) => {
    if (state.category !== 'All' && d.category !== state.category) return false;
    if (state.store !== 'All' && d.store !== state.store) return false;
    if (discountPct(d) < state.minPct) return false;
    if (q && !(d.name + ' ' + d.brand + ' ' + d.store + ' ' + d.category).toLowerCase().includes(q)) return false;
    return true;
  });
  const by = {
    discount: (a, b) => discountPct(b) - discountPct(a),
    saving: (a, b) => saving(b) - saving(a),
    low: (a, b) => a.sale - b.sale,
    high: (a, b) => b.sale - a.sale,
  }[state.sort];
  return list.sort(by);
}

function verdictPill(d) {
  const v = verdict(d);
  return `<span class="verdict ${v.tone}">${esc(v.label)} &middot; ${discountPct(d)}% off</span>`;
}

// One-line cross-store hint for a list card: cheapest other store, and
// whether this store beats it, ties it, or loses to it.
function alsoAtLine(d) {
  if (!d.alsoAt || !d.alsoAt.length) return '';
  const cheapest = d.alsoAt.reduce((a, b) => (b.price < a.price ? b : a));
  const diff = d.sale - cheapest.price;
  const text = diff < 0
    ? `Best price here &mdash; beats ${esc(cheapest.store)} by ${money(-diff)}`
    : diff === 0
      ? `Also at ${esc(cheapest.store)} &middot; ${money(cheapest.price)} (tied)`
      : `Also at ${esc(cheapest.store)} &middot; ${money(cheapest.price)} (cheaper there)`;
  return `<p class="alsoat">${text}</p>`;
}

// Full "same product elsewhere" block for the detail page.
function compareHTML(d) {
  const bp = bestPrice(d);
  if (!bp) return '';
  const rows = d.alsoAt.map((a) => {
    const label = a.url
      ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.store)} &nearr;</a>`
      : esc(a.store);
    return `<li>${label} &middot; <b>${money(a.price)}</b></li>`;
  }).join('');
  const verdictLine = bp.status === 'best'
    ? `<p class="bestprice">Best price here &mdash; beats ${esc(bp.best.store)} by ${money(bp.best.price - d.sale)}</p>`
    : bp.status === 'tied'
      ? `<p class="bestprice">Tied for best price at ${money(d.sale)}</p>`
      : `<p class="bestprice cheaper">Cheaper elsewhere: ${esc(bp.best.store)} has it for <b>${money(bp.best.price)}</b> &mdash; ${money(d.sale - bp.best.price)} less than here</p>`;
  return `<section class="compare" aria-label="Same product elsewhere"><h2>Same product elsewhere</h2>${verdictLine}<ul>${rows}</ul></section>`;
}

function cardHTML(d) {
  return `<article class="card">
    <h2><a href="#/deal/${d.id}">${esc(d.name)}</a></h2>
    <div class="meta"><span class="store">${esc(d.store)}</span><span class="cat">${esc(d.category)}</span></div>
    <div class="price"><span class="now">${money(d.sale)}</span><span class="was">${money(d.usual)}</span><span class="save">Save ${money(saving(d))}</span><span class="pct">&minus;${discountPct(d)}%</span></div>
    ${verdictPill(d)}
    ${alsoAtLine(d)}
    ${d.note ? `<p class="note">${esc(d.note)}</p>` : ''}
    <p class="checked">Checked ${esc(d.checked)} &middot; ${esc(d.source)}</p>
    <a class="shop" href="${esc(d.url)}" target="_blank" rel="noopener">View at ${esc(d.store)} &nearr;</a>
  </article>`;
}

function listHTML() {
  const totalSave = DEALS.reduce((s, d) => s + saving(d), 0);
  const best = Math.max(...DEALS.map(discountPct));
  const list = filtered();
  const chips = ['All', ...CATEGORIES].map((c) =>
    `<button class="chip" data-cat="${esc(c)}" aria-pressed="${state.category === c}">${esc(c)}</button>`).join('');
  const storeOpts = ['All', ...STORES].map((s) =>
    `<option value="${esc(s)}" ${state.store === s ? 'selected' : ''}>${esc(s)}</option>`).join('');
  return `
  <section class="stats" aria-label="Summary">
    <div class="stat"><b>${DEALS.length}</b><span>verified deals</span></div>
    <div class="stat"><b>${STORES.length}</b><span>stores</span></div>
    <div class="stat"><b>${money(totalSave)}</b><span>total savings</span></div>
    <div class="stat"><b>${best}%</b><span>biggest cut</span></div>
  </section>
  <section class="controls" aria-label="Find a deal">
    <input type="search" id="q" placeholder="Search deals &mdash; try &ldquo;TV&rdquo;, &ldquo;Sony&rdquo;, &ldquo;vacuum&rdquo;&hellip;" value="${esc(state.q)}" aria-label="Search deals">
    <div class="chips" role="group" aria-label="Category">${chips}</div>
    <div class="row">
      <select id="store" aria-label="Store"><option value="" disabled>Store</option>${storeOpts}</select>
      <select id="minpct" aria-label="Minimum discount">
        <option value="0" ${state.minPct === 0 ? 'selected' : ''}>Any discount</option>
        <option value="20" ${state.minPct === 20 ? 'selected' : ''}>20% off or more</option>
        <option value="30" ${state.minPct === 30 ? 'selected' : ''}>30% off or more</option>
        <option value="40" ${state.minPct === 40 ? 'selected' : ''}>40% off or more</option>
        <option value="50" ${state.minPct === 50 ? 'selected' : ''}>50% off or more</option>
      </select>
      <select id="sort" aria-label="Sort by">
        <option value="discount" ${state.sort === 'discount' ? 'selected' : ''}>Biggest discount</option>
        <option value="saving" ${state.sort === 'saving' ? 'selected' : ''}>Biggest saving ($)</option>
        <option value="low" ${state.sort === 'low' ? 'selected' : ''}>Lowest price</option>
        <option value="high" ${state.sort === 'high' ? 'selected' : ''}>Highest price</option>
      </select>
    </div>
    <p class="count"><b>${list.length}</b> of ${DEALS.length} deals &middot; all prices checked ${esc(CHECKED_DATE)}</p>
  </section>
  ${list.length ? `<section class="grid">${list.map(cardHTML).join('')}</section>`
    : `<p class="empty">No deals match that search. Try clearing a filter &mdash; every deal on this page was checked on ${esc(CHECKED_DATE)}.</p>`}`;
}

function detailHTML(d) {
  const v = verdict(d);
  const same = DEALS.filter((x) => x.category === d.category && x.id !== d.id).slice(0, 3);
  return `
  <a class="back" href="#/">&larr; All ${DEALS.length} deals</a>
  <section class="detail">
    <h1>${esc(d.name)}</h1>
    <div class="meta"><span class="store">${esc(d.store)}</span><span class="cat">${esc(d.category)}</span><span>${esc(d.brand)}</span></div>
    <div class="price"><span class="now">${money(d.sale)}</span><span class="was">${money(d.usual)}</span><span class="save">Save ${money(saving(d))} (${discountPct(d)}% off)</span></div>
    ${compareHTML(d)}
    ${verdictPill(d)}
    <p class="why"><b>Is it really a deal?</b>${esc(v.why)}</p>
    ${d.note ? `<p class="note"><b>Note:</b> ${esc(d.note)}</p>` : ''}
    <p class="checked">Price checked ${esc(d.checked)} &middot; Source: ${esc(d.source)}. Prices can change during Black Friday weekend &mdash; confirm on the store page before buying.</p>
    <a class="shop" href="${esc(d.url)}" target="_blank" rel="noopener">View at ${esc(d.store)} &nearr;</a>
  </section>
  ${same.length ? `<section class="similar"><h2>More ${esc(d.category)} deals</h2><div class="grid">${same.map(cardHTML).join('')}</div></section>` : ''}`;
}

function render() {
  const hash = location.hash || '#/';
  const m = hash.match(/^#\/deal\/([\w-]+)$/);
  if (m) {
    const d = DEALS.find((x) => x.id === m[1]);
    app.innerHTML = d ? detailHTML(d) : `<p class="empty">That deal is not on this page. <a href="#/">See all ${DEALS.length} deals</a>.</p>`;
    window.scrollTo(0, 0);
    return;
  }
  app.innerHTML = listHTML();
  const q = document.getElementById('q');
  q.addEventListener('input', () => { state.q = q.value; refreshList(); });
  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => { state.category = chip.dataset.cat; render(); });
  });
  document.getElementById('store').addEventListener('change', (e) => { state.store = e.target.value; refreshList(); });
  document.getElementById('minpct').addEventListener('change', (e) => { state.minPct = Number(e.target.value); refreshList(); });
  document.getElementById('sort').addEventListener('change', (e) => { state.sort = e.target.value; refreshList(); });
}

function refreshList() {
  // Re-render the list but keep the search box focused with its text.
  const pos = document.getElementById('q');
  const val = pos ? pos.value : state.q;
  const start = pos ? pos.selectionStart : null;
  render();
  const next = document.getElementById('q');
  if (next) { next.value = val; next.focus(); if (start !== null) next.setSelectionRange(start, start); }
}

window.addEventListener('hashchange', render);
render();
