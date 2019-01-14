import {Injectable} from '@angular/core';

import {Product} from './product';
import {DBPRODUCTS} from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly products: Product[];

  constructor() {
    this.products = DBPRODUCTS.map(p => new Product(p, false, false));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsAsMap(): Map<number, Product> {
    let map = new Map<number, Product>();
    this.products.map(p => map.set(p.id, p));
    return map;
}

  // getProducts(): Observable<Product[]> {
  //   return of(PRODUCTS);
  // }
}
