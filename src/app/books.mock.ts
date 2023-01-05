import { Book } from './book.interface';

const book1: Book = {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    price: 90.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg`
};

const book2: Book = {
    title: 'The Lord of the Rings',
    price: 140.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5440/9780544003415.jpg`
};

const book3: Book = {
    title: 'Angular Projects : Build modern web apps by exploring Angular 12 with 10 different projects and cutting-edge technologies, 2nd Edition',
    price: 240.00,
    previewImgUrl: `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8002/9781800205260.jpg`
};

export const BOOKS_MOCK: Book[] = [
    book1, 
    book2, book3
]