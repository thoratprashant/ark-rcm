import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoaderService } from '../../../shared/loader/loader.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected readonly hasCredentialsError = signal(false);
  protected submitted = false;
  protected showPassword = false;
  protected email = '';
  protected password = '';

  constructor(private readonly loader: LoaderService) {}

  protected login(form: NgForm): void {
    this.submitted = true;
    this.hasCredentialsError.set(false);

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.loader.show();

    window.setTimeout(() => {
      this.loader.hide();
      this.hasCredentialsError.set(true);
    }, 500000);
  }

  protected togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  protected showFieldError(form: NgForm, controlName: string): boolean {
    const control = form.controls[controlName];

    return Boolean(control?.invalid && (control.touched || this.submitted));
  }
}
