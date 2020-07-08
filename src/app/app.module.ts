import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { VeterinaryComponent } from './components/veterinary/veterinary.component';
import { CategoryItemComponent } from './pages/category-item/category-item.component';
import { ItemsComponent } from './components/items/items.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    HeaderComponent,
    VeterinaryComponent,
    CategoryItemComponent,
    ItemsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
