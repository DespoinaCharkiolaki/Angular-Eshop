import {Component, OnInit} from '@angular/core';
import {FavoritesService} from "../favorites.service";

@Component({
  selector: 'app-favorites-grid',
  templateUrl: './favorites-grid.component.html',
  styleUrls: ['./favorites-grid.component.css']
})
export class FavoritesGridComponent implements OnInit {

  products = [];

  constructor(private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.products = this.favoritesService.getFavorites()
  }
}
