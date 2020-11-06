import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { SharedModule } from './shared.module';
import { MainControlComponent } from './pages/main-control/main-control.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FaqControlComponent } from './pages/faq-control/faq-control.component';
import { OrdersComponent } from './pages/orders/orders.component';





@NgModule({
  declarations: [AdminProductsComponent,MainControlComponent, SidebarComponent, AddProductComponent, EditProductComponent, FaqControlComponent, OrdersComponent],
  imports: [
    SharedModule,
    AdminRoutingModule,
    DataTablesModule
  ]
})
export class AdminModule { }
