import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrls: ['./last-orders.component.scss']
})
export class LastOrdersComponent implements OnInit {
  carts: Cart[] = [{
    products: [{
      quantity: 0,
      productID: {
        id: ''

      }
    }],
    totalPrice: 0
  }];
  isLoading = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.api.getUserOrder().subscribe(res => {
      this.carts = res;
      this.isLoading = false;
    })
  }
  totalItems(products) {
    let sum = 0;
    for (let item = 0; item < products.length; item++) {
      sum = sum + products[item].quantity
    }
    return sum;
  }

}
