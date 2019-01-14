import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { CounterComponent } from './counter/counter.component';
import { FavoritesGridComponent } from './favorites-grid/favorites-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    FavoritesComponent,
    CartComponent,
    ProductsComponent,
    ProductGridComponent,
    SidebarComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    CartTableComponent,
    CounterComponent,
    FavoritesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
