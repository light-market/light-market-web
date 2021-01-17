import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { CategoryControlComponent } from './pages/category-control/category-control.component';
import { FaqControlComponent } from './pages/faq-control/faq-control.component';
import { MainControlComponent } from './pages/main-control/main-control.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
    { path: '', component: MainControlComponent },
    {
        path: 'stock', component: AdminProductsComponent, children: [
            { path: 'add-product', component: AddProductComponent },
            { path: 'edit-product', component: EditProductComponent }
        ]
    },
    { path: 'faqControl', component: FaqControlComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'categories', component: CategoryControlComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class AdminRoutingModule {

}