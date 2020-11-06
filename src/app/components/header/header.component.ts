import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product.interface';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  checkLogin = false;
  menu = [
    {
      'name': 'Home',
      'link': '/categories'
    },
    {
      'name': 'Cats',
      'link': '/categories/cats'
    },
    {
      'name': 'Dogs',
      'link': '/categories/dogs'
    },
    {
      'name': 'Birds',
      'link': '/categories/birds'
    },
    {
      'name': 'Product',
      'link': '/categories/products'
    },
    {
      'name': 'Veterinary Problem',
      'link': '/send-question'
    },
    {
      'name': 'Shopping Cart',
      'link': '/shopping-cart'
    }
  ]
  constructor(private api: ApiService, private cartService: CartService , private router : Router ,private userService:UserService) { }
  ngDoCheck(): void {
    if (this.userService.token) {
      this.checkLogin = true;
    }
  }

  ngOnInit(): void {
    this.userService.checkLogged();
    if (this.userService.token) {
      this.checkLogin = true;
      if (this.cartService.cart.totalPrice === 0) {
        this.cartService.getCartFromApi();
      }
    }

  }

  logout() {
    console.log(this.userService.token);
    this.userService.removeUser();
    console.log(this.userService.token)
    this.checkLogin = false;
    this.cartService.cart = {
      product: <Array<Product>>[],
      totalPrice: 0
    };
    this.cartService.orderQuantities = [];
    this.router.navigate(['/']);
    
  }
}
