import { inject, Injectable, signal } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal<'light' | 'dark'>('light');
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  initializeThemeListener() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.currentTheme.set(route.snapshot.data['theme']);
        console.log(this.currentTheme());
      }
    });
  }
}
