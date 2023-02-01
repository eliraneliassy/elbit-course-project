import { BOOKS_MOCK } from './../books.mock';
import { CartQuery } from './cart.query';
import { CartStore, CartState } from './cart.store';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartStore: CartStore, private cartQuery: CartQuery) { }

  addToCart(book: Book) {
    // this.shoppingCart.push(book);
    debugger
    const currentCart = [...this.cartQuery.getValue().shoppingCart];
    currentCart.push(book);

    this.cartStore.update((currentState: CartState) => ({
      ...currentState, shoppingCart: currentCart
    }))
  }

  removeFromCart(book: Book) {
    // const index = this.shoppingCart.findIndex(b => b.title === book.title);

    // this.shoppingCart.splice(index, 1);
    // const currentCart = this.shoppingCart.getValue();

    const currentCart = [...this.cartQuery.getValue().shoppingCart];
    const index = currentCart.findIndex(b => b.title === book.title);

    currentCart.splice(index, 1);
    // this.shoppingCart.next(currentCart);
    this.cartStore.update((currentState: CartState) => ({ ...currentState, shoppingCart: currentCart }))
  }

  checkIfItemInCart(book: Book): boolean {
    // const index = this.shoppingCart.findIndex(b => b.title === book.title);

    // if (index > -1) {
    //   return true;
    // }

    // return false;
    const currentCart = [...this.cartQuery.getValue().shoppingCart];
    const index = currentCart.findIndex(b => b.title === book.title);

    if (index > -1) {
      return true;
    }

    return false;


  }

  numberOfItemInCart(): number {
    const currentCart = [...this.cartQuery.getValue().shoppingCart];
    return currentCart.length;
  }

}
