import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private cartService: CartService) { }

  getProducts(): Product[] {
    return PRODUCTS.map(p => new Product(
      p, 
      this.isProductInCart(p.id), 
      false));
  }

  isProductInCart(id: number): boolean {
    var cartedProductsIdsArray = this.cartService.cart.map(cartedProduct => {
      return (cartedProduct.id);
    });
    return cartedProductsIdsArray.includes(id);
  }

  // getProducts(): Observable<Product[]> {
  //   return of(PRODUCTS);
  // }
}
