import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';


@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

    selectUser$ = this.select('user');

    // isUserLoggedIn$ = this.selectUser$.pipe(
    //     map((user: string | null) => !!user)
    // )

    constructor(protected override store: AuthStore) {
        super(store);
    }

}