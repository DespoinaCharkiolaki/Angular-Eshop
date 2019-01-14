import { Component, OnInit, Input } from '@angular/core';
// import { Product } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() products: Product[];

  constructor() { 
    // const favorites = this.products;
    // const cart = this.products;
    // const favsCount = favorites.length;
    // const cartCount = cart.length;
    // let counterfavs = (favsCount > 0) ? "(" + favsCount + ")" : '';
    // let countercart = (cartCount > 0) ? "(" + cartCount + ")" : '';

  }

  ngOnInit() {
  }

}
