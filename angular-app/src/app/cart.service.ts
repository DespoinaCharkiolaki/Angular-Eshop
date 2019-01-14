import {Injectable} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private productService: ProductService) {
  }

  //cart: Product[] = [];

  getCart(): Product[] {
    return this.productService.getProducts().filter(p => p.cart);
  }

  // addToCart(product: Product): void {
  //   this.cart.push;
  // }
}
