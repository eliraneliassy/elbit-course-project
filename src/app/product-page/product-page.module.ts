import { BookModule } from './../book/book.module';
import { ProductPageComponent } from './product-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    BookModule
  ]
})
export class ProductPageModule { }
