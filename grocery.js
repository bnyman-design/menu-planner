/* grocery.js — unit-aware grocery aggregator with UI unit toggles
   - Sums units within the same dimension (volume, mass, count)
   - Can convert volume<->mass if a density (g/ml) is known
   - Adds tiny UI toggles to switch displayed units per dimension
   - Persists unit display prefs in localStorage
*/

/* ===== Load recipes and planner storage ===== */
const RECIPES = Array.isArray(window.__RECIPES) ? window.__RECIPES : [];
const LS_PLAN = 'mealPlanner.v3';        // same key used by planner
const LS_GROC = 'mealPlanner.grocery';   // checkbox state per week
const LS_UNIT_PREF = 'mealPlanner.groceryUnits'; // preferred displayed units

/* ===== Helpers: name/category normalization ===== */
function normName(name){ return (name||'').toLowerCase().trim().replace(/\s+/g,' '); }
function findRecipeById(id){ return RECIPES.find(r => r.id === id); }

/* ===== Unit system =====
   Dimensions: 'volume' (base: ml), 'mass' (base: g), 'count' (base: pc)
*/
const UNIT = {
  // volume
  'tsp':  { dim: 'volume', toBase: v=>v*4.9289215938, fromBase: v=>v/4.9289215938, label:'tsp' },
  'tbsp': { dim: 'volume', toBase: v=>v*14.786764781, fromBase: v=>v/14.786764781, label:'Tbsp' },
  'fl oz':{ dim: 'volume', toBase: v=>v*29.573529562, fromBase: v=>v/29.573529562, label:'fl oz' },
  'cup':  { dim: 'volume', toBase: v=>v*236.5882365, fromBase: v=>v/236.5882365, label:'cup' },
  'ml':   { dim: 'volume', toBase: v=>v,             fromBase: v=>v,              label:'ml' },
  'l':    { dim: 'volume', toBase: v=>v*1000,        fromBase: v=>v/1000,         label:'L' },

  // mass
  'g':    { dim: 'mass',   toBase: v=>v,             fromBase: v=>v,              label:'g' },
  'kg':   { dim: 'mass',   toBase: v=>v*1000,        fromBase: v=>v/1000,         label:'kg' },
  'oz':   { dim: 'mass',   toBase: v=>v*28.349523125,fromBase: v=>v/28.349523125, label:'oz' },
  'lb':   { dim: 'mass',   toBase: v=>v*453.59237,   fromBase: v=>v/453.59237,    label:'lb' },

  // count
  'pc':   { dim: 'count',  toBase: v=>v,             fromBase: v=>v,              label:'pc' },
  'piece':{ dim: 'count',  toBase: v=>v,             fromBase: v=>v,              label:'pc' },
  'slice':{ dim: 'count',  toBase: v=>v,             fromBase: v=>v,              label:'slice' },
  'clove':{ dim: 'count',  toBase: v=>v,             fromBase: v=>v,              label:'clove' },
};

/* Accept common synonyms */
const UNIT_ALIAS = new Map([
  ['tsp','tsp'], ['teaspoon','tsp'], ['teaspoons','tsp'],
  ['tbsp','tbsp'], ['tablespoon','tbsp'], ['tablespoons','tbsp'],
  ['fl oz','fl oz'], ['floz','fl oz'], ['fluid ounce','fl oz'], ['fluid ounces','fl oz'],
  ['cup','cup'], ['cups','cup'],
  ['ml','ml'], ['milliliter','ml'], ['milliliters','ml'],
  ['l','l'], ['liter','l'], ['liters','l'],

  ['g','g'], ['gram','g'], ['grams','g'],
  ['kg','kg'], ['kilogram','kg'], ['kilograms','kg'],
  ['oz','oz'], ['ounce','oz'], ['ounces','oz'],
  ['lb','lb'], ['lbs','lb'], ['pound','lb'], ['pounds','lb'],

  ['pc','pc'], ['piece','pc'], ['pieces','pc'],
  ['slice','slice'], ['slices','slice'],
  ['clove','clove'], ['cloves','clove'],
]);

function normalizeUnit(uRaw){
  const u = (uRaw||'').trim().toLowerCase();
  const key = UNIT_ALIAS.get(u) || u;
  const def = UNIT[key];
  if (!def) return null;
  return { key, ...def };
}

