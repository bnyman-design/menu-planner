// recipes.js — data only (now with directions)
window.__RECIPES = [
  /* === High-Protein Breakfasts === */
  {
    id: 'greek-yogurt-parfait',
    title: 'Greek Yogurt Parfait with Berries & Nuts',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=greek-yogurt-parfait',
    nutrition: { protein: 25, carbs: 35, fat: 10, calories: 320 },
    baseServings: 1,
    ingredients: [
      { name: 'Greek yogurt (plain, nonfat)', qty: 1, unit: 'cup', category: 'Dairy' },
      { name: 'Mixed berries', qty: 0.5, unit: 'cup', category: 'Produce' },
      { name: 'Almonds or walnuts', qty: 2, unit: 'tbsp', category: 'Nuts' },
      { name: 'Honey', qty: 1, unit: 'tsp', category: 'Pantry' }
    ],
    directions: [
      'Spoon half of the yogurt into a bowl or glass.',
      'Add half the berries and nuts.',
      'Repeat the layers with remaining yogurt, berries, and nuts.',
      'Drizzle honey on top and serve.'
    ]
  },
  {
    id: 'cottage-cheese-scramble',
    title: 'Cottage Cheese & Veggie Scramble',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=cottage-cheese-scramble',
    nutrition: { protein: 30, carbs: 8, fat: 15, calories: 280 },
    baseServings: 1,
    ingredients: [
      { name: 'Eggs', qty: 2, unit: 'pc', category: 'Dairy' },
      { name: 'Cottage cheese', qty: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'Spinach', qty: 1, unit: 'cup', category: 'Produce' },
      { name: 'Bell pepper (diced)', qty: 0.5, unit: 'cup', category: 'Produce' }
    ],
    directions: [
      'Whisk eggs with a pinch of salt and pepper.',
      'Sauté bell pepper until slightly tender; add spinach to wilt.',
      'Add eggs and scramble gently until almost set.',
      'Fold in cottage cheese and cook 30–60 seconds until creamy.'
    ]
  },
  {
    id: 'protein-oatmeal',
    title: 'Protein Oatmeal ("Proats")',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=protein-oatmeal',
    nutrition: { protein: 28, carbs: 45, fat: 12, calories: 390 },
    baseServings: 1,
    ingredients: [
      { name: 'Rolled oats', qty: 0.5, unit: 'cup', category: 'Grains' },
      { name: 'Protein powder (whey or plant)', qty: 1, unit: 'scoop', category: 'Supplements' },
      { name: 'Peanut butter', qty: 1, unit: 'tbsp', category: 'Nuts' },
      { name: 'Banana (sliced)', qty: 0.5, unit: 'pc', category: 'Produce' }
    ],
    directions: [
      'Cook oats with water or milk per package directions.',
      'Let cool 1 minute, then stir in protein powder until smooth.',
      'Top with peanut butter and banana slices.',
      'Adjust thickness with a splash of milk if desired.'
    ]
  },
  {
    id: 'salmon-avocado-toast',
    title: 'Smoked Salmon & Avocado Toast',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=salmon-avocado-toast',
    nutrition: { protein: 26, carbs: 28, fat: 15, calories: 350 },
    baseServings: 1,
    ingredients: [
      { name: 'Whole grain bread', qty: 1, unit: 'slice', category: 'Bakery' },
      { name: 'Smoked salmon', qty: 2, unit: 'oz', category: 'Meat' },
      { name: 'Avocado', qty: 0.25, unit: 'pc', category: 'Produce' },
      { name: 'Greek yogurt', qty: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    directions: [
      'Toast the bread to your liking.',
      'Mash avocado with a pinch of salt and pepper.',
      'Spread Greek yogurt, then avocado on toast.',
      'Layer smoked salmon and serve with lemon if desired.'
    ]
  },
  {
    id: 'breakfast-burrito',
    title: 'Breakfast Burrito (Egg Whites & Turkey Sausage)',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=breakfast-burrito',
    nutrition: { protein: 35, carbs: 30, fat: 14, calories: 400 },
    baseServings: 1,
    ingredients: [
      { name: 'Egg whites', qty: 0.75, unit: 'cup', category: 'Dairy' },
      { name: 'Turkey sausage (crumbled)', qty: 2, unit: 'oz', category: 'Meat' },
      { name: 'Black beans (rinsed)', qty: 0.25, unit: 'cup', category: 'Legumes' },
      { name: 'Cheddar (shredded)', qty: 2, unit: 'tbsp', category: 'Dairy' },
      { name: 'Whole wheat tortilla', qty: 1, unit: 'pc', category: 'Bakery' }
    ],
    directions: [
      'Cook turkey sausage in a skillet until browned.',
      'Add egg whites; scramble until set.',
      'Warm tortilla; add eggs, sausage, beans, and cheese.',
      'Roll tightly and toast seam-side down 30–60 seconds.'
    ]
  },
  {
    id: 'quinoa-breakfast-bowl',
    title: 'Quinoa Breakfast Bowl',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=quinoa-breakfast-bowl',
    nutrition: { protein: 27, carbs: 40, fat: 11, calories: 370 },
    baseServings: 1,
    ingredients: [
      { name: 'Cooked quinoa (warm)', qty: 0.5, unit: 'cup', category: 'Grains' },
      { name: 'Greek yogurt', qty: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'Blueberries', qty: 0.25, unit: 'cup', category: 'Produce' },
      { name: 'Almonds (chopped)', qty: 2, unit: 'tbsp', category: 'Nuts' },
      { name: 'Almond butter', qty: 1, unit: 'tsp', category: 'Nuts' }
    ],
    directions: [
      'Spoon warm quinoa into a bowl.',
      'Top with Greek yogurt.',
      'Add blueberries and chopped almonds.',
      'Drizzle with almond butter and serve.'
    ]
  },
  {
    id: 'cottage-cheese-pancakes',
    title: 'Cottage Cheese Pancakes',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=cottage-cheese-pancakes',
    nutrition: { protein: 32, carbs: 28, fat: 9, calories: 330 },
    baseServings: 1,
    ingredients: [
      { name: 'Cottage cheese', qty: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'Eggs', qty: 2, unit: 'pc', category: 'Dairy' },
      { name: 'Rolled oats', qty: 0.5, unit: 'cup', category: 'Grains' },
      { name: 'Vanilla extract', qty: 0.5, unit: 'tsp', category: 'Pantry' },
      { name: 'Cinnamon', qty: 0.25, unit: 'tsp', category: 'Spices' }
    ],
    directions: [
      'Blend oats, cottage cheese, eggs, vanilla, and cinnamon until smooth.',
      'Heat a lightly oiled pan over medium heat.',
      'Pour batter into small pancakes and cook until bubbles form.',
      'Flip and cook 1–2 minutes more; serve with berries.'
    ]
  },
  {
    id: 'shakshuka-chickpeas',
    title: 'Shakshuka with Chickpeas & Feta',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=shakshuka-chickpeas',
    nutrition: { protein: 25, carbs: 20, fat: 14, calories: 310 },
    baseServings: 1,
    ingredients: [
      { name: 'Eggs', qty: 2, unit: 'pc', category: 'Dairy' },
      { name: 'Chickpeas (cooked)', qty: 0.5, unit: 'cup', category: 'Legumes' },
      { name: 'Tomato sauce', qty: 0.5, unit: 'cup', category: 'Pantry' },
      { name: 'Onion (diced)', qty: 0.25, unit: 'pc', category: 'Produce' },
      { name: 'Feta cheese (crumbled)', qty: 2, unit: 'tbsp', category: 'Dairy' }
    ],
    directions: [
      'Sauté onion in a skillet until translucent.',
      'Add tomato sauce and chickpeas; simmer 3–4 minutes.',
      'Make wells and crack in eggs; cover and cook to desired doneness.',
      'Top with feta and herbs; serve with crusty bread.'
    ]
  },
  {
    id: 'turkey-egg-bowl',
    title: 'Turkey & Egg Breakfast Bowl',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=turkey-egg-bowl',
    nutrition: { protein: 35, carbs: 15, fat: 18, calories: 390 },
    baseServings: 1,
    ingredients: [
      { name: 'Ground turkey', qty: 3, unit: 'oz', category: 'Meat' },
      { name: 'Eggs', qty: 2, unit: 'pc', category: 'Dairy' },
      { name: 'Spinach', qty: 1, unit: 'cup', category: 'Produce' },
      { name: 'Salsa', qty: 0.25, unit: 'cup', category: 'Pantry' },
      { name: 'Avocado (sliced)', qty: 0.25, unit: 'pc', category: 'Produce' }
    ],
    directions: [
      'Brown turkey with salt, pepper, and your favorite spices.',
      'Scramble eggs in a separate pan.',
      'Layer turkey, eggs, and spinach in a bowl.',
      'Top with salsa and avocado; serve.'
    ]
  },
  {
    id: 'pb-banana-smoothie',
    title: 'Protein Smoothie (Peanut Butter & Banana)',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=pb-banana-smoothie',
    nutrition: { protein: 30, carbs: 35, fat: 12, calories: 370 },
    baseServings: 1,
    ingredients: [
      { name: 'Protein powder', qty: 1, unit: 'scoop', category: 'Supplements' },
      { name: 'Banana', qty: 1, unit: 'pc', category: 'Produce' },
      { name: 'Peanut butter', qty: 1, unit: 'tbsp', category: 'Nuts' },
      { name: 'Almond milk (unsweetened)', qty: 1, unit: 'cup', category: 'Dairy' },
      { name: 'Rolled oats', qty: 0.25, unit: 'cup', category: 'Grains' }
    ],
    directions: [
      'Add all ingredients to a blender.',
      'Blend until completely smooth.',
      'Adjust thickness with more milk if needed.',
      'Serve immediately.'
    ]
  },

  /* === Your earlier example recipes (now with directions) === */
  {
    id: 'lemon-chicken',
    title: 'Lemon Garlic Chicken',
    type: 'dinner',
    url: 'recipes/recipe.html?id=lemon-chicken',
    nutrition: { protein: 35, carbs: 28, fat: 18, calories: 450 },
    baseServings: 4,
    ingredients: [
      { name: 'chicken thighs (bone-in, skin-on)', qty: 1.5, unit: 'lb', category: 'Meat' },
      { name: 'baby potatoes', qty: 1, unit: 'lb', category: 'Vegetables' },
      { name: 'garlic (minced)', qty: 3, unit: 'clove', category: 'Spices' },
      { name: 'olive oil', qty: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'lemon', qty: 1, unit: 'pc', category: 'Produce' },
      { name: 'kosher salt', qty: 1, unit: 'tsp', category: 'Spices' },
      { name: 'black pepper', qty: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'parsley (fresh, chopped)', qty: 1, unit: 'tbsp', category: 'Produce' }
    ],
    directions: [
      'Preheat oven to 425°F (220°C).',
      'Toss potatoes with half the oil, salt, and pepper; spread on a sheet pan.',
      'Season chicken with remaining oil, salt, pepper, minced garlic, and lemon zest.',
      'Nestle chicken among potatoes; roast 35–45 minutes until chicken is crisp and cooked through.',
      'Squeeze lemon juice over top, sprinkle parsley, and serve.'
    ]
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    type: 'breakfast',
    url: 'recipes/recipe.html?id=avocado-toast',
    nutrition: { protein: 7, carbs: 22, fat: 12, calories: 250 },
    baseServings: 2,
    ingredients: [
      { name: 'bread', qty: 2, unit: 'slice', category: 'Bakery' },
      { name: 'avocado', qty: 1, unit: 'pc', category: 'Produce' },
      { name: 'olive oil', qty: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'salt', qty: 0.25, unit: 'tsp', category: 'Spices' },
      { name: 'pepper', qty: 0.25, unit: 'tsp', category: 'Spices' }
    ],
    directions: [
      'Toast the bread.',
      'Mash avocado with olive oil, salt, and pepper.',
      'Spread the avocado mixture onto toast.',
      'Add optional toppings as desired (egg, chili flakes, etc.).'
    ]
  },
  {
    id: 'quinoa-bowl',
    title: 'Quinoa Veggie Bowl',
    type: 'lunch',
    url: 'recipes/recipe.html?id=quinoa-bowl',
    nutrition: { protein: 14, carbs: 45, fat: 10, calories: 360 },
    baseServings: 2,
    ingredients: [
      { name: 'quinoa (dry)', qty: 1, unit: 'cup', category: 'Grains' },
      { name: 'cherry tomatoes (halved)', qty: 1, unit: 'cup', category: 'Produce' },
      { name: 'spinach', qty: 2, unit: 'cup', category: 'Produce' },
      { name: 'feta (crumbled)', qty: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'salt', qty: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    directions: [
      'Cook quinoa according to package directions; fluff and cool slightly.',
      'Toss warm quinoa with spinach to wilt lightly.',
      'Add tomatoes, feta, olive oil, and salt; mix gently.',
      'Serve warm or chilled.'
    ]
  },
  {
    id: 'garlic-bread',
    title: 'Garlic Bread',
    type: 'side',
    url: 'recipes/recipe.html?id=garlic-bread',
    nutrition: { protein: 5, carbs: 30, fat: 8, calories: 220 },
    baseServings: 4,
    ingredients: [
      { name: 'baguette', qty: 1, unit: 'pc', category: 'Bakery' },
      { name: 'butter (softened)', qty: 4, unit: 'tbsp', category: 'Dairy' },
      { name: 'garlic (minced)', qty: 2, unit: 'clove', category: 'Spices' },
      { name: 'parsley (chopped)', qty: 1, unit: 'tbsp', category: 'Produce' },
      { name: 'salt', qty: 0.25, unit: 'tsp', category: 'Spices' }
    ],
    directions: [
      'Preheat oven to 400°F (205°C).',
      'Mix butter with garlic, parsley, and salt.',
      'Slice baguette lengthwise and spread butter mixture evenly.',
      'Bake 8–10 minutes until edges are crisp; slice and serve.'
    ]
  }
];
