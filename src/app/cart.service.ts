import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  addToCart(book: Book) {
    // this.shoppingCart.push(book);
    const currentCart = this.shoppingCart.getValue();
    currentCart.push(book);
    this.shoppingCart.next(currentCart);
  }

  removeFromCart(book: Book) {
    // const index = this.shoppingCart.findIndex(b => b.title === book.title);

    // this.shoppingCart.splice(index, 1);
    const currentCart = this.shoppingCart.getValue();
    const index = currentCart.findIndex(b => b.title === book.title);

    currentCart.splice(index, 1);
    this.shoppingCart.next(currentCart);
  }

  checkIfItemInCart(book: Book): boolean {
    // const index = this.shoppingCart.findIndex(b => b.title === book.title);

    // if (index > -1) {
    //   return true;
    // }

    // return false;
    const currentCart = this.shoppingCart.getValue();
     const index = currentCart.findIndex(b => b.title === book.title);

    if (index > -1) {
      return true;
    }

    return false;


  }

  numberOfItemInCart(): number{
    const currentCart = this.shoppingCart.getValue();
    return currentCart.length;
  }

}
