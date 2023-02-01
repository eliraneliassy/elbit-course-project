import { RegisterComponent } from './auth/register/register.component';
import { ProductPageResolver } from './product-page.resolver';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
    // canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    // canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
