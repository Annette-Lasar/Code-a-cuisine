import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { GenerateRecipe } from './main-content/generate-recipe/generate-recipe';
import { Preferences } from './main-content/preferences/preferences';
import { Results } from './main-content/results/results';
import { RecipeView } from './main-content/recipe-view/recipe-view';
import { Cookbook } from './main-content/cookbook/cookbook';
import { CuisineRecipes } from './main-content/cuisine-recipes/cuisine-recipes';

export const routes: Routes = [
  {
    path: '',
    component: MainContent,
  },
  {
    path: 'generate-recipe',
    component: GenerateRecipe,
  },
  {
    path: 'preferences',
    component: Preferences,
  },
  {
    path: 'results',
    component: Results,
  },

  { path: 'recipe/:id', component: RecipeView },
  {
    path: 'cookbook',
    component: Cookbook,
  },
  {
    path: 'cuisine/:cuisine',
    component: CuisineRecipes,
  },
];
