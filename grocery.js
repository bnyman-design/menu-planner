/* Must match keys/types used in meal-planner.js */
const LS_PLAN = 'mealPlanner.v3';       // selections & servings
const LS_GROC = 'mealPlanner.grocery';  // checkbox state by week
const MEALS   = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',     label: 'Lunch' },
  { key: 'dinner',    label: 'Dinner' },
  { key: 'side',      label: 'Side' },
];
const CATEGORY_ORDER = ['Produce','Vegetables','Fruit','Meat','Seafood','Dairy','Bakery','Grains','Pantry','Spices','Frozen','Beverages','Other'];

/* Recreate helpers (local-time safe) */
function startOfWeekLocal(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay(); d.setDate(d.getDate() - day); return d;
}
function fmtLocalISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function parseDateInputLocal(yyyy_mm_dd) {
  const [y,m,d] = yyyy_mm_dd.split('-').map(Number);
  return new Date(y, (m||1)-1, d||1);
}
function load(key){ try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } }
function save(key, obj){ localStorage.setItem(key, JSON.stringify(obj)); }
function normalizeCell(data) {
  if (!data) return { id:'', s:1 };
  if (typeof data === 'string') return { id: data, s: 1 };
  return { id: data.id || '', s: typeof data.s === 'number' ? data.s : 1 };
}
function normName(name){ return (name||'').toLowerCase().trim().replace(/\s+/g,' '); }
function groceryKey(cat, name, unit){ return `${cat}::${normName(name)}::${unit||''}`; }
function fmtQty(q){ return (Math.round(q * 100) / 100).toString(); }

/* We need recipe metadata to aggregate ingredients. We can read it from window.__RECIPES if available. 
   If not, we’ll try to fetch it from meal-planner.js by reading a global export. 
   Simplest: embed a mirroring list on this page OR copy/paste your recipes JSON below. */
let RECIPES = window.__RECIPES || [];

/* Optional: if meal-planner.js is loaded on the planner page only, 
   copy your recipes array here to ensure grocery page works standalone.
   Example (remove this block if you attach __RECIPES globally in planner):

RECIPES = [
  // Keep in sync with meal-planner.js
  // { id:'lemon-chicken', title:'Lemon Garlic Chicken', type:'dinner', url:'index.html',
  //   nutrition:{protein:35, carbs:28, fat:18, calories:450},
  //   baseServings:4,
  //   ingredients:[ {name:'chicken thighs', qty:1.5, unit:'lb', category:'Meat'}, ... ]
  // },
];
*/

function findRecipeById(id){ return RECIPES.find(r => r.id === id); }

function aggregateGrocery(weekStartISO) {
  const plan = load(LS_PLAN)[weekStartISO] || {};
  const totals = new Map();

  for (let day = 0; day < 7; day++) {
    for (const meal of MEALS) {
      const key = `${day}.${meal.key}`;
      const cell = normalizeCell(plan[key]);
      const r = cell.id ? findRecipeById(cell.id) : null;
      const servings = Math.max(0, +cell.s || 0);
      if (!r || !r.ingredients || servings <= 0) continue;

      const base = Math.max(1, +r.baseServings || 1);
      const factor = servings / base;

      r.ingredients.forEach(ing => {
        const cat  = ing.category || 'Other';
        const unit = (ing.unit || '').trim();
        const nm   = normName(ing.name || '');
        const qty  = (+ing.qty || 0) * factor;
        const aggKey = `${cat}|${nm}|${unit}`;
        if (!totals.has(aggKey)) totals.set(aggKey, { cat, name: ing.name, unit, qty: 0 });
        totals.get(aggKey).qty += qty;
      });
    }
  }

  const grouped = {};
  totals.forEach(item => {
    if (!grouped[item.cat]) grouped[item.cat] = [];
    grouped[item.cat].push(item);
  });

  const ordered = {};
  CATEGORY_ORDER.forEach(c => { if (grouped[c]) ordered[c] = grouped[c]; });
  Object.keys(grouped).forEach(c => { if (!(c in ordered)) ordered[c] = grouped[c]; });
  Object.values(ordered).forEach(arr => arr.sort((a,b)=>normName(a.name).localeCompare(normName(b.name))));
  return ordered;
}