/* Preferred display units (editable with UI buttons) */
const DEFAULT_PREF = { volume: 'ml', mass: 'g', count: 'pc' };
function getPrefs(){
  try { return Object.assign({}, DEFAULT_PREF, JSON.parse(localStorage.getItem(LS_UNIT_PREF) || '{}')); }
  catch { return { ...DEFAULT_PREF }; }
}
function setPref(dim, key){
  const p = getPrefs();
  p[dim] = key;
  localStorage.setItem(LS_UNIT_PREF, JSON.stringify(p));
}

/* Optional densities (g per ml) to allow volume↔mass merging for common items.
   You can expand this list or add per-ingredient overrides in recipes.js as:
   { name:'Rolled oats', qty:0.5, unit:'cup', category:'Grains', density_g_per_ml: 0.38 }
*/
const DENSITY_G_PER_ML = new Map([
  ['water', 1.00],
  ['milk', 1.03],
  ['olive oil', 0.91],
  ['butter (melted)', 0.91],
  ['honey', 1.42],
  ['rolled oats', 0.38],
  ['all-purpose flour', 0.53],
  ['granulated sugar', 0.85],
  ['brown sugar', 0.72],
  ['peanut butter', 1.05],
]);

/* Determine density for an ingredient (per-item override or lookup) */
function getDensityGPerMl(ingName, ingObj){
  if (ingObj && typeof ingObj.density_g_per_ml === 'number') return ingObj.density_g_per_ml;
  // try a few normalized keys
  const nm = normName(ingName);
  if (DENSITY_G_PER_ML.has(nm)) return DENSITY_G_PER_ML.get(nm);
  // fallback: if the name contains a known key (e.g., "olive oil (extra virgin)")
  for (const [key,val] of DENSITY_G_PER_ML.entries()){
    if (nm.includes(key)) return val;
  }
  return null;
}

/* ===== Aggregation ===== */
function loadPlan(){ try { return JSON.parse(localStorage.getItem(LS_PLAN)) || {}; } catch { return {}; } }
const DAYS = [0,1,2,3,4,5,6];
const MEALS = ['breakfast','lunch','dinner','side'];

function aggregateWeek(weekStartISO){
  const planAll = loadPlan();
  const week = planAll[weekStartISO] || {};
  // Map: ingredientKey -> { name, category, dimPref, mass_g, vol_ml, count_pc, details: Set(units seen) }
  const bucket = new Map();

  function addOne(ing, factor){
    const name = ing.name || '';
    const unitInfo = normalizeUnit(ing.unit);
    const qty = (+ing.qty || 0) * factor;
    const cat = ing.category || 'Other';
    const key = `${cat}|${normName(name)}`;

    if (!bucket.has(key)){
      bucket.set(key, { name, category: cat, mass_g: 0, vol_ml: 0, count_pc: 0, details: new Set(), anyDensity: null });
    }
    const rec = bucket.get(key);

    if (!unitInfo){
      // No/unknown unit: treat as count pcs
      rec.count_pc += qty;
      rec.details.add('(unknown unit → pc)');
      return;
    }

    rec.details.add(unitInfo.key);

    if (unitInfo.dim === 'mass'){
      rec.mass_g += unitInfo.toBase(qty);
    } else if (unitInfo.dim === 'volume'){
      rec.vol_ml += unitInfo.toBase(qty);
    } else if (unitInfo.dim === 'count'){
      rec.count_pc += unitInfo.toBase(qty);
    }

    // Track availability of density for potential bridging
    const dens = getDensityGPerMl(name, ing);
    if (dens) rec.anyDensity = dens;
  }

  for (const day of DAYS){
    for (const meal of MEALS){
      const key = `${day}.${meal}`;
      const cell = week[key];
      if (!cell || !cell.id) continue;
      const r = findRecipeById(cell.id);
      const s = Math.max(0, +cell.s || 0);
      if (!r || !Array.isArray(r.ingredients) || s <= 0) continue;

      const base = Math.max(1, +r.baseServings || 1);
      const factor = s / base;

      for (const ing of r.ingredients){
        addOne(ing, factor);
      }
    }
  }

  // After summing, try to bridge volume<->mass if both present and density known
  for (const rec of bucket.values()){
    if (rec.mass_g > 0 && rec.vol_ml > 0){
      const dens = rec.anyDensity;
      if (dens){
        // Convert all volume into mass (preferred canonical if any mass exists)
        rec.mass_g += rec.vol_ml * dens;
        rec.vol_ml = 0;
        rec.details.add('bridged via density');
      }
      // If no density → leave as two separate dimensions; UI will show both lines
    }
  }

  return bucket;
}

