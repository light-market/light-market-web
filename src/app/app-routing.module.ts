import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryItemsComponent } from './pages/category-items/category-items.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';



const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'send-question', component: SendQuestionComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'categories/:category', component: CategoryItemsComponent },
  { path : 'dashboard' ,loadChildren : ()=> import ('./admin.module').then(m=>m.AdminModule)}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
