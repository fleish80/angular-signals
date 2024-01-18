import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'signals-store',
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
  }

  // {
  //   path: 'signals-store',
  //   loadComponent: () => import('./components/joke-signals.component')
  // },
  // {
  //   path: 'glitch-free',
  //   loadComponent: () => import('./components/glitch-free.component')
  // },
  // {
  //   path: 'basic',
  //   loadComponent: () => import('./components/basic.component')
  // },
  // {
  //   path: 'object-basic',
  //   loadComponent: () => import('./components/object-basic.component')
  // },
  // {
  //   path: 'cleanup-effect',
  //   loadComponent: () => import('./components/cleanup-effect.component')
  // },
];
