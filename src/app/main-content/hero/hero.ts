import { Component, inject } from '@angular/core';
import { Logo } from '../../shared/components/logo/logo';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'cuis-hero',
  imports: [Logo, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private themeService = inject(ThemeService);

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
