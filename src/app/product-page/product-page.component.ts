import { FeedService } from '../feed/feed.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Book } from '../book.interface';
import { switchMap, map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {

  book$?: Observable<Book>;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.book$ = this.route.data
      .pipe(
        map(((data: Data) => data[0])
        ))

  }


}
