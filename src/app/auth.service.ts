import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private router: Router) { }

  login(userEmail: string): void {
    // this.user = userEmail;
    this.user.next(userEmail);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    // this.user = null;
    this.user.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }
}
