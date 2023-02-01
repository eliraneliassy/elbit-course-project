import { AuthQuery } from './auth/auth.query';
import { AuthState, AuthStore } from './auth/auth.store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private router: Router, private authStore: AuthStore, private authQuery: AuthQuery) { }

  login(userEmail: string): void {
    // this.user = userEmail;
    // this.user.next(userEmail);
    this.authStore.update((state: AuthState) => ({ ...state, user: userEmail }));
    this.router.navigateByUrl('/feed');
  }

  logout() {
    // this.user = null;
    // this.user.next(null);
    this.authStore.update((state: AuthState) => ({ ...state, user: null }));

  }

  isLoggedIn(): Observable<boolean> {
    return of(true); // this.authQuery.isUserLoggedIn$;
  }
}
