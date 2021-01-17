import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  deletedItem: string;
  datedItem: string;
  carts: any[] = []
  message: string;
  dtOptions: DataTables.Settings = {};
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrders().subscribe(res => {
      this.carts = res;
    }, err => {
      console.log(err);
    })
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  setDate(form: NgForm) {
    this.apiService.setOrderDelieveryDate(form.value.deliveryDate, this.datedItem).subscribe(res => {
      this.datedItem = null;
      alert('Order is updated please refresh page to show changes')
    }, err => {
      console.log(err)
    })
  }
  onClickModal(event, id) {
    this.apiService.deleteCart(this.deletedItem).subscribe(res => {
      for (let i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id === this.deletedItem) {
          this.carts.splice(i, 1);
          break;
        }
      }
      this.message = res.message;
      this.deletedItem = null;
    }, err => {
      console.log(err.message)
    });
  }
  setOrderDelivered(id) {
    this.apiService.setDelivered(id).subscribe(res => {
      this.message = res.message
    }, err => {
      console.log(err)
    })
  }

}
