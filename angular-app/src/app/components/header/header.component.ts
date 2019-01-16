import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  private _favorites: number = 0;
  private _cart: number = 0;

  favoriteSubscription: Subscription;
  cartSubscription: Subscription;

  constructor(private headerService: HeaderService) {
    this.favoriteSubscription = headerService.favorite$.subscribe(
      count => {
        this._favorites = count;
      });
    this.cartSubscription = headerService.cart$.subscribe(
      count => {
        this._cart = count;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.favoriteSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  // @Input()
  // set favorites(count: string) {
  //   this._favorites = '('+ count + ')' || '';
  // }

  get favorites() {
    return this._favorites
  }

  // @Input()
  // set cart(count: string) {
  //   this._cart = '('+ count + ')' || '';
  // }

  get cart() {
    return this._cart;
  }

  // getCartCount(): void {
  //   this.productService.getCartObservables()
  //     .subscribe(productsInCart => {
  //       console.log(productsInCart);
  //       this.cart = productsInCart;
  //     });
  // }
  //
  // getFavorites(): void {
  //   this.productService.getFavoritesObservables()
  //     .subscribe(productsInFavorites => this.favorites = productsInFavorites);
  // }

}
