import { Component } from '@angular/core';
import {ProductBox} from "../product-box/product-box";
import {Slider} from "../slider/slider";
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';
declare const Swal : any;

@Component({
  selector: 'app-home',
    imports: [
        ProductBox,
        Slider
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public products: ProductService) { }


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
