import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from './pages/cart/cart.component';
import {CartTableComponent} from './components/cart-table/cart-table.component';
import {CounterComponent} from './components/counter/counter.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {FilterComponent} from './components/filter/filter.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductsGridComponent} from './components/products-grid/products-grid.component';
import {SearchComponent} from './components/search/search.component';
import {ShopComponent} from './pages/shop/shop.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SortComponent} from './components/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartTableComponent,
    CounterComponent,
    FavoritesComponent,
    FilterComponent,
    HeaderComponent,
    HomeComponent,
    ProductCardComponent,
    ProductsGridComponent,
    SearchComponent,
    ShopComponent,
    SidebarComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
