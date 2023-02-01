import { Book } from './../book.interface';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CartState {
    shoppingCart: Book[];
}

export function createInitialState(): CartState {
    return {
        shoppingCart: []
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {

    constructor() {
        super(createInitialState());
    }
}