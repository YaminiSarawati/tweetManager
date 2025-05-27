import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Change if needed

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  storeToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
