import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'examples',
    pathMatch: 'full'
  },
  {
    path: 'state-management',
    loadChildren: () => import('./state-management/state-management.route').then(r => r.stateManagementRoute),
    loadComponent: () => import('./state-management/state-management.component')
  },
  {
    path: 'examples',
    loadChildren: () => import('./examples/examples.route').then(r => r.examplesRoute),
    loadComponent: () => import('./examples/examples.component')
  },
  {
    path: 'glitch',
    loadChildren: () => import('./glitch-free/glitch.route').then(r => r.glitchRoute),
    loadComponent: () => import('./glitch-free/glitch.component')
  },
  {
    path: 'glitch-free-advanced',
    loadChildren: () => import('./glitch-free-advanced/glitch-free-advanced.route').then(r => r.glitchFreeAdvancedRoute),
    loadComponent: () => import('./glitch-free-advanced/glitch-free-advanced.component')
  }
];
