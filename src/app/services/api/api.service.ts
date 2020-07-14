import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  getCategories(){
    const categories =[]
    return of(categories);
  }

  getProductByCategoy(category : string, offset : number=0, limit :number =30){
    const productStore = {
      dogs : [],
      cats : [],
    }
    const products =productStore[category ] || []
    return of(products);
  }
}
