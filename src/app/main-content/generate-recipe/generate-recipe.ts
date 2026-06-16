import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-generate-recipe',
  imports: [RouterModule, Logo],
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.scss',
})
export class GenerateRecipe {
  private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
