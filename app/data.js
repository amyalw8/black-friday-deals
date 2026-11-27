// DealHound data: 24 Black Friday / Cyber Monday deals, each checked on
// 27 November 2026 against the store's own page or a reputable deals source.
// Every price below is one a store page or deals source actually showed when
// checked. "checked" is the check date; "source" says where it was seen.
export const CHECKED_DATE = 'Nov 27, 2026';

export const DEALS = [
  {
    id: 'tcl-s4cf',
    name: 'TCL 65" S4CF Series 4K UHD HDR Smart TV with Fire TV',
    brand: 'TCL',
    category: 'TVs',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112',
    sale: 229.99, usual: 469.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
  },
  {
    id: 'insignia-f40',
    name: 'Insignia 40" F40 Series LED Full HD 1080p Smart Fire TV',
    brand: 'Insignia',
    category: 'TVs',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/insignia-40-class-f40-series-led-full-hd-1080p-smart-fire-tv/J2FPJK67CQ/sku/6614066',
    sale: 84.98, usual: 149.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
  },
  {
    id: 'samsung-s84h',
    name: 'Samsung 65" S84H Series OLED 4K UHD Smart TV',
    brand: 'Samsung',
    category: 'TVs',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/samsung-65-class-s84h-series-oled-4k-uhd-samsungvision-ai-smart-tizen-tv-2026/JJGRF87Q6W/sku/6689681',
    sale: 899.99, usual: 2099.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
    note: 'Honest check: Best Buy\u2019s compare-at price looks high. This set was recently listed near $1,298 at another store, so the real saving is closer to $400 than $1,200. Still a strong price for a 65" OLED.',
  },
  {
    id: 'lg-c6',
    name: 'LG 55" C6 OLED evo AI 4K Smart webOS TV',
    brand: 'LG',
    category: 'TVs',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/lg-55-class-c6-oled-evo-ai-4k-smart-webos-tv-with-perfect-black-perfect-color-and-brightness-booster-2026/JJ8VPZKKP3/sku/12661045',
    sale: 1199.99, usual: 1999.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
    note: 'Honest check: this set sold for $999.99 earlier in November from a marketplace seller, and recent street prices ran $1,499.99\u2013$1,799.99. Best Buy\u2019s own price is now $1,199.99, so the true saving is roughly $300\u2013$600, not $800.',
  },
  {
    id: 'sony-xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear Headphones (Black)',
    brand: 'Sony',
    category: 'Audio',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727',
    sale: 169.99, usual: 398.00,
    checked: CHECKED_DATE, source: 'Best Buy product page',
    note: 'All-time low price. Deal ends Nov 28.',
  },
  {
    id: 'galaxy-s26fe',
    name: 'Samsung Galaxy S26 FE 128GB Unlocked (Blueberry)',
    brand: 'Samsung',
    category: 'Phones',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/samsung-galaxy-s26-fe-128gb-unlocked-blueberry/JJGRF3V696/sku/6687708',
    sale: 499.99, usual: 699.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
  },
  {
    id: 'hp-omnibook5',
    name: 'HP OmniBook 5 14" 2K OLED Touchscreen Laptop (Intel Core 5, 8GB / 256GB)',
    brand: 'HP',
    category: 'Laptops & Computers',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6/sku/6690110',
    sale: 449.99, usual: 799.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
  },
  {
    id: 'switch2-bundle',
    name: 'Nintendo Switch 2 + Mario Kart World Bundle',
    brand: 'Nintendo',
    category: 'Gaming',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/switch-2-mario-kart-world-bundle/J7GSL57WWG/sku/6689812',
    sale: 499.99, usual: 549.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
    note: 'Switch 2 almost never goes on sale \u2014 $50 off a brand-new console is rare. Black Friday deal runs Nov 22\u2013Dec 5.',
  },
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S Bluetooth Performance Wireless Mouse',
    brand: 'Logitech',
    category: 'Laptops & Computers',
    store: 'Best Buy',
    url: 'https://www.bestbuy.com/product/logitech-mx-master-3s-bluetooth-edition-performance-wireless-optical-mouse-with-ultra-fast-scrolling-and-quiet-clicks-wireless-black/J7H7ZYG559',
    sale: 75.99, usual: 99.99,
    checked: CHECKED_DATE, source: 'Best Buy product page',
  },
  {
    id: 'airpods-pro-3',
    name: 'Apple AirPods Pro 3',
    brand: 'Apple',
    category: 'Audio',
    store: 'Amazon',
    url: 'https://www.amazon.com/Apple-Cancellation-Translation-Headphones-High-Fidelity/dp/B0FQFB8FMG/',
    sale: 149, usual: 249,
    checked: CHECKED_DATE, source: 'TechSpot Black Friday roundup',
    note: 'All-time low. $100 under Apple\u2019s own price.',
  },
  {
    id: 'macbook-air-m5',
    name: 'Apple MacBook Air 13" (M5, 512GB)',
    brand: 'Apple',
    category: 'Laptops & Computers',
    store: 'Amazon',
    url: 'https://www.amazon.com/Apple-2026-MacBook-13-inch-Laptop/dp/B0GR1JTFP8/',
    sale: 999, usual: 1299,
    checked: CHECKED_DATE, source: 'TechSpot Black Friday roundup',
  },
  {
    id: 'sony-xm6',
    name: 'Sony WH-1000XM6 Wireless Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'Audio',
    store: 'Amazon',
    url: 'https://www.amazon.com/Sony-WH-1000XM6-Headphones-Microphones-Studio-Quality/dp/B0G6J3SV7P/',
    sale: 348, usual: 449.99,
    checked: CHECKED_DATE, source: 'TechSpot Black Friday roundup',
  },
  {
    id: 'switch2-woot',
    name: 'Nintendo Switch 2 System',
    brand: 'Nintendo',
    category: 'Gaming',
    store: 'Woot',
    url: 'https://electronics.woot.com/offers/new-nintendo-switch-2-system',
    sale: 469, usual: 499,
    checked: CHECKED_DATE, source: 'Woot product page',
    note: 'New console, $30 off \u2014 rare for Switch 2.',
  },
  {
    id: 'hisense-h5r1',
    name: 'Hisense 65" H5R1 Series 4K UHD HDR Smart Roku TV',
    brand: 'Hisense',
    category: 'TVs',
    store: 'Walmart',
    url: 'https://www.walmart.com/ip/20206324665',
    sale: 228, usual: 398,
    checked: CHECKED_DATE, source: 'Walmart product page',
    note: 'Sold and shipped by Walmart. Deal ends Nov 28.',
  },
  {
    id: 'alienware-aw3426dw',
    name: 'Alienware 34" 280Hz QD-OLED Gaming Monitor AW3426DW',
    brand: 'Alienware',
    category: 'Gaming',
    store: 'Dell',
    url: 'https://www.dell.com/en-us/shop/monitors/apd/alienware-34-280hz-qd-oled-gaming-monitor-aw3426dw/aw3426dw/-',
    sale: 649, usual: 800,
    checked: CHECKED_DATE, source: 'TechSpot Black Friday roundup; Dell product page',
  },
  {
    id: 'kitchenaid-ksm55',
    name: 'KitchenAid 5.5-Quart Bowl-Lift Stand Mixer KSM55',
    brand: 'KitchenAid',
    category: 'Kitchen',
    store: 'Target',
    url: 'https://www.target.com/p/kitchenaid-5-5-quart-bowl-lift-stand-mixer-ksm55-contour-silver/-/A-88347595',
    sale: 299.99, usual: 499.99,
    checked: CHECKED_DATE, source: 'Target product page',
    note: 'Deal ends Nov 29. Target Circle Card holders save another 5%.',
  },
  {
    id: 'dyson-v15',
    name: 'Dyson V15 Detect Cordless Stick Vacuum',
    brand: 'Dyson',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/dyson-cordfree-detect-carpet-cleaner-v15-9-8-34-cleaning-path-yellow-silver/-/A-95085838',
    sale: 599.99, usual: 849.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'shark-nv360',
    name: 'Shark Navigator Lift-Away Deluxe Upright Vacuum NV360',
    brand: 'Shark',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/shark-navigator-lift-away-deluxe-upright-vacuum-blue-nv360/-/A-14392936',
    sale: 124.99, usual: 199.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'ninja-duo',
    name: 'Ninja Professional Plus Blender DUO with Auto-iQ (72 oz)',
    brand: 'Ninja',
    category: 'Kitchen',
    store: 'Target',
    url: 'https://www.target.com/p/ninja-professional-plus-blender-duo-with-auto-iq-bn753tgt/-/A-82809464',
    sale: 99.99, usual: 169.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'ring-floodlight',
    name: 'Ring Floodlight Cam Wired Plus Security Camera',
    brand: 'Ring',
    category: 'Smart Home',
    store: 'Target',
    url: 'https://www.target.com/p/ring-floodlight-cam-wired-plus-security-camera/-/A-88338625',
    sale: 89.99, usual: 179.99,
    checked: CHECKED_DATE, source: 'Target product page',
    note: 'Deal ends Nov 30.',
  },
  {
    id: 'dyson-v9',
    name: 'Dyson V9 Motorbar Cordless Vacuum',
    brand: 'Dyson',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/dyson-v9-motorbar-cordless-vacuum-9-8-34-cleaning-path-nickel/-/A-1011912746',
    sale: 269.99, usual: 599.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'shark-rocket',
    name: 'Shark Rocket Pet Corded Stick Vacuum HV301',
    brand: 'Shark',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/shark-rocket-ultra-light-corded-stick-vacuum/-/A-95006512',
    sale: 99.99, usual: 199.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'dyson-v10',
    name: 'Dyson Cyclone V10 Cordless Stick Vacuum',
    brand: 'Dyson',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/dyson-cordfree-exclusive-carpet-cleaner-v10-9-8-34-cleaning-path-brown-silver/-/A-95085836',
    sale: 349.99, usual: 499.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
  {
    id: 'shark-stratos',
    name: 'Shark Stratos DuoClean Upright Vacuum AZ3002',
    brand: 'Shark',
    category: 'Vacuums',
    store: 'Target',
    url: 'https://www.target.com/p/shark-stratos-upright-vacuum-with-duoclean-powerfins-hairpro-self-cleaning-brushroll-odor-neutralizer-technology-navy-az3002/-/A-86794826',
    sale: 264.99, usual: 529.99,
    checked: CHECKED_DATE, source: 'Target product page',
  },
];

