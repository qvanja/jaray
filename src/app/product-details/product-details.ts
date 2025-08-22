import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CurrencyPipe, JsonPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-pipe';
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';
declare const axios:any;
declare const $: any;
declare const Swal: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  imports: [
    JsonPipe,
    CurrencyPipe,
    KhmerCurrencyPipe,
    RouterLink
  ],
  styleUrls: ['./product-details.css']
})
export class ProductDetails {
  constructor(public route : ActivatedRoute, public cartService: CartService,public products: ProductService ) { }
  public product: any=[];
  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    //fecthAPI
    let vm = this;
    let url = 'https://sv-gen-api.bczin2zin2takeo.us/api/product_detail?id='+product_id;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    axios.get(url)
      .then(function (response:any) {
        // handle success
        console.log(response.data);
        vm.product = response.data;
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        $.LoadingOverlay("hide");
      });

  }
  addToCart(): void {
    if (!this.product || !this.product.name) {
      Swal.fire('Error', 'Product not loaded yet', 'error');
      return;
    }

    this.cartService.addItem({
      name: this.product.name,
      price: this.product.price,
      imageUrl: this.product.imageUrl,
      id: this.product.id
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Product Added!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
