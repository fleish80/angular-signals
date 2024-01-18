import { Route } from '@angular/router';

export const glitchRoute: Route[] = [
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
  { path: 'rxjs', loadComponent: () => import('./glitch-rxjs.component') },
  { path: 'signals', loadComponent: () => import('./glitch-signals.component') },
]
