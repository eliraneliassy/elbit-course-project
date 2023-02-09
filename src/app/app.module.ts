import { BookModule } from './book/book.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot({
      maxAge: 25
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    BookModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
