import { Component } from '@angular/core';
import {CartService} from '../service/cart-service';
import {CurrencyPipe, DecimalPipe, JsonPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-pipe';
import {RouterLink} from '@angular/router';


declare const Swal : any;

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe,
    KhmerCurrencyPipe,
    JsonPipe,
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
constructor(public cartService: CartService) {}
  removeItem(item: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure🥲?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.cartService.removeItem(item);
        swalWithBootstrapButtons.fire({
          title: "Remove!",
          text: "Your Product has been removed.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your product is safe :)",
          icon: "error"
        });
      }
    });
  }

  increaseQty(item: any) {
  this.cartService.increaseQty(item);
  }

  decreaseQty(item: any) {
  if (item.qty > 1) {
    this.cartService.decreaseQty(item);
  }
  }
}
