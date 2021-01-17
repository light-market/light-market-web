import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ApiService } from '../api/api.service';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private api: ApiService) { }

  /*
  this function take on arg the product it self first check if the product in shopping cart
  to avoid add it multiple time in my cart so i loop in the cart product to find if the product the or not
  if no so add it in cart and increase total price
  and push id and intial quantity in order quantities
  */

  addProductToCart(product: Product) {
  }

  deleteProductFromCart(index: number) {

  }
  getCartFromApi() {

  }
}
