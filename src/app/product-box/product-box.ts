import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CurrencyPipe, JsonPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-pipe';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    CurrencyPipe,
    KhmerCurrencyPipe
  ],
  templateUrl: './product-box.html',
  styleUrl: './product-box.css'
})
export class ProductBox {
  @Input() product : any = [];
}
