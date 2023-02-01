import { ProductPageComponent } from './product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageResolver } from '../product-page.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ProductPageComponent,
    resolve: [ProductPageResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
