import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../domain/product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsObservable().subscribe(products => this.products = products);
    this.filteredProducts = this.products;
  }

  search(term: string) {
    this.filteredProducts = this.products.filter(p => p.name.includes(term));
  }

}
