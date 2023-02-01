import { Book } from './../book.interface';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BookComponent {

  @Input() book?: Book;
  @Input() itemInCart: boolean = false;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private router: Router) { }


  addToCartClicked() {
    this.addToCart.emit(this.book);
  }

  RemoveFromCartClicked() {
    this.removeFromCart.emit(this.book);
  }

  navigateToProduct() {
    this.router.navigateByUrl(`/product/${this.book?.id}`)
  }
}
