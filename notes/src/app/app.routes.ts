import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
];
