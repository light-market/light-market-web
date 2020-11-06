import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  carts :any[] = []
  dtOptions: DataTables.Settings = {};
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrders().subscribe(res=>{
      this.carts=res;
      console.log(this.carts);
    },err=>{
      console.log(err);
    })
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
