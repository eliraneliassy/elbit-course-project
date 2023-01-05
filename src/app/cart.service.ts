import { Injectable } from '@angular/core';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Book[] = [];

  addToCart(book: Book) {
    this.shoppingCart.push(book);
  }

  removeFromCart(book: Book) {
    const index = this.shoppingCart.findIndex(b => b.title === book.title);

    this.shoppingCart.splice(index, 1);

  }

  checkIfItemInCart(book: Book): boolean {
    const index = this.shoppingCart.findIndex(b => b.title === book.title);

    if (index > -1) {
      return true;
    }

    return false;
  }

  numberOfItemInCart(): number{
    return this.shoppingCart.length;
  }

}
