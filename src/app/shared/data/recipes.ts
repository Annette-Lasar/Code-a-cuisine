import { Recipe } from '../interfaces/recipe.interface';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Pasta with spinach and cherry tomatoes',
    cookingTime: 20,
    servings: 2,
    likes: 66,
    tags: ['Vegetarian', 'Quick'],
    nutrition: {
      calories: 630,
      protein: 18,
      fat: 24,
      carbs: 58,
    },
    ingredients: {
      userIngredients: [
        '80g Pasta noodles',
        '100g Baby spinach',
        '150g Cherry tomatoes',
        '1 Egg',
      ],
      extraIngredients: [
        '40g Parmesan cheese',
        '30ml Olive oil',
        'Herbs (dry basil, oregano, garlic)',
      ],
    },
    directions: [
      {
        step: 1,
        chef: 'Chef 1',
        title: 'Cook the pasta',
        description:
          'Cook your noodles in boiling, salted water until al dente. Drain and reserve some pasta water.',
      },
      {
        step: 2,
        chef: 'Chef 2',
        title: 'Make the sauce',
        description:
          'Heat olive oil in a pan, add garlic and tomatoes and cook for 3–4 minutes.',
      },
      {
        step: 3,
        chef: 'Chef 1',
        title: 'Finish the pasta',
        description:
          'Add noodles to the sauce, stir in spinach and parmesan and simmer briefly.',
      },
      {
        step: 4,
        chef: 'Chef 2',
        title: 'Season and serve',
        description:
          'Adjust seasoning and serve immediately.',
      },
    ],
  },

  {
    id: 2,
    title: 'Creamy mushroom risotto',
    cookingTime: 35,
    servings: 2,
    likes: 42,
    tags: ['Vegetarian', 'Italian'],
    nutrition: {
      calories: 710,
      protein: 19,
      fat: 22,
      carbs: 92,
    },
    ingredients: {
      userIngredients: [
        '200g Arborio rice',
        '150g Mushrooms',
        '1 Onion',
      ],
      extraIngredients: [
        '700ml Vegetable stock',
        '40g Parmesan cheese',
        '20g Butter',
      ],
    },
    directions: [
      {
        step: 1,
        chef: 'Chef 1',
        title: 'Prepare vegetables',
        description:
          'Dice onion and slice mushrooms.',
      },
      {
        step: 2,
        chef: 'Chef 2',
        title: 'Cook mushrooms',
        description:
          'Sauté mushrooms until golden.',
      },
      {
        step: 3,
        chef: 'Chef 1',
        title: 'Cook risotto',
        description:
          'Add stock gradually while stirring the rice.',
      },
      {
        step: 4,
        chef: 'Chef 2',
        title: 'Finish',
        description:
          'Stir in butter and parmesan before serving.',
      },
    ],
  },

  {
    id: 3,
    title: 'French vegetable stew',
    cookingTime: 45,
    servings: 4,
    likes: 31,
    tags: ['French', 'Healthy'],
    nutrition: {
      calories: 520,
      protein: 14,
      fat: 18,
      carbs: 68,
    },
    ingredients: {
      userIngredients: [
        '2 Zucchini',
        '1 Eggplant',
        '3 Tomatoes',
      ],
      extraIngredients: [
        '2 tbsp Olive oil',
        'Fresh thyme',
        'Garlic',
      ],
    },
    directions: [
      {
        step: 1,
        chef: 'Chef 1',
        title: 'Cut vegetables',
        description:
          'Dice all vegetables into bite-sized pieces.',
      },
      {
        step: 2,
        chef: 'Chef 2',
        title: 'Start cooking',
        description:
          'Cook garlic and vegetables in olive oil.',
      },
      {
        step: 3,
        chef: 'Chef 1',
        title: 'Simmer',
        description:
          'Add herbs and simmer for 30 minutes.',
      },
      {
        step: 4,
        chef: 'Chef 2',
        title: 'Serve',
        description:
          'Season to taste and serve warm.',
      },
    ],
  },
];