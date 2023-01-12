import { API_MOCK } from './books.api.mock';
import { Book } from './book.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Book[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', term);

    return this.httpClient.get<any>(this.BASE_URL, { params: queryParams })
    // return of(API_MOCK)
      .pipe(
        map((res: any) => res.items.map((item: any) => (
          {
            title: item.volumeInfo.title,
            price: item.volumeInfo.pageCount,
            previewImgUrl: item.volumeInfo.imageLinks.thumbnail
          }
        )))
      );
  }
}

