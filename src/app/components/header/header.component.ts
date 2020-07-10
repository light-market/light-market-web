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
      'link': '/items'
    },
    {
      'name': 'Cats',
      'link': '/items/cats'
    },
    {
      'name': 'Dogs',
      'link': '/items/dogs'
    },
    {
      'name': 'Birds',
      'link': '/items/birds'
    },
    {
      'name': 'Product',
      'link': '/items/products'
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
