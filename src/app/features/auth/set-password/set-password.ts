import { Component, computed, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type PasswordRule = {
  label: string;
  valid: boolean;
};

@Component({
  selector: 'app-set-password',
  imports: [FormsModule],
  templateUrl: './set-password.html',
  styleUrl: './set-password.scss',
})
export class SetPassword {
  protected submitted = false;
  protected showPassword = false;
  protected showConfirmPassword = false;
  protected password = '';
  protected confirmPassword = '';

  protected readonly passwordRules = computed<PasswordRule[]>(() => {
    const password = this.passwordValue();

    return [
      {
        label: 'At least 8 characters',
        valid: password.length >= 8,
      },
      {
        label: '1 uppercase letter',
        valid: /[A-Z]/.test(password),
      },
      {
        label: '1 lowercase letter',
        valid: /[a-z]/.test(password),
      },
      {
        label: '1 number',
        valid: /\d/.test(password),
      },
      {
        label: '1 special character',
        valid: /[^A-Za-z0-9]/.test(password),
      },
    ];
  });

  private readonly passwordValue = signal('');

  protected onPasswordChange(value: string): void {
    this.password = value;
    this.passwordValue.set(value);
  }

  protected setPassword(form: NgForm): void {
    this.submitted = true;

    if (form.invalid || !this.canSubmit()) {
      form.control.markAllAsTouched();
      return;
    }
  }

  protected togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  protected toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  protected showFieldError(form: NgForm, controlName: string): boolean {
    const control = form.controls[controlName];

    return Boolean(control?.invalid && (control.touched || this.submitted));
  }

  protected showConfirmMismatch(form: NgForm): boolean {
    const control = form.controls['confirmPassword'];

    return Boolean(
      this.confirmPassword &&
        this.password &&
        this.confirmPassword !== this.password &&
        (control?.touched || this.submitted),
    );
  }

  protected allPasswordRulesMet(): boolean {
    return this.passwordRules().every((rule) => rule.valid);
  }

  protected canSubmit(): boolean {
    return Boolean(this.password && this.confirmPassword && this.allPasswordRulesMet() && this.password === this.confirmPassword);
  }
}
