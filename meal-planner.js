/* ===== Configure your recipes here ===== */
const recipes = [
  { id: 'lemon-chicken', title: 'Lemon Garlic Chicken', type: 'dinner',   url: 'recipes/lemon-chicken.html',
    nutrition: { protein: 35, carbs: 28, fat: 18, calories: 450 } },
  { id: 'template', title: 'Template', type: 'breakfast', url: 'recipes/template.html',
    nutrition: { protein: 7, carbs: 22, fat: 12, calories: 250 } },
  { id: 'quinoa-bowl',   title: 'Quinoa Veggie Bowl',   type: 'lunch',     url: 'recipes/quinoa-bowl.html',
    nutrition: { protein: 14, carbs: 45, fat: 10, calories: 360 } },
  { id: 'garlic-bread',  title: 'Garlic Bread',         type: 'side',      url: 'recipes/garlic-bread.html',
    nutrition: { protein: 5, carbs: 30, fat: 8,  calories: 220 } },
];

const DAYS  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MEALS = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',     label: 'Lunch' },
  { key: 'dinner',    label: 'Dinner' },
  { key: 'side',      label: 'Side' },
];

// bump storage version because shape changed (each cell stores {id, s})
const LS_KEY = 'mealPlanner.v3';

/* ===== Date helpers (LOCAL time) ===== */
function startOfWeekLocal(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // midnight local
  const day = d.getDay(); // 0=Sun
  d.setDate(d.getDate() - day); // Sunday
  return d;
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

/* ===== Storage helpers ===== */
function loadAll(){ try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; } }
function saveAll(obj){ localStorage.setItem(LS_KEY, JSON.stringify(obj)); }

/* Back-compat: v1/v2 stored just the recipe id (string). Normalize to {id, s:1}. */
function normalizeCell(data) {
  if (!data) return { id:'', s:1 };
  if (typeof data === 'string') return { id: data, s: 1 };
  // Defensive: ensure both fields exist
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

/* ===== Nutrition for one day (multiply by servings) ===== */
function computeDayTotals(weekStartISO, dayIndex) {
  const all = loadAll();
  const week = all[weekStartISO] || {};
  let protein = 0, carbs = 0, fat = 0, calories = 0;

  MEALS.forEach(meal => {
    const key = `${dayIndex}.${meal.key}`;
    const cell = normalizeCell(week[key]);
    const r = cell.id ? findRecipeById(cell.id) : null;
    const s = Math.max(0, +cell.s || 0); // clamp to >=0
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

/* ===== Build planner (main row + summary row per day) ===== */
function buildPlannerTable(weekStartISO) {
  const tbody = document.getElementById('plannerBody');
  tbody.innerHTML = '';
  const data = loadAll();
  const weekData = data[weekStartISO] || {};

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
        const all = loadAll();
        const wk = all[weekStartISO] || {};
        const sVal = Math.max(0, +servingsInput.value || 0);
        wk[key] = { id: sel.value, s: sVal };
        all[weekStartISO] = wk;
        saveAll(all);
      }

      sel.addEventListener('change', () => {
        saveCell();
        paintMeta();
        paintDaySummaryRow(weekStartISO, i);
      });

      // Update on change and on Enter
      const onServingsChange = () => {
        // normalize value
        let v = parseFloat(servingsInput.value);
        if (isNaN(v)) v = 0;
        if (v < 0) v = 0;
        servingsInput.value = v;
        saveCell();
        paintMeta();
        paintDaySummaryRow(weekStartISO, i);
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

    // Initial paint for this day's totals
    paintDaySummaryRow(weekStartISO, i);
  }
}

/* ===== Week controls ===== */
function setWeek(date) {
  const start = startOfWeekLocal(date);
  const iso = fmtLocalISO(start);
  const weekOf = document.getElementById('weekOf');
  weekOf.value = iso;
  buildPlannerTable(iso);
}

document.addEventListener('DOMContentLoaded', () => {
  const weekOf   = document.getElementById('weekOf');
  const prevWeek = document.getElementById('prevWeek');
  const nextWeek = document.getElementById('nextWeek');
  const printBtn = document.getElementById('printBtn');
  const clearBtn = document.getElementById('clearBtn');

  // init to current week (local)
  setWeek(new Date());

  weekOf.addEventListener('change', () => {
    const picked = parseDateInputLocal(weekOf.value);
    setWeek(picked);
  });

  prevWeek.addEventListener('click', () => {
    const base = parseDateInputLocal(weekOf.value);
    base.setDate(base.getDate() - 7);
    setWeek(base);
  });

  nextWeek.addEventListener('click', () => {
    const base = parseDateInputLocal(weekOf.value);
    base.setDate(base.getDate() + 7);
    setWeek(base);
  });

  printBtn.addEventListener('click', () => window.print());

  clearBtn.addEventListener('click', () => {
    if (!confirm('Clear all selections for this week?')) return;
    const data = loadAll();
    const iso = weekOf.value;
    if (data[iso]) {
      delete data[iso];
      saveAll(data);
      buildPlannerTable(iso);
    }
  });
});
