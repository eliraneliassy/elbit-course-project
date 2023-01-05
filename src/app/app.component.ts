import { FeedService } from './feed.service';
import { CartService } from './cart.service';
import { BOOKS_MOCK } from './books.mock';
import { Book } from './book.interface';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  books: Book[] = BOOKS_MOCK;

  shoppingCart: Book[] = this.cartService.shoppingCart;

  
  constructor(private cartService: CartService,
    private feedService: FeedService) {
    
  }
  ngOnInit(): void {
    this.feedService.getBooks('Angular').subscribe((res: Book[]) => {
      this.books = res;
    });
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

  getColor(){
    return 'red';
  }


}
