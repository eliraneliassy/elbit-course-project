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

  book2: Book = {
    title: 'The Lord of the Rings',
    price: 140.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5440/9780544003415.jpg`
  };

  book3: Book = {
    title: 'Angular Projects : Build modern web apps by exploring Angular 12 with 10 different projects and cutting-edge technologies, 2nd Edition',
    price: 240.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8002/9781800205260.jpg`
  };

  books: Book[] = [
    this.book1, this.book2, this.book3
  ]
  

}