function renderGrocery(weekStartISO) {
  const container = document.getElementById('groceryBody');
  container.innerHTML = '';

  const data = aggregateGrocery(weekStartISO);
  const checksAll = load(LS_GROC);
  const weekChecks = checksAll[weekStartISO] || {};

  Object.keys(data).forEach(cat => {
    const section = document.createElement('section');
    section.className = 'gsection';

    const h = document.createElement('h3');
    h.className = 'gtitle';
    h.textContent = cat;
    section.appendChild(h);

    data[cat].forEach(item => {
      const key = groceryKey(item.cat, item.name, item.unit);
      const checked = !!weekChecks[key];
      const qty = item.qty;
      const zero = qty <= 0.0001;

      const row = document.createElement('label');
      row.className = 'gitem' + (zero ? ' gzero' : '');
      row.innerHTML = `
        <input type="checkbox" ${checked ? 'checked' : ''} aria-label="Mark ${item.name} as purchased">
        <span class="glbl">
          <span class="gqty">${fmtQty(qty)}</span>
          ${item.unit ? `<span class="gunit">${item.unit}</span>` : ''}
          <span class="gname">${item.name}</span>
        </span>
      `;

      const cb = row.querySelector('input');
      cb.addEventListener('change', () => {
        const all = load(LS_GROC);
        all[weekStartISO] = all[weekStartISO] || {};
        all[weekStartISO][key] = cb.checked;
        save(LS_GROC, all);
      });

      section.appendChild(row);
    });

    container.appendChild(section);
  });
}

/* Week lifecycle */
function setWeek(date) {
  const start = startOfWeekLocal(date);
  const iso = fmtLocalISO(start);
  const weekOf = document.getElementById('weekOf');
  weekOf.value = iso;
  renderGrocery(iso);

  // Wire buttons
  document.getElementById('printBtn').onclick = () => window.print();
  document.getElementById('clearChecks').onclick = () => {
    const all = load(LS_GROC);
    delete all[iso];
    save(LS_GROC, all);
    renderGrocery(iso);
  };
  document.getElementById('gCheckAll').onclick = () => {
    const all = load(LS_GROC);
    all[iso] = all[iso] || {};
    document.querySelectorAll('#groceryBody input[type="checkbox"]').forEach(cb => {
      cb.checked = true;
      const row = cb.closest('.gitem');
      const unitEl = row.querySelector('.gunit');
      const nameEl = row.querySelector('.gname');
      const cat = row.closest('.gsection').querySelector('.gtitle').textContent;
      const unit = unitEl ? unitEl.textContent : '';
      const name = nameEl.textContent;
      const key = groceryKey(cat, name, unit);
      all[iso][key] = true;
    });
    save(LS_GROC, all);
  };
  document.getElementById('gUncheckAll').onclick = () => {
    const all = load(LS_GROC);
    all[iso] = all[iso] || {};
    document.querySelectorAll('#groceryBody input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
      const row = cb.closest('.gitem');
      const unitEl = row.querySelector('.gunit');
      const nameEl = row.querySelector('.gname');
      const cat = row.closest('.gsection').querySelector('.gtitle').textContent;
      const unit = unitEl ? unitEl.textContent : '';
      const name = nameEl.textContent;
      const key = groceryKey(cat, name, unit);
      all[iso][key] = false;
    });
    save(LS_GROC, all);
  };
  document.getElementById('gHideZero').onclick = () => {
    document.querySelectorAll('.gitem.gzero').forEach(el => el.style.display = 'none');
  };
  document.getElementById('gShowZero').onclick = () => {
    document.querySelectorAll('.gitem.gzero').forEach(el => el.style.display = '')
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Pull the recipes list from the opener (planner) if available:
  // If you set window.__RECIPES = recipes in meal-planner.js, this page will see it when opened from same origin.
  // Otherwise, copy your recipes array into RECIPES above.
  if (!RECIPES.length && window.opener && window.opener.__RECIPES) {
    try { RECIPES = JSON.parse(JSON.stringify(window.opener.__RECIPES)); } catch {}
  }

  const weekOf = document.getElementById('weekOf');
  setWeek(new Date());
  weekOf.addEventListener('change', () => {
    const picked = parseDateInputLocal(weekOf.value);
    setWeek(picked);
  });
});
