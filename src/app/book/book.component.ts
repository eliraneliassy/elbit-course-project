import { TestComponent } from './../test/test.component';
import { ProductPageComponent } from './../product-page/product-page.component';
import { Book } from './../book.interface';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private router: Router, private dialog: MatDialog) { }


  addToCartClicked() {
    this.addToCart.emit(this.book);
  }

  RemoveFromCartClicked() {
    this.removeFromCart.emit(this.book);
  }

  navigateToProduct() {
    this.dialog.open(ProductPageComponent, {data: this.book})
    // this.router.navigateByUrl(`/product/${this.book?.id}`)
  }
}
