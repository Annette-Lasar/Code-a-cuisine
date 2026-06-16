import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-cookbook',
  imports: [RouterModule, Logo],
  templateUrl: './cookbook.html',
  styleUrl: './cookbook.scss',
})
export class Cookbook {
  private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
