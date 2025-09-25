// recipes.js — data only (with directions, and URLs pointing to the dynamic card)
window.__RECIPES = [
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

  /* === Other meals (unchanged nutrition/ingredients, now with directions) === */
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
  }, 
{
  id: 'mediterranean-pita',
  title: 'Mediterranean Veggie Pita with Hummus',
  type: 'lunch',
  url: 'recipes/recipe.html?id=mediterranean-pita',
  nutrition: { protein: 14, carbs: 42, fat: 12, calories: 340 },
  baseServings: 1,
  ingredients: [
    { name: 'Whole wheat pita', qty: 1, unit: 'pc', category: 'Bakery' },
    { name: 'Hummus', qty: 3, unit: 'tbsp', category: 'Dips' },
    { name: 'Cucumber (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Tomato (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Feta cheese (crumbled)', qty: 2, unit: 'tbsp', category: 'Dairy' },
    { name: 'Spinach leaves', qty: 0.5, unit: 'cup', category: 'Produce' }
  ],
  directions: [
    'Warm pita lightly and slice in half.',
    'Spread hummus inside each half.',
    'Stuff with cucumber, tomato, spinach, and feta.',
    'Serve immediately.'
  ]
},
{
  id: 'turkey-avocado-wrap',
  title: 'Turkey & Avocado Wrap',
  type: 'lunch',
  url: 'recipes/recipe.html?id=turkey-avocado-wrap',
  nutrition: { protein: 28, carbs: 35, fat: 16, calories: 430 },
  baseServings: 1,
  ingredients: [
    { name: 'Whole wheat tortilla', qty: 1, unit: 'pc', category: 'Bakery' },
    { name: 'Turkey breast slices', qty: 3, unit: 'oz', category: 'Meat' },
    { name: 'Avocado (sliced)', qty: 0.25, unit: 'pc', category: 'Produce' },
    { name: 'Lettuce', qty: 0.5, unit: 'cup', category: 'Produce' },
    { name: 'Tomato (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Greek yogurt (as spread)', qty: 2, unit: 'tbsp', category: 'Dairy' }
  ],
  directions: [
    'Lay tortilla flat and spread with Greek yogurt.',
    'Layer turkey, avocado, lettuce, and tomato.',
    'Roll tightly, slice in half, and serve.'
  ]
},
{
  id: 'greek-salad-bowl',
  title: 'Greek Salad Bowl',
  type: 'lunch',
  url: 'recipes/recipe.html?id=greek-salad-bowl',
  nutrition: { protein: 12, carbs: 22, fat: 15, calories: 290 },
  baseServings: 1,
  ingredients: [
    { name: 'Romaine lettuce (chopped)', qty: 2, unit: 'cup', category: 'Produce' },
    { name: 'Cucumber (diced)', qty: 0.5, unit: 'cup', category: 'Produce' },
    { name: 'Cherry tomatoes (halved)', qty: 0.5, unit: 'cup', category: 'Produce' },
    { name: 'Kalamata olives (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Feta cheese', qty: 2, unit: 'tbsp', category: 'Dairy' },
    { name: 'Olive oil & lemon juice dressing', qty: 2, unit: 'tbsp', category: 'Pantry' }
  ],
  directions: [
    'Combine lettuce, cucumber, tomatoes, and olives in a bowl.',
    'Top with feta cheese.',
    'Drizzle with olive oil and lemon juice before serving.'
  ]
},
{
  id: 'lentil-soup',
  title: 'Hearty Lentil Soup',
  type: 'lunch',
  url: 'recipes/recipe.html?id=lentil-soup',
  nutrition: { protein: 18, carbs: 40, fat: 8, calories: 320 },
  baseServings: 2,
  ingredients: [
    { name: 'Green lentils (dry)', qty: 0.5, unit: 'cup', category: 'Legumes' },
    { name: 'Carrot (diced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Celery (diced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Onion (chopped)', qty: 0.5, unit: 'pc', category: 'Produce' },
    { name: 'Vegetable broth', qty: 3, unit: 'cup', category: 'Pantry' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' }
  ],
  directions: [
    'Heat olive oil in a pot and sauté onion, carrot, and celery until softened.',
    'Add lentils and broth.',
    'Simmer 25–30 minutes until lentils are tender.',
    'Season with salt and pepper before serving.'
  ]
},
{
  id: 'falafel-hummus-plate',
  title: 'Falafel & Hummus Plate',
  type: 'lunch',
  url: 'recipes/recipe.html?id=falafel-hummus-plate',
  nutrition: { protein: 16, carbs: 38, fat: 14, calories: 370 },
  baseServings: 1,
  ingredients: [
    { name: 'Falafel balls', qty: 4, unit: 'pc', category: 'Legumes' },
    { name: 'Hummus', qty: 0.25, unit: 'cup', category: 'Dips' },
    { name: 'Pita bread', qty: 1, unit: 'pc', category: 'Bakery' },
    { name: 'Mixed greens', qty: 1, unit: 'cup', category: 'Produce' },
    { name: 'Cucumber (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' }
  ],
  directions: [
    'Arrange falafel, hummus, pita, and vegetables on a plate.',
    'Use pita to scoop hummus and falafel.',
    'Serve with a drizzle of tahini if desired.'
  ]
},
{
  id: 'chicken-caesar-wrap',
  title: 'Chicken Caesar Wrap',
  type: 'lunch',
  url: 'recipes/recipe.html?id=chicken-caesar-wrap',
  nutrition: { protein: 30, carbs: 28, fat: 14, calories: 380 },
  baseServings: 1,
  ingredients: [
    { name: 'Whole wheat tortilla', qty: 1, unit: 'pc', category: 'Bakery' },
    { name: 'Cooked chicken breast (sliced)', qty: 3, unit: 'oz', category: 'Meat' },
    { name: 'Romaine lettuce', qty: 1, unit: 'cup', category: 'Produce' },
    { name: 'Parmesan cheese (grated)', qty: 1, unit: 'tbsp', category: 'Dairy' },
    { name: 'Caesar dressing', qty: 2, unit: 'tbsp', category: 'Dips' }
  ],
  directions: [
    'Lay tortilla flat and spread Caesar dressing.',
    'Layer chicken, lettuce, and Parmesan.',
    'Roll tightly and slice in half.'
  ]
},
{
  id: 'veggie-sushi-roll',
  title: 'Veggie Sushi Rolls',
  type: 'lunch',
  url: 'recipes/recipe.html?id=veggie-sushi-roll',
  nutrition: { protein: 8, carbs: 50, fat: 5, calories: 280 },
  baseServings: 2,
  ingredients: [
    { name: 'Sushi rice (cooked)', qty: 1, unit: 'cup', category: 'Grains' },
    { name: 'Nori sheets', qty: 2, unit: 'pc', category: 'Pantry' },
    { name: 'Cucumber (julienned)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Carrot (julienned)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Avocado (sliced)', qty: 0.25, unit: 'pc', category: 'Produce' }
  ],
  directions: [
    'Place nori sheet shiny side down on bamboo mat.',
    'Spread a thin layer of sushi rice, leaving 1 inch border.',
    'Arrange cucumber, carrot, and avocado in a line.',
    'Roll tightly, slice into 6–8 pieces, and serve with soy sauce.'
  ]
},
{
  id: 'caprese-sandwich',
  title: 'Caprese Sandwich',
  type: 'lunch',
  url: 'recipes/recipe.html?id=caprese-sandwich',
  nutrition: { protein: 15, carbs: 40, fat: 12, calories: 360 },
  baseServings: 1,
  ingredients: [
    { name: 'Ciabatta roll', qty: 1, unit: 'pc', category: 'Bakery' },
    { name: 'Fresh mozzarella (sliced)', qty: 2, unit: 'oz', category: 'Dairy' },
    { name: 'Tomato (sliced)', qty: 0.25, unit: 'cup', category: 'Produce' },
    { name: 'Fresh basil leaves', qty: 4, unit: 'pc', category: 'Produce' },
    { name: 'Balsamic glaze', qty: 1, unit: 'tbsp', category: 'Pantry' }
  ],
  directions: [
    'Slice ciabatta and layer mozzarella, tomato, and basil.',
    'Drizzle with balsamic glaze.',
    'Close sandwich and serve.'
  ]
},
{
  id: 'black-bean-bowl',
  title: 'Black Bean Bowl with Salsa & Rice',
  type: 'lunch',
  url: 'recipes/recipe.html?id=black-bean-bowl',
  nutrition: { protein: 20, carbs: 55, fat: 10, calories: 420 },
  baseServings: 1,
  ingredients: [
    { name: 'Brown rice (cooked)', qty: 1, unit: 'cup', category: 'Grains' },
    { name: 'Black beans (cooked)', qty: 0.5, unit: 'cup', category: 'Legumes' },
    { name: 'Salsa', qty: 0.25, unit: 'cup', category: 'Pantry' },
    { name: 'Corn (cooked)', qty: 0.25, unit: 'cup', category: 'Vegetables' },
    { name: 'Avocado (sliced)', qty: 0.25, unit: 'pc', category: 'Produce' }
  ],
  directions: [
    'Layer rice in a bowl, then top with beans, corn, salsa, and avocado.',
    'Serve warm or at room temperature.'
  ]
},
// ==== Dinner recipes to add to recipes.js ====
{
  id: 'classic-beef-spaghetti',
  title: 'Classic Spaghetti with Beef Marinara',
  type: 'dinner',
  url: 'recipes/recipe.html?id=classic-beef-spaghetti',
  nutrition: { protein: 32, carbs: 60, fat: 18, calories: 590 },
  baseServings: 2,
  ingredients: [
    { name: 'Ground beef (lean)', qty: 0.5, unit: 'lb', category: 'Meat' },
    { name: 'Spaghetti', qty: 6, unit: 'oz', category: 'Grains' },
    { name: 'Marinara sauce', qty: 2, unit: 'cup', category: 'Pantry' },
    { name: 'Parmesan cheese (grated)', qty: 2, unit: 'tbsp', category: 'Dairy' }
  ],
  directions: [
    'Cook spaghetti per package instructions.',
    'Brown beef in a skillet, drain excess fat.',
    'Add marinara sauce and simmer 10 minutes.',
    'Serve beef sauce over spaghetti, top with Parmesan.'
  ]
},
{
  id: 'beef-stroganoff',
  title: 'Beef Stroganoff with Egg Noodles',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-stroganoff',
  nutrition: { protein: 34, carbs: 55, fat: 20, calories: 610 },
  baseServings: 2,
  ingredients: [
    { name: 'Ground beef', qty: 0.5, unit: 'lb', category: 'Meat' },
    { name: 'Egg noodles', qty: 6, unit: 'oz', category: 'Grains' },
    { name: 'Mushrooms (sliced)', qty: 1, unit: 'cup', category: 'Produce' },
    { name: 'Sour cream', qty: 0.5, unit: 'cup', category: 'Dairy' },
    { name: 'Onion (diced)', qty: 0.5, unit: 'pc', category: 'Produce' }
  ],
  directions: [
    'Cook noodles per package instructions.',
    'Sauté onion and mushrooms, then brown beef.',
    'Stir in sour cream and seasonings.',
    'Serve over noodles.'
  ]
},
{
  id: 'beef-chili',
  title: 'Hearty Beef Chili',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-chili',
  nutrition: { protein: 38, carbs: 45, fat: 16, calories: 540 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Kidney beans (cooked)', qty: 2, unit: 'cup', category: 'Legumes' },
    { name: 'Tomato sauce', qty: 2, unit: 'cup', category: 'Pantry' },
    { name: 'Chili powder', qty: 2, unit: 'tbsp', category: 'Spices' },
    { name: 'Onion (chopped)', qty: 1, unit: 'pc', category: 'Produce' }
  ],
  directions: [
    'Brown beef and onion in a large pot.',
    'Add tomato sauce, beans, and chili powder.',
    'Simmer for 30 minutes.',
    'Serve hot with toppings if desired.'
  ]
},
{
  id: 'beef-lasagna',
  title: 'Beef Lasagna',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-lasagna',
  nutrition: { protein: 40, carbs: 55, fat: 22, calories: 670 },
  baseServings: 6,
  ingredients: [
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Lasagna noodles', qty: 12, unit: 'pc', category: 'Grains' },
    { name: 'Ricotta cheese', qty: 1, unit: 'cup', category: 'Dairy' },
    { name: 'Mozzarella (shredded)', qty: 2, unit: 'cup', category: 'Dairy' },
    { name: 'Marinara sauce', qty: 3, unit: 'cup', category: 'Pantry' }
  ],
  directions: [
    'Cook noodles and brown beef.',
    'Layer noodles, beef sauce, ricotta, and mozzarella in a baking dish.',
    'Repeat layers and finish with cheese.',
    'Bake at 375°F for 35 minutes.'
  ]
},
{
  id: 'beef-stuffed-peppers',
  title: 'Beef Stuffed Peppers',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-stuffed-peppers',
  nutrition: { protein: 30, carbs: 35, fat: 12, calories: 440 },
  baseServings: 4,
  ingredients: [
    { name: 'Bell peppers', qty: 4, unit: 'pc', category: 'Produce' },
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Rice (cooked)', qty: 2, unit: 'cup', category: 'Grains' },
    { name: 'Tomato sauce', qty: 1, unit: 'cup', category: 'Pantry' },
    { name: 'Cheddar cheese (shredded)', qty: 0.5, unit: 'cup', category: 'Dairy' }
  ],
  directions: [
    'Cut tops off peppers and remove seeds.',
    'Mix cooked rice, browned beef, and tomato sauce.',
    'Stuff mixture into peppers and top with cheese.',
    'Bake at 375°F for 25–30 minutes.'
  ]
},
{
  id: 'beef-minestrone-soup',
  title: 'Beef Minestrone Soup',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-minestrone-soup',
  nutrition: { protein: 26, carbs: 48, fat: 14, calories: 460 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Diced tomatoes', qty: 2, unit: 'cup', category: 'Pantry' },
    { name: 'Carrot (chopped)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Zucchini (diced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Small pasta', qty: 1, unit: 'cup', category: 'Grains' }
  ],
  directions: [
    'Brown beef, then add vegetables and tomatoes.',
    'Pour in broth and bring to boil.',
    'Add pasta and cook until tender.',
    'Season and serve hot.'
  ]
},
{
  id: 'beef-taco-skillet',
  title: 'Beef Taco Skillet',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-taco-skillet',
  nutrition: { protein: 28, carbs: 32, fat: 16, calories: 430 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Taco seasoning', qty: 2, unit: 'tbsp', category: 'Spices' },
    { name: 'Black beans (cooked)', qty: 1, unit: 'cup', category: 'Legumes' },
    { name: 'Corn (cooked)', qty: 1, unit: 'cup', category: 'Vegetables' },
    { name: 'Cheddar cheese (shredded)', qty: 1, unit: 'cup', category: 'Dairy' }
  ],
  directions: [
    'Brown beef and drain fat.',
    'Stir in taco seasoning, beans, and corn.',
    'Top with cheese and let melt.',
    'Serve in tortillas or over rice.'
  ]
},
{
  id: 'beef-potato-soup',
  title: 'Beef & Potato Soup',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-potato-soup',
  nutrition: { protein: 24, carbs: 40, fat: 14, calories: 420 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Potatoes (diced)', qty: 3, unit: 'pc', category: 'Produce' },
    { name: 'Carrots (sliced)', qty: 2, unit: 'pc', category: 'Produce' },
    { name: 'Onion (chopped)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Beef broth', qty: 4, unit: 'cup', category: 'Pantry' }
  ],
  directions: [
    'Brown beef and onion in a pot.',
    'Add broth, potatoes, and carrots.',
    'Simmer until vegetables are tender.',
    'Season to taste.'
  ]
},
{
  id: 'beef-macaroni-bake',
  title: 'Cheesy Beef Macaroni Bake',
  type: 'dinner',
  url: 'recipes/recipe.html?id=beef-macaroni-bake',
  nutrition: { protein: 35, carbs: 52, fat: 20, calories: 610 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Elbow macaroni', qty: 3, unit: 'cup', category: 'Grains' },
    { name: 'Tomato sauce', qty: 2, unit: 'cup', category: 'Pantry' },
    { name: 'Cheddar cheese (shredded)', qty: 1.5, unit: 'cup', category: 'Dairy' }
  ],
  directions: [
    'Cook macaroni, drain.',
    'Brown beef and mix with tomato sauce.',
    'Combine with macaroni and half the cheese.',
    'Bake at 375°F with remaining cheese until bubbly.'
  ]
},
{
  id: 'steak-fajitas',
  title: 'Steak Fajitas',
  type: 'dinner',
  url: 'recipes/recipe.html?id=steak-fajitas',
  nutrition: { protein: 36, carbs: 28, fat: 18, calories: 490 },
  baseServings: 2,
  ingredients: [
    { name: 'Flank steak (sliced)', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Bell peppers (sliced)', qty: 2, unit: 'pc', category: 'Produce' },
    { name: 'Onion (sliced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Tortillas', qty: 4, unit: 'pc', category: 'Bakery' },
    { name: 'Fajita seasoning', qty: 2, unit: 'tbsp', category: 'Spices' }
  ],
  directions: [
    'Sear steak strips, then remove.',
    'Cook peppers and onions with seasoning.',
    'Return steak to pan and heat through.',
    'Serve with tortillas.'
  ]
},
{
  id: 'steak-pasta-alfredo',
  title: 'Steak Pasta Alfredo',
  type: 'dinner',
  url: 'recipes/recipe.html?id=steak-pasta-alfredo',
  nutrition: { protein: 40, carbs: 58, fat: 22, calories: 690 },
  baseServings: 2,
  ingredients: [
    { name: 'Steak (sirloin, sliced)', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Fettuccine pasta', qty: 8, unit: 'oz', category: 'Grains' },
    { name: 'Alfredo sauce', qty: 1.5, unit: 'cup', category: 'Pantry' },
    { name: 'Parmesan cheese', qty: 2, unit: 'tbsp', category: 'Dairy' }
  ],
  directions: [
    'Cook pasta per package instructions.',
    'Sear steak strips until medium-rare.',
    'Toss pasta with Alfredo sauce and top with steak.',
    'Sprinkle Parmesan before serving.'
  ]
},
{
  id: 'steak-stir-fry',
  title: 'Steak & Veggie Stir Fry',
  type: 'dinner',
  url: 'recipes/recipe.html?id=steak-stir-fry',
  nutrition: { protein: 38, carbs: 34, fat: 16, calories: 530 },
  baseServings: 2,
  ingredients: [
    { name: 'Steak (flank, sliced)', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Broccoli florets', qty: 2, unit: 'cup', category: 'Produce' },
    { name: 'Carrots (julienned)', qty: 1, unit: 'cup', category: 'Produce' },
    { name: 'Soy sauce', qty: 3, unit: 'tbsp', category: 'Pantry' },
    { name: 'Rice (cooked)', qty: 2, unit: 'cup', category: 'Grains' }
  ],
  directions: [
    'Stir-fry steak strips and set aside.',
    'Cook vegetables until crisp-tender.',
    'Add steak back with soy sauce.',
    'Serve over rice.'
  ]
},
{
  id: 'steak-and-potatoes',
  title: 'Steak & Garlic Mashed Potatoes',
  type: 'dinner',
  url: 'recipes/recipe.html?id=steak-and-potatoes',
  nutrition: { protein: 42, carbs: 50, fat: 24, calories: 720 },
  baseServings: 2,
  ingredients: [
    { name: 'Ribeye steak', qty: 0.75, unit: 'lb', category: 'Meat' },
    { name: 'Potatoes (peeled)', qty: 4, unit: 'pc', category: 'Produce' },
    { name: 'Butter', qty: 2, unit: 'tbsp', category: 'Dairy' },
    { name: 'Milk', qty: 0.25, unit: 'cup', category: 'Dairy' },
    { name: 'Garlic (minced)', qty: 2, unit: 'clove', category: 'Spices' }
  ],
  directions: [
    'Boil potatoes until soft; mash with butter, milk, and garlic.',
    'Season and sear steak to desired doneness.',
    'Serve steak with mashed potatoes.'
  ]
},
{
  id: 'philly-cheesesteak-pasta',
  title: 'Philly Cheesesteak Pasta',
  type: 'dinner',
  url: 'recipes/recipe.html?id=philly-cheesesteak-pasta',
  nutrition: { protein: 36, carbs: 60, fat: 20, calories: 640 },
  baseServings: 4,
  ingredients: [
    { name: 'Ground beef', qty: 1, unit: 'lb', category: 'Meat' },
    { name: 'Pasta (penne)', qty: 12, unit: 'oz', category: 'Grains' },
    { name: 'Bell peppers (sliced)', qty: 2, unit: 'pc', category: 'Produce' },
    { name: 'Onion (sliced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Provolone cheese (shredded)', qty: 1, unit: 'cup', category: 'Dairy' }
  ],
  directions: [
    'Cook pasta, drain.',
    'Brown beef with peppers and onion.',
    'Stir pasta with beef mixture and cheese.',
    'Bake briefly until cheese melts.'
  ]
},
// ==== Side recipes to add to recipes.js ====
{
  id: 'roasted-broccoli-garlic',
  title: 'Roasted Broccoli with Garlic',
  type: 'side',
  url: 'recipes/recipe.html?id=roasted-broccoli-garlic',
  nutrition: { protein: 6, carbs: 14, fat: 9, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Broccoli florets', qty: 3, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Garlic (minced)', qty: 2, unit: 'clove', category: 'Spices' },
    { name: 'Salt & pepper', qty: 1, unit: 'tsp', category: 'Spices' }
  ],
  directions: [
    'Preheat oven to 425°F.',
    'Toss broccoli with oil, garlic, salt, and pepper.',
    'Spread on a sheet pan and roast 15 minutes until crispy edges appear.'
  ]
},
{
  id: 'broccoli-salad',
  title: 'Cold Broccoli Salad with Yogurt Dressing',
  type: 'side',
  url: 'recipes/recipe.html?id=broccoli-salad',
  nutrition: { protein: 7, carbs: 20, fat: 7, calories: 200 },
  baseServings: 2,
  ingredients: [
    { name: 'Broccoli florets (blanched)', qty: 2, unit: 'cup', category: 'Produce' },
    { name: 'Greek yogurt (plain)', qty: 0.25, unit: 'cup', category: 'Dairy' },
    { name: 'Dried cranberries', qty: 2, unit: 'tbsp', category: 'Fruit' },
    { name: 'Sunflower seeds', qty: 1, unit: 'tbsp', category: 'Nuts' },
    { name: 'Apple cider vinegar', qty: 1, unit: 'tsp', category: 'Pantry' }
  ],
  directions: [
    'Whisk yogurt with vinegar and season lightly.',
    'Toss broccoli with cranberries and sunflower seeds.',
    'Fold in dressing and chill before serving.'
  ]
},
{
  id: 'broccoli-stirfry',
  title: 'Sesame Broccoli Stir Fry',
  type: 'side',
  url: 'recipes/recipe.html?id=broccoli-stirfry',
  nutrition: { protein: 8, carbs: 16, fat: 8, calories: 200 },
  baseServings: 2,
  ingredients: [
    { name: 'Broccoli florets', qty: 3, unit: 'cup', category: 'Produce' },
    { name: 'Soy sauce (low sodium)', qty: 2, unit: 'tbsp', category: 'Pantry' },
    { name: 'Sesame oil', qty: 1, unit: 'tsp', category: 'Pantry' },
    { name: 'Sesame seeds', qty: 1, unit: 'tsp', category: 'Spices' },
    { name: 'Garlic (minced)', qty: 1, unit: 'clove', category: 'Spices' }
  ],
  directions: [
    'Heat sesame oil in a skillet.',
    'Add broccoli and garlic; stir fry until bright green.',
    'Stir in soy sauce and sesame seeds.',
    'Cook 1–2 minutes more and serve.'
  ]
},
{
  id: 'cucumber-tomato-salad',
  title: 'Cucumber Tomato Salad',
  type: 'side',
  url: 'recipes/recipe.html?id=cucumber-tomato-salad',
  nutrition: { protein: 3, carbs: 15, fat: 10, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Cucumber (sliced)', qty: 1, unit: 'pc', category: 'Produce' },
    { name: 'Tomatoes (cherry, halved)', qty: 1, unit: 'cup', category: 'Produce' },
    { name: 'Red onion (thinly sliced)', qty: 0.25, unit: 'pc', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Red wine vinegar', qty: 1, unit: 'tbsp', category: 'Pantry' }
  ],
  directions: [
    'Combine cucumber, tomato, and onion in a bowl.',
    'Whisk olive oil and vinegar, toss with vegetables.',
    'Season with salt and pepper, chill before serving.'
  ]
},
{
  id: 'roasted-cauliflower',
  title: 'Roasted Cauliflower with Paprika',
  type: 'side',
  url: 'recipes/recipe.html?id=roasted-cauliflower',
  nutrition: { protein: 6, carbs: 16, fat: 9, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Cauliflower florets', qty: 3, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Paprika', qty: 1, unit: 'tsp', category: 'Spices' },
    { name: 'Salt', qty: 0.25, unit: 'tsp', category: 'Spices' }
  ],
  directions: [
    'Preheat oven to 425°F.',
    'Toss cauliflower with oil, paprika, and salt.',
    'Spread on sheet pan and roast 20 minutes until golden.'
  ]
},
{
  id: 'green-bean-almondine',
  title: 'Green Bean Almondine',
  type: 'side',
  url: 'recipes/recipe.html?id=green-bean-almondine',
  nutrition: { protein: 5, carbs: 14, fat: 11, calories: 200 },
  baseServings: 2,
  ingredients: [
    { name: 'Green beans (trimmed)', qty: 2, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Almonds (sliced)', qty: 2, unit: 'tbsp', category: 'Nuts' },
    { name: 'Garlic (minced)', qty: 1, unit: 'clove', category: 'Spices' }
  ],
  directions: [
    'Blanch green beans 2 minutes, then drain.',
    'Sauté garlic in oil, add beans.',
    'Toss with almonds, cook 1–2 minutes more.'
  ]
},
{
  id: 'grilled-zucchini',
  title: 'Grilled Zucchini Ribbons',
  type: 'side',
  url: 'recipes/recipe.html?id=grilled-zucchini',
  nutrition: { protein: 4, carbs: 10, fat: 11, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Zucchini (sliced lengthwise)', qty: 2, unit: 'pc', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Lemon juice', qty: 1, unit: 'tsp', category: 'Produce' },
    { name: 'Salt & pepper', qty: 0.5, unit: 'tsp', category: 'Spices' }
  ],
  directions: [
    'Brush zucchini with oil and season.',
    'Grill 2–3 minutes per side until tender.',
    'Drizzle lemon juice before serving.'
  ]
},
{
  id: 'carrot-ginger-salad',
  title: 'Carrot Ginger Slaw',
  type: 'side',
  url: 'recipes/recipe.html?id=carrot-ginger-salad',
  nutrition: { protein: 3, carbs: 18, fat: 9, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Carrots (shredded)', qty: 2, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Rice vinegar', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Ginger (grated)', qty: 1, unit: 'tsp', category: 'Spices' }
  ],
  directions: [
    'Combine oil, vinegar, and ginger.',
    'Toss with shredded carrots.',
    'Chill before serving.'
  ]
},
{
  id: 'roasted-brussels',
  title: 'Roasted Brussels Sprouts with Balsamic',
  type: 'side',
  url: 'recipes/recipe.html?id=roasted-brussels',
  nutrition: { protein: 6, carbs: 18, fat: 9, calories: 200 },
  baseServings: 2,
  ingredients: [
    { name: 'Brussels sprouts (halved)', qty: 3, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Balsamic vinegar', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Salt & pepper', qty: 0.5, unit: 'tsp', category: 'Spices' }
  ],
  directions: [
    'Preheat oven to 400°F.',
    'Toss sprouts with oil, seasonings.',
    'Roast 20 minutes, drizzle balsamic before serving.'
  ]
},
{
  id: 'spinach-saute',
  title: 'Garlic Sautéed Spinach',
  type: 'side',
  url: 'recipes/recipe.html?id=spinach-saute',
  nutrition: { protein: 5, carbs: 7, fat: 11, calories: 190 },
  baseServings: 2,
  ingredients: [
    { name: 'Fresh spinach', qty: 4, unit: 'cup', category: 'Produce' },
    { name: 'Olive oil', qty: 1, unit: 'tbsp', category: 'Pantry' },
    { name: 'Garlic (sliced)', qty: 2, unit: 'clove', category: 'Spices' }
  ],
  directions: [
    'Heat olive oil in a skillet.',
    'Add garlic slices, then spinach.',
    'Sauté until just wilted, season lightly.'
  ]
}
];
