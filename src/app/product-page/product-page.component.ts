import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Book } from '../book.interface';
import { switchMap, map } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  book?: Book;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.book = data[0];
    })
  }


}
