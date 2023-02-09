import { BookModule } from './../book/book.module';
import { BookComponent } from './../book/book.component';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    BookModule,
    MatTableModule,
    MatSortModule
  ]
})
export class CartModule { }
