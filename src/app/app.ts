import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CartService} from './service/cart-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angularApp';

  constructor(public cartService: CartService) {}

}
