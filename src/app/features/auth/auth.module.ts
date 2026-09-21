import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayout } from '../../layouts/auth-layout/auth-layout';
import { AccountLocked } from './account-locked/account-locked';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Login } from './login/login';
import { SessionExpired } from './session-expired/session-expired';
import { SetPassword } from './set-password/set-password';

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
          compactContent: true,
        },
      },
      {
        path: 'set-password',
        component: SetPassword,
        data: {
          title: 'Secure Your|Account.',
          copy: 'Set up your credentials to protect your billing data and access CareMatrix securely.',
        },
      },
      {
        path: 'session-expired',
        component: SessionExpired,
        data: {
          title: 'Session Expired',
          copy: 'You were logged out due to 30 minutes of inactivity. Any unsaved billing changes may have been discarded to protect patient records.',
          compactContent: true,
        },
      },
      {
        path: 'account-locked',
        component: AccountLocked,
        data: {
          title: 'Revenue Cycle Management|Simplified.',
          copy: 'Modern billing workflows, clear visibility, and confident cash flow - built for healthcare teams.',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthLayout, Login, ForgotPassword, SetPassword, SessionExpired, AccountLocked],
})
export class AuthModule {}
