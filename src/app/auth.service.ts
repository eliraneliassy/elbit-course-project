import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string | null = null;
  constructor(private router: Router) { }

  login(userEmail: string): void {
    this.user = userEmail;
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.user = null;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }
}
