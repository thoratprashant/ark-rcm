import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  protected submitted = false;
  protected email = '';

  protected sendResetLink(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
  }

  protected showFieldError(form: NgForm, controlName: string): boolean {
    const control = form.controls[controlName];

    return Boolean(control?.invalid && (control.touched || this.submitted));
  }
}
