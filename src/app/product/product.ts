import { Component } from '@angular/core';
import {ProductBox} from "../product-box/product-box";
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';
declare const Swal : any;

@Component({
  selector: 'app-product',
    imports: [
        ProductBox
    ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  constructor(public cartService: CartService,public products: ProductService) { }
  onAddToCart(product : any){
    this.cartService.addItem(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Product Added!",
      showConfirmButton: false,
      timer: 1500
    });
  };
}
