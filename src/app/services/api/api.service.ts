import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Category } from 'src/app/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  getCategories() {
    const categories: Category[] = [{
      name: 'Cats',
      imageUrl: 'https://zjf683hopnivfq5d12xaooxr-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/GettyImages-1199242002-1-1480x833.jpg',
      slag: 'cats'
    },
    {
      name: 'Dogs',
      imageUrl: 'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
      slag: 'dogs'
    },
    {
      name: 'Birds',
      imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg',
      slag: 'birds'
    },
    {
      name: 'Products',
      imageUrl: 'http://imaginepetproducts.ca/img/imagine-products.png',
      slag: 'products'
    }
    ]
    return of(categories);
  }

  getProductByCategoy(category: string, offset: number = 0, limit: number = 30) {
    const productStore = {
      dogs: [{
        id: '1',
        name: 'Pobbzz',
        description: 'this is pubby from Germany and have good healthy',
        imageUrl: 'https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg',
        quantity: 1,
        price: '2200',
        secondPrice: '2500'
      }],
      cats: [
        {
          id: '2',
          name: 'catty',
          description: 'this is Cherazi from France and have good healthy',
          imageUrl: 'https://www.catsbreeder.com/wp-content/uploads/2019/04/shirazi-cat-661x420.jpg',
          quantity: 1,
          price: '1400',
          secondPrice: '1700'
        }
      ],
      birds: [],
      products: [{
        id: '3',
        name: 'Cat Food',
        description: 'this is Tasty cat food',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0227/9089/7739/products/whiskas-1-cat-food-tin-salmon-in-jelly-390g-606032_grande.jpg?v=1587243376',
        quantity: 8,
        price: '20',
        secondPrice: '50'
      },
      ]
    }
    const products = productStore[category] || []
    return of(products);
  }
}
