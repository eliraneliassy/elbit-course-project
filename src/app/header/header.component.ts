import { Observable, map } from 'rxjs';
import { CartQuery } from './../cart/cart.query';
import { AuthQuery } from './../auth/auth.query';
import { Book } from './../book.interface';
import { AuthService } from './../auth.service';
import { CartService } from '../cart/cart.service';
import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  numberOfItemInCart$: Observable<number>;
  name$: Observable<string | null>;
  constructor(private cartQuery: CartQuery, private authQuery: AuthQuery) { }
  ngOnInit(): void {
    this.numberOfItemInCart$ = this.cartQuery.selectShoppingCart$
      .pipe(
        map((shoppingCart: Book[]) => shoppingCart.length)
      )


    this.name$ = this.authQuery.selectUser$
  }
  // ngDoCheck(): void {
  //   this.numberOfItemInCart = this.cartService.numberOfItemInCart();
  //   this.name = this.authService.user;
  // }


}
