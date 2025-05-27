import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';  // <-- Import these!

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],  // <-- Add them here
  template: `
    <div class="register-container">
      <h2>Register</h2>
      <form (ngSubmit)="onSubmit()" #registerForm="ngForm" novalidate>
        <input
          name="username"
          type="text"
          placeholder="Username"
          [(ngModel)]="username"
          required
          #usernameInput="ngModel"
        />
        <div class="error" *ngIf="usernameInput.invalid && usernameInput.touched">
          Username is required
        </div>

        <input
          name="password"
          type="password"
          placeholder="Password"
          [(ngModel)]="password"
          required
          minlength="6"
          #passwordInput="ngModel"
        />
        <div class="error" *ngIf="passwordInput.invalid && passwordInput.touched">
          Password is required (min 6 chars)
        </div>

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          [(ngModel)]="confirmPassword"
          required
          #confirmPasswordInput="ngModel"
          [ngModelOptions]="{updateOn: 'blur'}"
        />
        <div class="error" *ngIf="passwordMismatch && confirmPasswordInput.touched">
          Passwords do not match
        </div>

        <button
          type="submit"
          [disabled]="
            registerForm.invalid || passwordMismatch
          "
        >
          Register
        </button>
      </form>
    </div>
  `,
  styles: [`
    /* styles omitted for brevity */
  `]
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  get passwordMismatch(): boolean {
    return this.password !== this.confirmPassword;
  }

  onSubmit() {
    if (this.passwordMismatch) return;
    console.log('Register attempt:', this.username, this.password);
    this.router.navigate(['/login']);
  }
}
