import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { SharedModule } from './shared.module';
import { MainControlComponent } from './pages/main-control/main-control.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [AdminProductsComponent,MainControlComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: 'dashboard', component: MainControlComponent }])
  ]
})
export class AdminModule { }
