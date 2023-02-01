import { BookModule } from './../book/book.module';
import { BookComponent } from './../book/book.component';
import { FeedComponent } from './feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';


@NgModule({
  declarations: [
    FeedComponent,    
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    BookModule
  ]
})
export class FeedModule { }
