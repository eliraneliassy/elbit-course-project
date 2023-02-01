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
  numberOfItemInCart = 0;
  name: string | null = null;
  constructor(private cartQuery: CartQuery, private authQuery: AuthQuery) {}
  ngOnInit(): void {
    this.cartQuery.selectShoppingCart$.subscribe((cart: Book[]) => {
      this.numberOfItemInCart = cart.length
    });

    this.authQuery.selectUser$.subscribe((user) => {
      this.name = user
    });
  }
  // ngDoCheck(): void {
  //   this.numberOfItemInCart = this.cartService.numberOfItemInCart();
  //   this.name = this.authService.user;
  // }
  

}
