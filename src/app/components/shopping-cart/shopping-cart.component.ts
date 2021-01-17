import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.interface';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  loading = false;
  message: string;
  totalItemss = 0;
  cart: Cart = {
    products: [{
      quantity: 0,
      productID: {
        id: ''
      }
    }],
    totalPrice: 0
  };

  constructor(
    private api: ApiService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.api.getCart().subscribe(res => {
      if (res != null) {
        this.cart = res;
        this.totalItems(this.cart.products)
      }

      this.loading = false
    }, err => {
      console.log(err)
      this.loading = false
    })
  }



  onUpdateAmount(cartID: string, productID: string, productPrice: string, type: string) {
    this.loading = true;
    this.api.UpdateAmount(cartID, productID, productPrice, type).subscribe(res => {
      this.loading = false
      this.cart = res;
      this.totalItems(this.cart.products)
    }, err => {
      console.log(err);
      this.loading = false
    })
  }
  checkout() {
    if (!this.userService.token) {
      this.router.navigate(['auth'], { queryParams: { redirectTo: 'shopping-cart' } });
    }

  }
  makeOrder(form: NgForm) {
    this.cart.fullname = form.value.fullname;
    this.cart.address = form.value.address;
    this.cart.phone = form.value.phone;
    this.api.order(this.cart).subscribe(res => {
      this.message = res.message;
    }, err => {
      console.log(err)
    })
  }
  getOrders() {
    if (!this.userService.token) {
      this.router.navigate(['auth'], { queryParams: { redirectTo: 'last-orders' } });
    }
    else {
      this.router.navigate(['last-orders'])
    }
  }
  totalItems(products) {
    this.totalItemss = 0
    for (let item = 0; item < products.length; item++) {
      this.totalItemss = this.totalItemss + products[item].quantity
    }
  }
}