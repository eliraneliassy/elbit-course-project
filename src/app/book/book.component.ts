import { Book } from './../book.interface';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  
})
export class BookComponent {
  @Input() book?: Book;
  @Input() itemInCart: boolean = false;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();
  

  addToCartClicked() {
    this.addToCart.emit(this.book);
  }

  RemoveFromCartClicked(){
    this.removeFromCart.emit(this.book);
  }
}
