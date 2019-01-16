import {Product} from "./product";

export interface AppState {
  searchText: '';
  products: Product[];
  favorites: Product[];
  cart: Product[];

}
