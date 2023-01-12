import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string | null = null;
  constructor(private router: Router) { }

  login() {
    this.user = 'Eliran';
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.user = null;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }
}
