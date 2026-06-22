import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ThemeService } from '../../shared/services/theme.service';

import { Ingredient } from '../../shared/interfaces/ingredient.interface';

import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-generate-recipe',
  imports: [RouterModule, ReactiveFormsModule, Logo],
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.scss',
})
export class GenerateRecipe {
  private themeService = inject(ThemeService);
  private fb = inject(FormBuilder);

  currentIngredients: Ingredient[] = [];
  private nextId = 1;

  ingredientForm = this.fb.group({
    name: ['', Validators.required],
    amount: [100, [Validators.required, Validators.min(1)]],
    unit: ['', Validators.required],
  });

  submitForm() {
    const ingredient = this.createIngredient();
    if (this.ingredientForm.invalid) return;
    this.addIngredient(ingredient);

    this.resetForm();
  }

  createIngredient(): Ingredient {
    const value = this.ingredientForm.value;

    return {
      id: this.nextId++,
      name: value.name ?? '',
      amount: value.amount ?? 0,
      unit: value.unit ?? '',
    };
  }

  addIngredient(ingredient: Ingredient): void {
    this.currentIngredients.push(ingredient);
  }

  resetForm(): void {
    this.ingredientForm.reset();
  }

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
