import { Component, inject } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-cuisine-recipes',
  imports: [Logo],
  templateUrl: './cuisine-recipes.html',
  styleUrl: './cuisine-recipes.scss',
})
export class CuisineRecipes {

    private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
