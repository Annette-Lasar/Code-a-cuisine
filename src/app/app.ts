import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'cuis-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('code-a-cuisine');
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.initializeThemeListener();
  }

  getThemeClass(): string {
    return this.themeService.currentTheme();
  }
}
