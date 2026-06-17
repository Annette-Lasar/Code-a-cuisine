import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ThemeService } from '../../shared/services/theme.service';

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

  ingredientForm = this.fb.group({
    ingredient: [''],
    amount: [''],
    unit: ['gram'],
  });

  submitForm() {
    console.log(this.ingredientForm.value);
    
  }

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
