import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
