/* ===== Recipes source (from recipes.js) ===== */
const recipes = Array.isArray(window.__RECIPES) ? window.__RECIPES : [];

/* ===== Constants ===== */
const DAYS  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MEALS = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',     label: 'Lunch' },
  { key: 'dinner',    label: 'Dinner' },
  { key: 'side',      label: 'Side' },
];

// Storage keys
const LS_PLAN = 'mealPlanner.v3';       // selections & servings
const LS_GROC = 'mealPlanner.grocery';  // checkbox state by week

/* Track current week ISO (YYYY-MM-DD for Sunday) */
let CURRENT_ISO = null;

/* ===== Date helpers (LOCAL time) ===== */
function startOfWeekLocal(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay(); // 0 = Sun
  d.setDate(d.getDate() - day);
  return d;
}
function fmtLocalISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function parseDateInputLocal(yyyy_mm_dd) {
  const [y,m,d] = (yyyy_mm_dd || '').split('-').map(Number);
  return new Date(y || 1970, (m || 1) - 1, d || 1);
}

/* ===== Storage helpers ===== */
function load(key){ try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } }
function save(key, obj){ localStorage.setItem(key, JSON.stringify(obj)); }

/* ===== Planner helpers ===== */
function normalizeCell(data) {
  if (!data) return { id:'', s:1 };
  if (typeof data === 'string') return { id: data, s: 1 };
  return { id: data.id || '', s: typeof data.s === 'number' ? data.s : 1 };
}
function findRecipeById(id){ return recipes.find(r => r.id === id); }

function optionsFor(type) {
  const list = recipes.filter(r => r.type === type);
  const frag = document.createDocumentFragment();
  const optNone = document.createElement('option');
  optNone.value = ''; optNone.textContent = '— Select a recipe —';
  frag.appendChild(optNone);
  list.forEach(r => {
    const o = document.createElement('option');
    o.value = r.id;
    o.textContent = r.title;
    frag.appendChild(o);
  });
  return frag;
}

/* ===== Nutrition per day (servings-aware) ===== */
function computeDayTotals(weekStartISO, dayIndex) {
  const all = load(LS_PLAN);
  const week = all[weekStartISO] || {};
  let protein = 0, carbs = 0, fat = 0, calories = 0;

  MEALS.forEach(meal => {
    const key = `${dayIndex}.${meal.key}`;
    const cell = normalizeCell(week[key]);
    const r = cell.id ? findRecipeById(cell.id) : null;
    const s = Math.max(0, +cell.s || 0);
    if (r && r.nutrition && s > 0) {
      protein  += (r.nutrition.protein  || 0) * s;
      carbs    += (r.nutrition.carbs    || 0) * s;
      fat      += (r.nutrition.fat      || 0) * s;
      calories += (r.nutrition.calories || 0) * s;
    }
  });

  return {
    protein: protein.toFixed(1),
    carbs:   carbs.toFixed(1),
    fat:     fat.toFixed(1),
    calories: Math.round(calories)
  };
}

function paintDaySummaryRow(weekStartISO, dayIndex) {
  const row = document.getElementById(`nutri-${dayIndex}`);
  if (!row) return;
  const t = computeDayTotals(weekStartISO, dayIndex);
  row.innerHTML = `
    <td colspan="5">
      <div class="nutri-line" aria-live="polite">
        <span class="label">Daily totals:</span>
        <span class="nutri-chip"><strong>P</strong> ${t.protein} g</span>
        <span class="nutri-chip"><strong>C</strong> ${t.carbs} g</span>
        <span class="nutri-chip"><strong>F</strong> ${t.fat} g</span>
        <span class="nutri-chip"><strong>kcal</strong> ${t.calories}</span>
      </div>
    </td>
  `;
}

/* ===== Grocery aggregation (guarded for planner page) ===== */
const CATEGORY_ORDER = ['Produce','Vegetables','Fruit','Meat','Seafood','Dairy','Bakery','Grains','Pantry','Spices','Frozen','Beverages','Other'];
function normName(name){ return (name||'').toLowerCase().trim().replace(/\s+/g,' '); }

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

function fmtQty(q){ return (Math.round(q * 100) / 100).toString(); }
function groceryKey(cat, name, unit){ return `${cat}::${normName(name)}::${unit||''}`; }

