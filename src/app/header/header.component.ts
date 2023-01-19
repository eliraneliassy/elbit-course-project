import { Book } from './../book.interface';
import { AuthService } from './../auth.service';
import { CartService } from './../cart.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numberOfItemInCart = 0;
  name: string | null = null;
  constructor(private cartService: CartService, private authService: AuthService) {}
  ngOnInit(): void {
    this.cartService.shoppingCart.subscribe((cart: Book[]) => {
      this.numberOfItemInCart = cart.length
    });

    this.authService.user.subscribe((user) => {
      this.name = user
    });
  }
  // ngDoCheck(): void {
  //   this.numberOfItemInCart = this.cartService.numberOfItemInCart();
  //   this.name = this.authService.user;
  // }
  

}
