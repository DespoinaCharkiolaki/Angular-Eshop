import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  // getProducts(): void {
  //   this.productService.getProducts()
  //       .subscribe(products => this.products = products);
  // }
}