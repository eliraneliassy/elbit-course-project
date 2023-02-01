import { FeedService } from './feed/feed.service';
import { Book } from './book.interface';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductPageResolver implements Resolve<Book> {
  constructor(private feedService: FeedService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    const id = route.params['id'];

    return this.feedService.getCurrentResult()
      .pipe(
        map((res: Book[]) => {
          const filteredBooks: Book[] = res.filter(b => b.id === id);
          return filteredBooks[0]
        })
      )
  }
}
