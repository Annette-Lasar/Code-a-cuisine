import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-results',
  imports: [RouterModule, Logo],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
