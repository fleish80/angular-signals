import { Route } from '@angular/router';

export const stateManagementRoute: Route[] = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', loadComponent: () => import('./joke-basic/joke-basic.component') },
  { path: 'custom', loadComponent: () => import('./joke-custom/joke-custom.component') },
]
