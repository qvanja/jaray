import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CurrencyPipe, JsonPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-pipe';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    CurrencyPipe,
    KhmerCurrencyPipe,
    RouterLink,

  ],
  templateUrl: './product-box.html',
  styleUrl: './product-box.css'
})
export class ProductBox {
  @Input() product : any = [];
  @Output() addToCart : any  = new EventEmitter<any>();
  onAddToCart (product: any) {
    return this.addToCart.emit(product);
  }
}
