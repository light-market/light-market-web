import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';
import { CategoryItemsComponent } from './pages/category-items/category-items.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    HeaderComponent,
    SendQuestionComponent,
    CategoryItemsComponent,
    ProductComponent,
    ShoppingCartComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
