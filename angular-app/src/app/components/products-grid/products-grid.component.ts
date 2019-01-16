import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from '../../domain/product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})

export class ProductsGridComponent implements OnInit {

  @Input() products: Product[];
  @Output() updateFavorites = new EventEmitter<boolean>();
  @Output() updateCart = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  favorite() {
    this.updateFavorites.emit();
  }

  cart() {
    this.updateCart.emit();
  }
}