export const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();
export const STORES = [...new Set(DEALS.map((d) => d.store))].sort();

export function discountPct(d) {
  return Math.round((1 - d.sale / d.usual) * 100);
}

export function saving(d) {
  return d.usual - d.sale;
}

// The "really a deal" verdict: judged on the discount against the usual
// price, with a special case for new consoles that almost never discount.
export function verdict(d) {
  const pct = discountPct(d);
  if (d.id === 'switch2-bundle' || d.id === 'switch2-woot') {
    return { label: 'Rare discount', tone: 'rare', why: `Only ${pct}% off \u2014 but a brand-new Switch 2 almost never goes on sale at all, so any cut counts.` };
  }
  if (pct >= 50) return { label: 'Strong deal', tone: 'strong', why: `${pct}% off the usual price \u2014 one of the deepest cuts on this page.` };
  if (pct >= 30) return { label: 'Good deal', tone: 'good', why: `${pct}% off the usual price \u2014 a solid Black Friday cut.` };
  if (pct >= 20) return { label: 'Solid deal', tone: 'solid', why: `${pct}% off the usual price \u2014 worth it if you already wanted it.` };
  return { label: 'Modest deal', tone: 'modest', why: `${pct}% off the usual price \u2014 a small cut, only if you were buying anyway.` };
}
