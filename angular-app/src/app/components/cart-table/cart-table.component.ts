import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../domain/product";
import {ProductService} from "../../services/product.service";
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() updateCart = new EventEmitter<boolean>();

  constructor(private productService: ProductService, private headerService: HeaderService) {
  }

  ngOnInit() {
  }

  remove(product: Product) {
    this.productService.setProductInCart(product, !product.inCart);
    this.updateCart.emit();
    this.headerService.updateCartCount(product.inCart ? 1 : -1);
  }
}
