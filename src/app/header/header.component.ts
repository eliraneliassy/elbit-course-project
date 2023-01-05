import { CartService } from './../cart.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  numberOfItemInCart = 0;
  constructor(private cartService: CartService) {}
  ngDoCheck(): void {
    this.numberOfItemInCart = this.cartService.numberOfItemInCart();
  }
  

}
