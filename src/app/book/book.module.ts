import { MatDialogModule } from '@angular/material/dialog';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    BookComponent
  ],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class BookModule { }
