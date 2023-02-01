import { CartQuery } from './cart.query';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  shoppingCart: Book[] = []
  //= this.cartService.shoppingCart;


  constructor(
    private cartQuery: CartQuery, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartQuery.selectShoppingCart$.subscribe((cart) => {
      console.log('cart changed');
      this.shoppingCart = cart
    })
  }

  removeFromCartHandler(book: Book) {
    this.cartService.removeFromCart(book);

  }
}
