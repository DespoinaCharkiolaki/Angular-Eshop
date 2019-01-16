import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Product} from "../domain/product";
import {DBPRODUCTS} from "../domain/mock-products";

@Injectable({
  providedIn: 'root'
})

export class ProductsObservableService {

  private _products: Product[] = [];
  private _favorites: Product[] = [];
  private _cart: Product[] = [];

  // Observable string sources
  private productsSource = new Subject<Product[]>();
  private favoritesSource = new Subject<Product[]>();
  private cartSource = new Subject<Product[]>();

  // Observable string streams
  products$ = this.productsSource.asObservable();
  favorites$ = this.favoritesSource.asObservable();
  cart$ = this.cartSource.asObservable();

  constructor() {
    this.initialiseProducts();
  }

  initialiseProducts() {
    this._products = DBPRODUCTS.map(p => new Product(p, false, false));
    this.productsSource.next(this._products);
  }

// Service message commands
  updateProducts(product: Product) {
    //this._products = this._products.map(value => {if (value.id = product.id) return value = product});
    this._products = [product];
    this.productsSource.next(this._products);
  }

  updateFavorites(product: Product) {
    //apply logic here
    this.favoritesSource.next(this._favorites);
  }

  updateCart(product: Product) {
    //apply logic here
    this.cartSource.next(this._cart);
  }
}
