import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-container">
      <h1>Welcome to Tweet Manager</h1>
      <div class="buttons">
        <button (click)="goTo('login')">Login</button>
        <button (click)="goTo('register')">Register</button>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #1DA1F2; /* Twitter blue */
      color: white;
      font-family: Arial, sans-serif;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    .buttons button {
      background-color: white;
      color: #1DA1F2;
      border: none;
      padding: 0.8rem 2rem;
      margin: 0 1rem;
      font-size: 1.2rem;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .buttons button:hover {
      background-color: #0d8ddb;
      color: white;
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  goTo(page: 'login' | 'register') {
    this.router.navigate([page]);
  }
}
