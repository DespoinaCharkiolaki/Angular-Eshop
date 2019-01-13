import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push;
  }
}
