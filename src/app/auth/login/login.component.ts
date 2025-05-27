import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,NgIf],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <input
          name="usernameOrEmail"
          type="text"
          placeholder="Username or Email"
          [(ngModel)]="usernameOrEmail"
          required
          #usernameInput="ngModel"
        />
        <div class="error" *ngIf="usernameInput.invalid && usernameInput.touched">
          Username or Email is required
        </div>

        <input
          name="password"
          type="password"
          placeholder="Password"
          [(ngModel)]="password"
          required
          #passwordInput="ngModel"
        />
        <div class="error" *ngIf="passwordInput.invalid && passwordInput.touched">
          Password is required
        </div>

        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 5rem auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      background: white;
      color: #333;
    }
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #1DA1F2;
    }
    input {
      width: 100%;
      padding: 0.7rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 0.8rem;
      background-color: #1DA1F2;
      color: white;
      font-size: 1.1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:disabled {
      background-color: #7ec1f7;
      cursor: not-allowed;
    }
    button:hover:not(:disabled) {
      background-color: #0d8ddb;
    }
    .error {
      color: red;
      font-size: 0.85rem;
      margin-top: -0.8rem;
      margin-bottom: 0.8rem;
    }
  `]
})
export class LoginComponent {
  usernameOrEmail = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simple demo: Log values and navigate to main page (replace with real auth)
    console.log('Login attempt:', this.usernameOrEmail, this.password);
    
    // Simulate successful login by routing to main page
    this.router.navigate(['/main']);
  }
}
