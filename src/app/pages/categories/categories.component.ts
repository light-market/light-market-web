import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [{
    'name': 'Cats',
    'imageUrl': 'https://zjf683hopnivfq5d12xaooxr-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/GettyImages-1199242002-1-1480x833.jpg',
    'link': 'cats'
  },
  {
    'name': 'Dogs',
    'imageUrl': 'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
    'link': 'dogs'
  },
  {
    'name': 'Birds',
    'imageUrl': 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg',
    'link': 'birds'
  },
  {
    'name': 'Products',
    'imageUrl': 'http://imaginepetproducts.ca/img/imagine-products.png',
    'link': 'products'
  }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
