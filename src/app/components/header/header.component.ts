import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

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
  constructor( private api :ApiService) { }
  ngDoCheck(): void {
    if(localStorage.getItem('token')){
      this.checkLogin=true;
      }
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
    this.checkLogin=true;
    }

}

logout(){
  localStorage.removeItem('token');
  this.checkLogin=false;
}
}
