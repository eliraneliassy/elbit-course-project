import { Book } from './../book.interface';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  
})
export class BookComponent implements OnInit, DoCheck, OnChanges, AfterViewInit, AfterViewChecked,
AfterContentInit, AfterViewChecked, OnDestroy {

  @Input() book?: Book;
  @Input() itemInCart: boolean = false;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {
    console.log('CTOR');
  }
  ngDoCheck(): void {
    console.log('DO CHECK');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }
  ngAfterViewInit(): void {
    console.log('after view init');   
  }
  ngAfterViewChecked(): void {
    console.log('after view checked ');
    
  }
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  

  addToCartClicked() {
    this.addToCart.emit(this.book);
  }

  RemoveFromCartClicked(){
    this.removeFromCart.emit(this.book);
  }
}
