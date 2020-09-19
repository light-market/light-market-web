import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
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
import { from } from 'rxjs';
import { AuthComponent } from './components/auth/auth.component';


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
    LoadingSpinnerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
