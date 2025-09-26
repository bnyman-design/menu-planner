// ingredients-db.js
// Densities are g/ml when given. Nutrition is per 100 g (USDA-style).
// Values are reasonable estimates; tweak to match your labels.

window.__INGREDIENTS = {
  /* ===== Produce ===== */
  'broccoli florets':        { density_g_per_ml: 0.35, per100g: { cal: 34, protein: 2.8, carbs: 6.6, fat: 0.4 } },
  'cucumber':                { density_g_per_ml: 0.40, per100g: { cal: 16, protein: 0.7, carbs: 3.6, fat: 0.1 } },
  'tomato':                  { density_g_per_ml: 0.95, per100g: { cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2 } },
  'cherry tomatoes':         { density_g_per_ml: 0.95, per100g: { cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2 } },
  'spinach':                 { density_g_per_ml: 0.10, per100g: { cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4 } },
  'romaine lettuce':         { density_g_per_ml: 0.07, per100g: { cal: 17, protein: 1.2, carbs: 3.3, fat: 0.3 } },
  'mixed greens':            { density_g_per_ml: 0.06, per100g: { cal: 17, protein: 1.5, carbs: 3.0, fat: 0.3 } },
  'carrot':                  { density_g_per_ml: 0.65, per100g: { cal: 41, protein: 0.9, carbs: 9.6, fat: 0.2 } },
  'celery':                  { density_g_per_ml: 0.32, per100g: { cal: 16, protein: 0.7, carbs: 3.0, fat: 0.2 } },
  'onion':                   { density_g_per_ml: 0.60, per100g: { cal: 40, protein: 1.1, carbs: 9.3, fat: 0.1 } },
  'red onion':               { density_g_per_ml: 0.60, per100g: { cal: 40, protein: 1.1, carbs: 9.3, fat: 0.1 } },
  'garlic':                  { weight_g_per_pc: 3,     per100g: { cal: 149, protein: 6.4, carbs: 33.1, fat: 0.5 } },
  'basil':                   { density_g_per_ml: 0.08, per100g: { cal: 23, protein: 3.2, carbs: 2.7, fat: 0.6 } },
  'zucchini':                { density_g_per_ml: 0.40, per100g: { cal: 17, protein: 1.2, carbs: 3.1, fat: 0.3 } },
  'cauliflower florets':     { density_g_per_ml: 0.33, per100g: { cal: 25, protein: 1.9, carbs: 5.0, fat: 0.3 } },
  'green beans':             { density_g_per_ml: 0.36, per100g: { cal: 31, protein: 1.8, carbs: 7.1, fat: 0.1 } },
  'brussels sprouts':        { density_g_per_ml: 0.50, per100g: { cal: 43, protein: 3.4, carbs: 9.0, fat: 0.3 } },
  'banana':                  { weight_g_per_pc: 118,   per100g: { cal: 89, protein: 1.1, carbs: 23,  fat: 0.3 } },
  'avocado':                 { weight_g_per_pc: 200,   per100g: { cal: 160, protein: 2, carbs: 9,    fat: 15 } },
  'lemon juice':             { density_g_per_ml: 1.03, per100g: { cal: 22, protein: 0.4, carbs: 6.9, fat: 0.2 } },

  /* ===== Dairy & Eggs ===== */
  'eggs':                    { weight_g_per_pc: 50,    per100g: { cal: 143, protein: 12.6, carbs: 1.1, fat: 9.5 } },
  'cottage cheese':          { density_g_per_ml: 1.10, per100g: { cal: 98,  protein: 11.1, carbs: 3.4, fat: 4.3 } },
  'feta cheese':             { density_g_per_ml: 1.10, per100g: { cal: 265, protein: 14.2, carbs: 3.9, fat: 21.5 } },
  'mozzarella (fresh)':      { density_g_per_ml: 1.05, per100g: { cal: 280, protein: 18,   carbs: 3,   fat: 21 } },
  'parmesan':                { density_g_per_ml: 1.10, per100g: { cal: 420, protein: 38,   carbs: 4,   fat: 28 } },
  'greek yogurt (plain)':    { density_g_per_ml: 1.03, per100g: { cal: 59,  protein: 10,   carbs: 3.6, fat: 0.4 } },
  'milk (unsweetened)':      { density_g_per_ml: 1.03, per100g: { cal: 42,  protein: 3.4, carbs: 5,    fat: 1 } },
  'sour cream':              { density_g_per_ml: 1.00, per100g: { cal: 193, protein: 2,   carbs: 4.6,  fat: 19 } },

  /* ===== Meat & Seafood ===== */
  'ground beef (90% lean, cooked)': { per100g: { cal: 254, protein: 26, carbs: 0, fat: 17 } },
  'steak (sirloin, cooked)':        { per100g: { cal: 242, protein: 27, carbs: 0, fat: 15 } },
  'chicken breast (cooked)':        { per100g: { cal: 165, protein: 31, carbs: 0, fat: 3.6 } },
  'smoked salmon':                   { per100g: { cal: 117, protein: 18, carbs: 0, fat: 4 } },
  'falafel (ball)':                  { weight_g_per_pc: 17, per100g: { cal: 333, protein: 13, carbs: 31, fat: 20 } },
  'turkey breast (deli)':           { per100g: { cal: 104, protein: 17, carbs: 2,  fat: 2 } },

  /* ===== Grains & Bakery ===== */
  'rolled oats':             { density_g_per_ml: 0.38, per100g: { cal: 389, protein: 16.9, carbs: 66.3, fat: 6.9 } },
  'brown rice (cooked)':     { density_g_per_ml: 1.00, per100g: { cal: 123, protein: 2.7, carbs: 25.6, fat: 1 } },
  'sushi rice (cooked)':     { density_g_per_ml: 1.00, per100g: { cal: 130, protein: 2.4, carbs: 28.7, fat: 0.2 } },
  'pasta (cooked)':          { density_g_per_ml: 1.00, per100g: { cal: 158, protein: 5.8, carbs: 30,   fat: 0.9 } },
  'whole wheat pita':        { weight_g_per_pc: 60,    per100g: { cal: 275, protein: 9.8, carbs: 55,   fat: 1.2 } },
  'tortilla (whole wheat)':  { weight_g_per_pc: 50,    per100g: { cal: 300, protein: 8,   carbs: 49,   fat: 7 } },
  'ciabatta roll':           { weight_g_per_pc: 85,    per100g: { cal: 270, protein: 9,   carbs: 51,   fat: 3 } },
  'baguette':                { weight_g_per_pc: 300,   per100g: { cal: 270, protein: 9,   carbs: 55,   fat: 1.5 } },
  'lasagna noodles (dry)':   { per100g: { cal: 371, protein: 13, carbs: 74,  fat: 1.5 } },
  'egg noodles (dry)':       { per100g: { cal: 384, protein: 14, carbs: 72,  fat: 4 } },
  'macaroni (dry)':          { per100g: { cal: 371, protein: 13, carbs: 74,  fat: 1.5 } },

  /* ===== Pantry, Oils, Dips ===== */
  'olive oil':               { density_g_per_ml: 0.91, per100g: { cal: 884, protein: 0,   carbs: 0,    fat: 100 } },
  'butter':                  { density_g_per_ml: 0.91, per100g: { cal: 717, protein: 0.9, carbs: 0.1,  fat: 81 } },
  'hummus':                  { density_g_per_ml: 0.95, per100g: { cal: 267, protein: 8,   carbs: 14,   fat: 21 } },
  'tahini':                  { density_g_per_ml: 1.10, per100g: { cal: 595, protein: 17,  carbs: 21,   fat: 53 } },
  'salsa':                   { density_g_per_ml: 1.02, per100g: { cal: 29,  protein: 1.5, carbs: 7,    fat: 0.2 } },
  'marinara sauce':          { density_g_per_ml: 1.04, per100g: { cal: 74,  protein: 1.8, carbs: 12,   fat: 2.3 } },
  'tomato sauce':            { density_g_per_ml: 1.03, per100g: { cal: 29,  protein: 1.4, carbs: 7,    fat: 0.1 } },
  'caesar dressing':         { density_g_per_ml: 1.02, per100g: { cal: 320, protein: 2,   carbs: 4,    fat: 32 } },
  'balsamic glaze':          { density_g_per_ml: 1.20, per100g: { cal: 180, protein: 0.5, carbs: 40,   fat: 0 } },
  'soy sauce (low sodium)':  { density_g_per_ml: 1.20, per100g: { cal: 53,  protein: 8,   carbs: 5.6,  fat: 0.6 } },
  'vegetable broth':         { density_g_per_ml: 1.00, per100g: { cal: 5,   protein: 0.3, carbs: 0.5,  fat: 0.1 } },
  'beef broth':              { density_g_per_ml: 1.00, per100g: { cal: 7,   protein: 1,   carbs: 0,    fat: 0.3 } },
  'kidney beans (cooked)':   { density_g_per_ml: 0.70, per100g: { cal: 127, protein: 8.7, carbs: 22.8, fat: 0.5 } },
  'black beans (cooked)':    { density_g_per_ml: 0.70, per100g: { cal: 132, protein: 8.9, carbs: 23.7, fat: 0.5 } },
  'corn (cooked)':           { density_g_per_ml: 0.72, per100g: { cal: 86,  protein: 3.4, carbs: 19,   fat: 1.2 } },
  'kalamata olives':         { density_g_per_ml: 0.90, per100g: { cal: 115, protein: 0.8, carbs: 6.3,  fat: 10.7 } },
  'sunflower seeds':         { density_g_per_ml: 0.55, per100g: { cal: 584, protein: 20,  carbs: 20,   fat: 51 } },
  'sesame seeds':            { density_g_per_ml: 0.59, per100g: { cal: 573, protein: 17.7,carbs: 23.5, fat: 49.7 } },
  'peanut butter':           { density_g_per_ml: 1.05, per100g: { cal: 588, protein: 25,  carbs: 20,   fat: 50 } },
  'honey':                   { density_g_per_ml: 1.42, per100g: { cal: 304, protein: 0.3, carbs: 82.4, fat: 0 } },
  'olive oil & lemon dressing': { density_g_per_ml: 0.95, per100g: { cal: 500, protein: 0, carbs: 5, fat: 52 } },

  /* ===== Spices, Misc ===== */
  'paprika':                 { per100g: { cal: 282, protein: 14, carbs: 54, fat: 13 } },
  'chili powder':            { per100g: { cal: 282, protein: 13, carbs: 50, fat: 14 } },
  'taco seasoning':          { per100g: { cal: 289, protein: 8,  carbs: 53, fat: 7 } },
  'salt':                    { per100g: { cal: 0,   protein: 0,  carbs: 0,  fat: 0 } },
  'pepper':                  { per100g: { cal: 255, protein: 10, carbs: 64, fat: 3 } },

  /* ===== Dips & Spreads used as units ===== */
  'hummus (tbsp)':           { density_g_per_ml: 0.95, per100g: { cal: 267, protein: 8, carbs: 14, fat: 21 } },

  /* ===== “Prepared” items as piece weights ===== */
  'pita bread':              { weight_g_per_pc: 60,    per100g: { cal: 275, protein: 9.8, carbs: 55, fat: 1.2 } },
  'tortillas':               { weight_g_per_pc: 50,    per100g: { cal: 300, protein: 8,   carbs: 49, fat: 7 } },
  'falafel balls':           { weight_g_per_pc: 17,    per100g: { cal: 333, protein: 13,  carbs: 31, fat: 20 } }
};
