import { Route } from '@angular/router';

export const examplesRoute: Route[] = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', loadComponent: () => import('./basic.component') },
  { path: 'cleanup-effect', loadComponent: () => import('./cleanup-effect.component') },
  { path: 'untracked', loadComponent: () => import('./untracked.component') },
  { path: 'untracked-scoped', loadComponent: () => import('./untracked-scope.component') },
  { path: 'equal', loadComponent: () => import('./equal.component') },
]
