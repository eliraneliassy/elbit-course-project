import { CartService } from './../cart/cart.service';
import { FeedService } from './feed.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Book } from '../book.interface';
import { debounceTime, distinctUntilChanged, Observable, Subject, Subscription, switchMap, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>

  search$ = new Subject<string>();
  subscription: Subscription = new Subscription();

  constructor(
    private feedService: FeedService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.feedService.getBooks('Harry potter')
    //   .subscribe((res: Book[]) => {
    //     this.books = res;
    //   });

    this.books$ = this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => this.feedService.getBooks(term)),
        tap((books: Book[]) => this.feedService.setCurrentResult(books))
      )

      // .subscribe(
      //   (res: Book[]) => {
      //     this.books = res;
      //     this.cdr.markForCheck();
      //   }
      // )

    this.subscription = timer(0, 1000).pipe(take(1)).subscribe(console.log)

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

  doSearch(target: any) {
    // console.log(target.value);
    this.search$.next(target.value);
  }
}
