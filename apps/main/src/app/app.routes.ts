import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'signals-store',
        pathMatch: 'full'
      },
      {
        path: 'signals-store',
        loadComponent: () => import('./components/joke-signals.component')
      },
      {
        path: 'glitch-free',
        loadComponent: () => import('./components/glitch-free.component')
      },
      {
        path: 'basic',
        loadComponent: () => import('./components/basic.component')
      },
      {
        path: 'object-basic',
        loadComponent: () => import('./components/object-basic.component')
      },
];
