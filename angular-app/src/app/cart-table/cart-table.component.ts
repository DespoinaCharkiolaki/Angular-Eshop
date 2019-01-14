import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  products = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getCart()
  }
}
