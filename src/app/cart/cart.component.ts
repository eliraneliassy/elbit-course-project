import { CartQuery } from './cart.query';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  shoppingCart$: Observable<Book[]>;
  //= this.cartService.shoppingCart;


  constructor(
    private cartQuery: CartQuery, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.shoppingCart$ = this.cartQuery.selectShoppingCart$
  }

  removeFromCartHandler(book: Book) {
    this.cartService.removeFromCart(book);

  }
}