/* ===== Rendering ===== */
const CATEGORY_ORDER = ['Produce','Vegetables','Fruit','Meat','Seafood','Dairy','Bakery','Grains','Pantry','Dips','Spices','Frozen','Beverages','Other'];

function prefsForRender(){
  const p = getPrefs();
  // which concrete units to use when displaying each dimension
  const MASS_UNITS   = ['g','oz','lb'];
  const VOLUME_UNITS = ['ml','cup','tbsp'];
  const COUNT_UNITS  = ['pc','slice','clove'];

  return {
    mass:   UNIT[p.mass]   ? p.mass   : 'g',
    volume: UNIT[p.volume] ? p.volume : 'ml',
    count:  (p.count === 'slice' || p.count === 'clove') ? p.count : 'pc',
    MASS_UNITS, VOLUME_UNITS, COUNT_UNITS
  };
}

function fmt(n){ return (Math.round(n * 100) / 100).toString(); }

function groceryKey(cat, name, displayUnit){ return `${cat}::${normName(name)}::${displayUnit||''}`; }

function renderUnitToggles(container){
  const prefs = prefsForRender();

  function makeGroup(label, dim, options){
    const wrap = document.createElement('div');
    wrap.className = 'unit-toggle';
    wrap.style.cssText = 'display:flex; gap:.25rem; align-items:center; flex-wrap:wrap;';

    const lb = document.createElement('strong');
    lb.textContent = label + ':';
    lb.style.marginRight = '.25rem';
    wrap.appendChild(lb);

    options.forEach(uKey => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = UNIT[uKey]?.label || uKey;
      btn.className = 'btn-mini';
      btn.style.cssText = `
        border:1px solid #e5e7eb; background:#fff; border-radius:999px; padding:.2rem .5rem; cursor:pointer;
        ${prefs[dim] === uKey ? 'font-weight:700;' : ''}
      `;
      btn.addEventListener('click', () => {
        setPref(dim, uKey);
        renderGroceryPage(); // re-render
      });
      wrap.appendChild(btn);
    });
    return wrap;
  }

  const bar = document.createElement('div');
  bar.style.cssText = 'display:flex; gap:1rem; align-items:center; flex-wrap:wrap; margin: .25rem 0 .75rem;';
  bar.appendChild(makeGroup('Volume', 'volume', prefs.VOLUME_UNITS));
  bar.appendChild(makeGroup('Mass',   'mass',   prefs.MASS_UNITS));
  bar.appendChild(makeGroup('Count',  'count',  prefs.COUNT_UNITS));
  container.appendChild(bar);
}

