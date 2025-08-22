import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Product} from './product/product';
import {Cart} from './cart/cart';
import {Error404} from './error404/error404'
import {ProductDetails} from './product-details/product-details';
import {CheckOut} from './check-out/check-out';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'products', component: Product },
  { path: 'cart', component: Cart },
  { path: 'products-detail', component: ProductDetails },
  { path: 'checkout', component: CheckOut },
  { path: '**', component: Error404 },


];
