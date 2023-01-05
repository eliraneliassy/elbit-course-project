import { Book } from './book.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  book1: Book = {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    price: 90.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg`
  };
}