function renderGroceryPage(){
  const weekOf = document.getElementById('weekOf');
  if (!weekOf) return;
  const weekStartISO = weekOf.value;

  const body = document.getElementById('groceryBody');
  if (!body) return;

  body.innerHTML = '';

  // Header controls (unit toggles)
  renderUnitToggles(body);

  const prefs = prefsForRender();
  const agg = aggregateWeek(weekStartISO);
  const checksAll = (function(){ try { return JSON.parse(localStorage.getItem(LS_GROC)) || {}; } catch { return {}; }})();
  const weekChecks = checksAll[weekStartISO] || {};

  // Group by category
  const byCat = {};
  for (const rec of agg.values()){
    if (!byCat[rec.category]) byCat[rec.category] = [];
    byCat[rec.category].push(rec);
  }

  // Render categories in preferred order
  const orderedCats = CATEGORY_ORDER.filter(c => byCat[c]).concat(Object.keys(byCat).filter(c => !CATEGORY_ORDER.includes(c)));

  orderedCats.forEach(cat => {
    const list = byCat[cat];

    // Category block
    const section = document.createElement('section');
    section.className = 'gsection';
    section.style.margin = '1rem 0';

    const h = document.createElement('h3');
    h.className = 'gtitle';
    h.textContent = cat;
    h.style.margin = '.5rem 0';
    section.appendChild(h);

    // For each ingredient, we may need to render up to 2 lines (if both mass_g and vol_ml exist and no density)
    list.sort((a,b)=>normName(a.name).localeCompare(normName(b.name)));

    list.forEach(item => {
      // COUNT
      if (item.count_pc > 0){
        const outUnit = prefs.count;
        const key = groceryKey(cat, item.name, outUnit);
        const checked = !!weekChecks[key];
        const qty = item.count_pc; // base already in pcs
        const qtyStr = fmt(qty);

        const row = document.createElement('label');
        row.className = 'gitem';
        row.style.cssText = 'display:flex; align-items:center; gap:.5rem; padding:.25rem 0;';
        row.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''}>
          <span class="glbl">
            <span class="gqty">${qtyStr}</span>
            <span class="gunit">${outUnit}</span>
            <span class="gname">${item.name}</span>
          </span>
        `;
        const cb = row.querySelector('input');
        cb.addEventListener('change', () => {
          const all = (function(){ try { return JSON.parse(localStorage.getItem(LS_GROC)) || {}; } catch { return {}; }})();
          all[weekStartISO] = all[weekStartISO] || {};
          all[weekStartISO][key] = cb.checked;
          localStorage.setItem(LS_GROC, JSON.stringify(all));
        });
        section.appendChild(row);
      }

      // MASS
      if (item.mass_g > 0){
        const u = UNIT[prefs.mass];
        const out = u.fromBase(item.mass_g);
        const key = groceryKey(cat, item.name, u.label);
        const checked = !!weekChecks[key];

        const row = document.createElement('label');
        row.className = 'gitem';
        row.style.cssText = 'display:flex; align-items:center; gap:.5rem; padding:.25rem 0;';
        row.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''}>
          <span class="glbl">
            <span class="gqty">${fmt(out)}</span>
            <span class="gunit">${u.label}</span>
            <span class="gname">${item.name}</span>
          </span>
        `;
        const cb = row.querySelector('input');
        cb.addEventListener('change', () => {
          const all = (function(){ try { return JSON.parse(localStorage.getItem(LS_GROC)) || {}; } catch { return {}; }})();
          all[weekStartISO] = all[weekStartISO] || {};
          all[weekStartISO][key] = cb.checked;
          localStorage.setItem(LS_GROC, JSON.stringify(all));
        });
        section.appendChild(row);
      }

      // VOLUME (only if not bridged into mass)
      if (item.vol_ml > 0){
        const u = UNIT[prefs.volume];
        const out = u.fromBase(item.vol_ml);
        const key = groceryKey(cat, item.name, u.label);
        const checked = !!weekChecks[key];

        const row = document.createElement('label');
        row.className = 'gitem';
        row.style.cssText = 'display:flex; align-items:center; gap:.5rem; padding:.25rem 0;';
        row.innerHTML = `
          <input type="checkbox" ${checked ? 'checked' : ''}>
          <span class="glbl">
            <span class="gqty">${fmt(out)}</span>
            <span class="gunit">${u.label}</span>
            <span class="gname">${item.name}</span>
            ${item.anyDensity ? '' : (item.mass_g>0 ? '<em style="margin-left:.5rem; color:#9CA3AF;">(mixed units)</em>' : '')}
          </span>
        `;
        const cb = row.querySelector('input');
        cb.addEventListener('change', () => {
          const all = (function(){ try { return JSON.parse(localStorage.getItem(LS_GROC)) || {}; } catch { return {}; }})();
          all[weekStartISO] = all[weekStartISO] || {};
          all[weekStartISO][key] = cb.checked;
          localStorage.setItem(LS_GROC, JSON.stringify(all));
        });
        section.appendChild(row);
      }
    });

    body.appendChild(section);
  });
}

/* ===== Page wiring ===== */
document.addEventListener('DOMContentLoaded', () => {
  const weekOf = document.getElementById('weekOf');
  if (!weekOf) return;
  // ensure weekOf has a value (Sunday of current week) if empty
  if (!weekOf.value) {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const y = start.getFullYear();
    const m = String(start.getMonth()+1).padStart(2,'0');
    const d = String(start.getDate()).padStart(2,'0');
    weekOf.value = `${y}-${m}-${d}`;
  }

  // Listeners
  weekOf.addEventListener('change', renderGroceryPage);
  renderGroceryPage();
});
