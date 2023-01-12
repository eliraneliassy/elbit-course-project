import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.interface';
import { switchMap, map } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  book?: Book;

  constructor(private route: ActivatedRoute, private feedService: FeedService) { }
  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.feedService.getBooks('Harry potter')
            .pipe(
              map((res: Book[]) => {
                const filteredBooks: Book[] = res.filter(b => b.id === params['id']);
                if (filteredBooks) {
                  this.book = filteredBooks[0]
                }
              })
            )
        })).subscribe()


  }


}
