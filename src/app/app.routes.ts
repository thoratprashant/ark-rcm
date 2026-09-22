import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'billing-coordinator',
    loadChildren: () =>
      import('./features/billing-coordinator/billing-coordinator.routes').then((module) => module.BILLING_COORDINATOR_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
