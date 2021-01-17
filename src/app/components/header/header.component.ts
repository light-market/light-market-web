import { Component, DoCheck } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
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
  constructor(private api: ApiService, private cartService: CartService, private router: Router, private userService: UserService) { }
  ngDoCheck(): void {
    if (this.userService.token) {
      this.checkLogin = true;
    }
  }

  ngOnInit(): void {
    this.api.setIPAPi().subscribe(res => {
      this.userService.ip = res.ip;
    }, err => {
      console.log('error happend' + err)
    })
    this.userService.checkLogged();
    if (this.userService.token) {
      this.checkLogin = true;
    }
  }

  logout() {
    this.userService.removeUser();
    this.checkLogin = false;
    this.router.navigate(['/']);
  }
}
