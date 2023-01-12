import { CartService } from './../cart.service';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private feedService: FeedService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.feedService.getBooks('Harry potter')
      .subscribe((res: Book[]) => {
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

  getColor() {
    return 'red';
  }
}
