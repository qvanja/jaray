import {Component, inject, OnInit} from '@angular/core';
import {CartService} from '../service/cart-service';
import {CurrencyPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-pipe';
declare const Swal:any;

@Component({
  selector: 'app-check-out',
  imports: [
    CurrencyPipe,
    KhmerCurrencyPipe
  ],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut implements OnInit{
  private cartService = inject(CartService);

  cartItems: any[] = [];
  total = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getItem();
    this.total = this.cartService.getTotal();
  }

  checkout(): void {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'This will clear your cart.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, checkout',
      cancelButtonText: 'No, keep shopping'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.cartItems = [];
        localStorage.removeItem('cart');
        Swal.fire({
          icon: 'success',
          title: 'Checkout complete!',
          text: 'Your cart has been cleared.',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }


}
