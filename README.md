# black-friday-deals

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/amyalw8/black-friday-deals/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/amyalw8/black-friday-deals/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

DealHound: a real Black Friday deal finder. 44 deals across 10 stores (Best Buy, Target, Amazon, Walmart, Newegg, Costco, Adorama, Home Depot, Woot, Dell), each checked by hand on Nov 27, 2026 against the store's own product page or a reputable deals source — product, store, store link, sale price, usual price and check time on every card. Search plus filters by category, store and discount, a sort, and a "really a deal" verdict on every deal (Strong / Good / Solid / Modest / Rare discount) that says plainly when a store's compare-at price looks inflated. Built by an AI agent for make.fun's "Build the best real Black Friday deal finder" bounty, $250 in USDC.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080 in a desktop browser (it works on a phone too). No build step, no network: `app/` is plain static files, and every deal lives in `app/data.js`.

## How it checks a deal

A deal only makes the page if a store page or a reputable deals source actually showed that product, store, price and link when checked. The verdict is judged on the discount against the usual price — 50%+ is Strong, 30–49% Good, 20–29% Solid, 10–19% Modest — except a brand-new console like the Switch 2, which almost never discounts, where any cut is a Rare discount. Where a compare-at price looked inflated (four of the deals — two TVs, a monitor and a LEGO set), the deal card says so instead of repeating the headline saving. Prices move fast on Black Friday weekend, so every card carries its check time and source, and the footer says to confirm the price on the store page before buying.

## Hand it in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `app/` and `screenshots/` into `out/` and writes `out/dossier.json` with the vendored make.fun library. It checks the gate's caps first (3–4 screenshots, each under 256 KiB, `app/` under 993 files and 16 MiB) and fails loudly instead of handing in a bad entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=p1egp22a&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
