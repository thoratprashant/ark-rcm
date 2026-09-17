import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayout } from '../../layouts/auth-layout/auth-layout';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Login } from './login/login';

const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: Login,
        data: {
          title: 'Revenue Cycle Management|Simplified.',
          copy: 'Modern billing workflows, clear visibility, and confident cash flow - built for healthcare teams.',
        },
      },
      {
        path: 'forgot-password',
        component: ForgotPassword,
        data: {
          title: 'Forgot Your Password',
          copy: "Enter your email address and we'll send you a reset link.",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthLayout, Login, ForgotPassword],
})
export class AuthModule {}
