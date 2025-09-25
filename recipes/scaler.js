 // Format numbers as nice fractions (to eighths)
function toFraction(num) {
  const fracMap = {
    0.125: '1/8', 0.25: '1/4', 0.3333: '1/3', 0.375: '3/8',
    0.5: '1/2', 0.625: '5/8', 0.6666: '2/3', 0.75: '3/4', 0.875: '7/8'
  };
  const rounded = Math.round((num + Number.EPSILON) * 8) / 8;
  const whole = Math.trunc(rounded);
  const frac = +(rounded - whole).toFixed(3);
  const entry = Object.entries(fracMap)
    .find(([k]) => Math.abs(frac - parseFloat(k)) < 0.02);
  const fracStr = entry ? entry[1] : (frac ? frac.toString() : '');
  return whole && fracStr ? `${whole} ${fracStr}` : whole ? `${whole}` : fracStr || '0';
}

document.addEventListener('DOMContentLoaded', () => {
  const ingredientsList = document.getElementById('ingredientsList');
  const servingsInput   = document.getElementById('servingsInput');
  const baseInput       = document.getElementById('baseServings');
  const scaleBtn        = document.getElementById('scaleBtn');
  const resetBtn        = document.getElementById('resetBtn');
  const printBtn        = document.getElementById('printBtn');

  if (!ingredientsList || !servingsInput || !baseInput) return;

  const original = [...ingredientsList.querySelectorAll('.ingredient')].map(li => ({
    qty: parseFloat(li.dataset.qty),
    unit: li.dataset.unit || '',
    name: li.dataset.name || li.querySelector('.name')?.textContent?.trim() || '',
  }));

  function renderNutrition() {
    const n = document.getElementById('nutrition');
    if (!n) return;
    const servings = parseFloat(servingsInput.value) || 0;

    const per = {
      calories: parseFloat(n.dataset.cal)    || 0,
      protein:  parseFloat(n.dataset.protein)|| 0,
      carbs:    parseFloat(n.dataset.carbs)  || 0,
      fat:      parseFloat(n.dataset.fat)    || 0,
    };
    const tot = {
      calories: per.calories * servings,
      protein:  per.protein  * servings,
      carbs:    per.carbs    * servings,
      fat:      per.fat      * servings,
    };

    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('perCal',     `${Math.round(per.calories)} kcal`);
    set('perProtein', per.protein.toFixed(1));
    set('perCarbs',   per.carbs.toFixed(1));
    set('perFat',     per.fat.toFixed(1));

    set('totCal',     `${Math.round(tot.calories)} kcal`);
    set('totProtein', tot.protein.toFixed(1));
    set('totCarbs',   tot.carbs.toFixed(1));
    set('totFat',     tot.fat.toFixed(1));
  }

  function renderScaled() {
    const target = parseFloat(servingsInput.value) || 0;
    const base   = parseFloat(baseInput.value)     || 1;
    const factor = base ? target / base : 1;

    ingredientsList.querySelectorAll('.ingredient').forEach((li, i) => {
      const baseQty = original[i].qty;
      const unit    = original[i].unit;
      const scaled  = baseQty * factor;

      const qtyOut  = li.querySelector('.qty-out');
      const unitBox = li.querySelector('.qty');

      if (qtyOut)  qtyOut.textContent = toFraction(scaled);
      if (unitBox) unitBox.innerHTML  = `<span class="qty-out">${qtyOut ? qtyOut.textContent : toFraction(scaled)}</span> ${unit ? unit : ''}`.trim();
    });

    renderNutrition();
  }

  function resetQuantities() {
    servingsInput.value = baseInput.value;
    renderScaled();
  }

  scaleBtn?.addEventListener('click', renderScaled);
  resetBtn?.addEventListener('click', resetQuantities);
  printBtn?.addEventListener('click', () => window.print());

  [servingsInput, baseInput].forEach(inp => {
    inp?.addEventListener('change', renderScaled);
    inp?.addEventListener('keyup', e => { if (e.key === 'Enter') renderScaled(); });
  });

  // initial paint
  renderScaled();
});
