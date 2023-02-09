import { Data } from '@angular/router';
import { CartQuery } from './cart.query';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Book } from '../book.interface';
import { CartService } from './cart.service';
import { Observable, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  shoppingCart$: Observable<Book[]>;
  //= this.cartService.shoppingCart;

  displayedColumns: string[] = ['id', 'title', 'price'];
  dataSource: MatTableDataSource<Book>;
  subscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  constructor(
    private cartQuery: CartQuery, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.shoppingCart$ = this.cartQuery.selectShoppingCart$
    this.subscription = this.cartQuery.selectShoppingCart$
      .subscribe((cart: Book[]) => {
        this.dataSource = new MatTableDataSource(cart);
        this.dataSource.sort = this.sort;
        
      }
      )
  }

  removeFromCartHandler(book: Book) {
    this.cartService.removeFromCart(book);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
