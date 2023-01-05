import { CartService } from './cart.service';
import { BOOKS_MOCK } from './books.mock';
import { Book } from './book.interface';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  books: Book[] = BOOKS_MOCK;

  shoppingCart: Book[] = this.cartService.shoppingCart;

  
  constructor(private cartService: CartService) {
    
  }

  addToCartHandler(book: Book) {
    this.cartService.addToCart(book);
  }

  removeFromCartHandler(book: Book) {
    this.cartService.removeFromCart(book);

  }

  checkIfItemInCart(book: Book): boolean {
    return this.cartService.checkIfItemInCart(book);
  }


}
