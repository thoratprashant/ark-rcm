import { Routes } from '@angular/router';
import { BillingCoordinatorLayout } from '../../layouts/billing-coordinator-layout/billing-coordinator-layout';

export const BILLING_COORDINATOR_ROUTES: Routes = [
  {
    path: '',
    component: BillingCoordinatorLayout,
    children: [
      {
        path: '',
        redirectTo: 'charges',
        pathMatch: 'full',
      },
      {
        path: 'charges',
        loadComponent: () => import('./charges/charges').then((component) => component.Charges),
        data: {
          title: 'Charges Listing',
        },
      },
      {
        path: 'claims',
        loadComponent: () => import('./claims/claims').then((component) => component.Claims),
        data: {
          title: 'Claims Listing',
        },
      },
    ],
  },
];
