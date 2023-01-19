import { AuthService } from './../auth.service';
import { CartService } from './../cart.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  numberOfItemInCart = 0;
  name: string | null = null;
  constructor(private cartService: CartService, private authService: AuthService) {}
  ngDoCheck(): void {
    this.numberOfItemInCart = this.cartService.numberOfItemInCart();
    this.name = this.authService.user;
  }
  

}
