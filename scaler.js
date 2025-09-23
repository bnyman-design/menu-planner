  <script>
        function toFraction(num) {
          const fracMap = {0.125:'1/8',0.25:'1/4',0.3333:'1/3',0.375:'3/8',0.5:'1/2',0.625:'5/8',0.6666:'2/3',0.75:'3/4',0.875:'7/8'};
          const rounded = Math.round((num + Number.EPSILON) * 8) / 8;
          const whole = Math.trunc(rounded);
          const frac = +(rounded - whole).toFixed(3);
          const fracStr = Object.entries(fracMap).find(([k]) => Math.abs(frac - parseFloat(k)) < 0.02)?.[1] || (frac ? frac.toString() : '');
          return whole && fracStr ? `${whole} ${fracStr}` : whole ? `${whole}` : fracStr || '0';
        }

        const ingredientsList = document.getElementById('ingredientsList');
        const servingsInput = document.getElementById('servingsInput');
        const baseInput = document.getElementById('baseServings');
        const scaleBtn = document.getElementById('scaleBtn');
        const resetBtn = document.getElementById('resetBtn');
        const printBtn = document.getElementById('printBtn');

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
            calories: parseFloat(n.dataset.cal) || 0,
            protein: parseFloat(n.dataset.protein) || 0,
            carbs: parseFloat(n.dataset.carbs) || 0,
            fat: parseFloat(n.dataset.fat) || 0,
          };
          const tot = {
            calories: per.calories * servings,
            protein: per.protein * servings,
            carbs: per.carbs * servings,
            fat: per.fat * servings,
          };
          document.getElementById('perCal').textContent = `${Math.round(per.calories)} kcal`;
          document.getElementById('perProtein').textContent = per.protein.toFixed(1);
          document.getElementById('perCarbs').textContent = per.carbs.toFixed(1);
          document.getElementById('perFat').textContent = per.fat.toFixed(1);
          document.getElementById('totCal').textContent = `${Math.round(tot.calories)} kcal`;
          document.getElementById('totProtein').textContent = tot.protein.toFixed(1);
          document.getElementById('totCarbs').textContent = tot.carbs.toFixed(1);
          document.getElementById('totFat').textContent = tot.fat.toFixed(1);
        }

        function renderScaled() {
          const target = parseFloat(servingsInput.value) || 0;
          const base = parseFloat(baseInput.value) || 1;
          const factor = base ? target / base : 1;
          ingredientsList.querySelectorAll('.ingredient').forEach((li, i) => {
            const baseQty = original[i].qty;
            const unit = original[i].unit;
            const scaled = baseQty * factor;
            const qtyOut = li.querySelector('.qty-out');
            qtyOut.textContent = toFraction(scaled);
            const unitSpan = li.querySelector('.qty');
            unitSpan.innerHTML = `<span class="qty-out">${qtyOut.textContent}</span> ${unit ? unit : ''}`.trim();
          });
          renderNutrition();
        }

        function resetQuantities() {
          servingsInput.value = baseInput.value;
          renderScaled();
        }

        scaleBtn.addEventListener('click', renderScaled);
        resetBtn.addEventListener('click', resetQuantities);
        printBtn.addEventListener('click', () => window.print());

        [servingsInput, baseInput].forEach(inp => {
          inp.addEventListener('change', renderScaled);
          inp.addEventListener('keyup', e => { if (e.key === 'Enter') renderScaled(); });
        });

        renderScaled();
      </script>