/* IMPORTANT GUARD: do nothing if grocery UI isn't on this page */
function renderGrocery(weekStartISO) {
  const container = document.getElementById('groceryBody');
  if (!container) return; // Planner page has no grocery container — skip safely

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

/* ===== Build planner (main row + summary row per day) ===== */
function buildPlannerTable(weekStartISO) {
  const tbody = document.getElementById('plannerBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  const all = load(LS_PLAN);
  const weekData = all[weekStartISO] || {};

  for (let i = 0; i < 7; i++) {
    // Main day row
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.scope = 'row';
    th.textContent = DAYS[i];
    tr.appendChild(th);

    MEALS.forEach(meal => {
      const td = document.createElement('td');
      td.dataset.label = meal.label;

      const slot = document.createElement('div');
      slot.className = 'meal-slot';

      // Recipe dropdown
      const sel = document.createElement('select');
      sel.className = 'meal-select';
      sel.setAttribute('aria-label', `${DAYS[i]} ${meal.label} recipe selector`);
      sel.appendChild(optionsFor(meal.key));

      // Servings control
      const servingsWrap = document.createElement('div');
      servingsWrap.className = 'servings';
      servingsWrap.innerHTML = `
        <label for="s-${i}-${meal.key}">Servings</label>
        <input id="s-${i}-${meal.key}" type="number" step="0.25" min="0" value="1" inputmode="decimal" />
        <small>per recipe</small>
      `;
      const servingsInput = servingsWrap.querySelector('input');

      const key = `${i}.${meal.key}`;
      const cell = normalizeCell(weekData[key]);
      if (cell.id) sel.value = cell.id;
      if (typeof cell.s === 'number') servingsInput.value = cell.s;

      const meta = document.createElement('div');
      meta.className = 'meal-meta';

      function paintMeta() {
        const r = findRecipeById(sel.value);
        const s = Math.max(0, +servingsInput.value || 0);
        if (!r) { meta.innerHTML = '<span class="tag">No recipe selected</span>'; return; }
        meta.innerHTML = `
          <span class="tag">${meal.label}</span>
          <a href="${r.url}" target="_blank" rel="noopener">Open recipe</a>
          <span class="tag">${s}× serving${s === 1 ? '' : 's'}</span>
        `;
      }
      paintMeta();

      function saveCell() {
        const all = load(LS_PLAN);
        const wk = all[weekStartISO] || {};
        const sVal = Math.max(0, +servingsInput.value || 0);
        wk[key] = { id: sel.value, s: sVal };
        all[weekStartISO] = wk;
        save(LS_PLAN, all);
      }

      sel.addEventListener('change', () => {
        saveCell();
        paintMeta();
        paintDaySummaryRow(weekStartISO, i);
        renderGrocery(weekStartISO); // safe: no-op on planner page
      });

      const onServingsChange = () => {
        let v = parseFloat(servingsInput.value);
        if (isNaN(v) || v < 0) v = 0;
        servingsInput.value = v;
        saveCell();
        paintMeta();
        paintDaySummaryRow(weekStartISO, i);
        renderGrocery(weekStartISO);
      };
      servingsInput.addEventListener('change', onServingsChange);
      servingsInput.addEventListener('keyup', e => { if (e.key === 'Enter') onServingsChange(); });

      slot.appendChild(sel);
      slot.appendChild(servingsWrap);
      slot.appendChild(meta);
      td.appendChild(slot);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);

    // Nutrition summary row for this day
    const trSum = document.createElement('tr');
    trSum.className = 'nutri-row';
    trSum.id = `nutri-${i}`;
    tbody.appendChild(trSum);

    paintDaySummaryRow(weekStartISO, i);
  }

  // Safe on planner; renders only if grocery UI exists (e.g., grocery.html)
  renderGrocery(weekStartISO);
}

/* ===== Week controls ===== */
function setWeek(date) {
  try {
    const start = startOfWeekLocal(date);
    const iso = fmtLocalISO(start);
    CURRENT_ISO = iso;

    const weekOf = document.getElementById('weekOf');
    if (weekOf) weekOf.value = iso;

    buildPlannerTable(iso);
  } catch (e) {
    console.error('setWeek failed:', e);
  }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  const weekOf   = document.getElementById('weekOf');
  const prevWeek = document.getElementById('prevWeek');
  const nextWeek = document.getElementById('nextWeek');
  const printBtn = document.getElementById('printBtn');
  const clearBtn = document.getElementById('clearBtn');

  // 1) Wire listeners FIRST
  if (weekOf) {
    weekOf.addEventListener('change', () => {
      const picked = parseDateInputLocal(weekOf.value);
      setWeek(picked);
    });
  }
  if (prevWeek) {
    prevWeek.addEventListener('click', () => {
      const base = CURRENT_ISO ? parseDateInputLocal(CURRENT_ISO) : new Date();
      base.setDate(base.getDate() - 7);
      setWeek(base);
    });
  }
  if (nextWeek) {
    nextWeek.addEventListener('click', () => {
      const base = CURRENT_ISO ? parseDateInputLocal(CURRENT_ISO) : new Date();
      base.setDate(base.getDate() + 7);
      setWeek(base);
    });
  }
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (!CURRENT_ISO) return;
      if (!confirm('Clear all selections for this week?')) return;
      const plan = load(LS_PLAN);
      if (plan[CURRENT_ISO]) { delete plan[CURRENT_ISO]; save(LS_PLAN, plan); }
      const groc = load(LS_GROC);
      if (groc[CURRENT_ISO]) { delete groc[CURRENT_ISO]; save(LS_GROC, groc); }
      setWeek(parseDateInputLocal(CURRENT_ISO)); // rebuild clean
    });
  }

  // 2) Then render the current week
  setWeek(new Date());
});
