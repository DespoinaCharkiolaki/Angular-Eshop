import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @Input() product: Product;

  cartBlueImgPath: string;
  heartRedImgPath: string;
  cartImgPath: string;
  heartImgPath: string;

  constructor(private cartService: CartService) {
    this.cartBlueImgPath = "assets/images/cart-blue.svg";
    this.heartRedImgPath = "assets/images/like-red.svg";
    this.cartImgPath = "assets/images/cart-black.svg";
    this.heartImgPath = "assets/images/like-black.svg";
  }

  ngOnInit() {
  }

  onSelectFav(product: Product) {
    this.product.fav = !this.product.fav;
  }

  onSelectCart(product: Product) {
    this.product.cart = !this.product.cart;
    //this.cartService.addToCart(this.product);
  }
}
