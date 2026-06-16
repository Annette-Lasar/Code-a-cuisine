import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cuis-logo',
  imports: [RouterModule],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  private themeService = inject(ThemeService);

  getLogo() {
    return this.themeService.currentTheme() === 'dark'
      ? '/img/ui/logo-beige.svg'
      : '/img/ui/logo-green.svg';
  }
}
