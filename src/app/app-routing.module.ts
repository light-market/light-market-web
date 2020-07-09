import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { VeterinaryComponent } from './components/veterinary/veterinary.component';
import { CategoryItemComponent } from './pages/category-item/category-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: CategoriesComponent },
  { path: 'veterinary', component: VeterinaryComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'items/:category', component: CategoryItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
