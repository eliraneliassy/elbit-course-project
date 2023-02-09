import { CartService } from './../cart/cart.service';
import { Book } from './../book.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book, private cartService: CartService) {

  }

  addToCart(){
    this.cartService.addToCart(this.book);
  }
}
