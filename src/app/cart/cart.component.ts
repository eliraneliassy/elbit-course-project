import { Component } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  shoppingCart: Book[] = this.cartService.shoppingCart;


  constructor(
    private cartService: CartService) {

  }

  removeFromCartHandler(book: Book) {
    this.cartService.removeFromCart(book);

  }
}
