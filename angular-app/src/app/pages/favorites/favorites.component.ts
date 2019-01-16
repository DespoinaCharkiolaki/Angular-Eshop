import {Component, OnInit} from '@angular/core';
import {Product} from "../../domain/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.productService.getFavoritesObservables()
      .subscribe(products => this.products = products);
  }

  favorite() {
    this.getFavorites();
  }

}
