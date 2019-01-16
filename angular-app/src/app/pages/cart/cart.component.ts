import {Component, OnInit} from '@angular/core';
import {Product} from "../../domain/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productService.getCartObservables()
      .subscribe(products => this.products = products);
  }

  remove() {
    this.getCart();
  }

}
