import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';
import { Book } from '../book.interface';



@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

    selectShoppingCart$: Observable<Book[]> = this.select('shoppingCart');

    constructor(protected override store: CartStore) {
        super(store);
    }

}