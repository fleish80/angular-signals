import { Route } from '@angular/router';

export const glitchFreeAdvancedRoute: Route[] = [
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
  { path: 'rxjs', loadComponent: () => import('./rxjs/glitch-free-advanced-rxjs-main.component') },
  { path: 'signals', loadComponent: () => import('./signals/glitch-free-advanced-signals-main.component') },
]
