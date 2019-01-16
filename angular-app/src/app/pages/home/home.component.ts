import {Component, OnInit} from '@angular/core';
import {Product} from "../../domain/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsObservable().subscribe(products => this.products = products);
  }

}
