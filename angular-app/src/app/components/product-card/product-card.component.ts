import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../domain/product';
import {ProductService} from "../../services/product.service";
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() updateFavorites = new EventEmitter<any>();
  @Output() updateCart = new EventEmitter<any>();

  cartBlueImgPath: string;
  heartRedImgPath: string;
  cartImgPath: string;
  heartImgPath: string;

  constructor(private productService: ProductService, private headerService: HeaderService) {
    this.cartBlueImgPath = "assets/images/cart-blue.svg";
    this.heartRedImgPath = "assets/images/like-red.svg";
    this.cartImgPath = "assets/images/cart-black.svg";
    this.heartImgPath = "assets/images/like-black.svg";
  }

  ngOnInit() {
  }

  favorite(product: Product) {
    this.productService.setProductInFavorites(product, !this.product.isFavorite);
    this.updateFavorites.emit();
    this.headerService.updateFavoriteCount(this.product.isFavorite ? 1 : -1);
  }

  cart(product: Product) {
    this.productService.setProductInCart(product, !this.product.inCart);
    this.updateCart.emit();
    this.headerService.updateCartCount(this.product.inCart ? 1 : -1);
  }
}
