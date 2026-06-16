import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-recipe-view',
  imports: [RouterModule, Logo],
  templateUrl: './recipe-view.html',
  styleUrl: './recipe-view.scss',
})
export class RecipeView {
  private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
