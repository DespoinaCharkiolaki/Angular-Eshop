import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  private favoriteCount: number = 0;
  private cartCount: number = 0;

  // Observable string sources
  private favoriteSource = new Subject<number>();
  private cartSource = new Subject<number>();

  // Observable string streams
  favorite$ = this.favoriteSource.asObservable();
  cart$ = this.cartSource.asObservable();

  constructor() {
    this.updateCartCount(0);
    this.updateFavoriteCount(0);
  }

  // Service message commands
  updateFavoriteCount(value: number) {
    this.favoriteCount = this.favoriteCount + value;
    this.favoriteSource.next(this.favoriteCount);
  }

  updateCartCount(value: number) {
    this.cartCount = this.cartCount + value;
    this.cartSource.next(this.cartCount);
  }
}
