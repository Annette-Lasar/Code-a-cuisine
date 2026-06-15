export interface Recipe {
  id: number;
  title: string;
  cookingTime: number;
  servings: number;
  likes: number;
  tags: string[];

  nutrition: Nutrition;

  ingredients: {
    userIngredients: string[];
    extraIngredients: string[];
  };

  directions: Direction[];
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Direction {
  step: number;
  chef: string;
  title: string;
  description: string;
}
