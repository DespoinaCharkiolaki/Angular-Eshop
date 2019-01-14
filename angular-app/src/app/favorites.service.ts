import {Injectable} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private productService: ProductService) {
  }

  getFavorites(): Product[] {
    return this.productService.getProducts().filter(p => p.fav);
  }
}
