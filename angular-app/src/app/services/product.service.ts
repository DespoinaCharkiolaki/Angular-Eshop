import {Injectable} from '@angular/core';

import {Product} from '../domain/product';
import {DBPRODUCTS} from '../domain/mock-products';
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly products: Product[];
  private productsSource = new Subject<Product[]>();
  productsObservable$ = this.productsSource.asObservable();

  constructor() {
    this.products = DBPRODUCTS.map(p => new Product(p, false, false));
    this.productsNext(this.products)
  }

  productsNext(products: Product[]) {
    this.productsSource.next(products);
  }

  getProductsObservable(): Observable<Product[]> {
    return of(this.products);
  }

  getFavoritesObservables(): Observable<Product[]> {
    return of(this.products.filter(p => p.isFavorite));
  }

  getCartObservables(): Observable<Product[]> {
    return of(this.products.filter(p => p.inCart));
  }

  setProductInFavorites(product: Product, value: boolean) {
    this.products.map(p => {if (p.id == product.id) p.isFavorite = value});
  }

  setProductInCart(product: Product, value: boolean) {
    this.products.map(p => {if (p.id == product.id) p.inCart = value});
  }

  getProductsAsMap(): Map<number, Product> {
    let map = new Map<number, Product>();
    this.products.map(p => map.set(p.id, p));
    return map;
  }

  searchProductsObservable(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    let filtered = this.products.filter(p => p.name.includes(term));
    return of(filtered);
  }
}
