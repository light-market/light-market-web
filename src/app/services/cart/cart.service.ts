import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart.interface';
import { Product } from 'src/app/models/product.interface';
import { Quantities } from 'src/app/models/quantities.interface'
import { ApiService } from '../api/api.service';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    product: <Array<Product>>[],
    totalPrice: 0
  };
  orderQuantities: Quantities[] = [];

  constructor(private api : ApiService) { }

  getCart(): Cart {
    return this.cart;
  }
  /*
  this function take on arg the product it self first check if the product in shopping cart
  to avoid add it multiple time in my cart so i loop in the cart product to find if the product the or not
  if no so add it in cart and increase total price
  and push id and intial quantity in order quantities
  */

  addProductToCart(product: Product) : string{
    // for (let i = 0; i < this.cart.product.length; i++) {
    //   if (product.id === this.cart.product[i].id) {
    //     return "This Item Added Before";
    //   }
    // }
    if (this.cart.product.findIndex(x=> x.id === product.id)>= 0){
      return "This Item Added Before";
      
    }else {

      
    this.cart.product.push(product);
    this.cart.totalPrice = this.cart.totalPrice + +product.price;
    this.orderQuantities.push({
      productID: product.id,
      quantity: 1
    })
    return "Item Is Added To Cart";

    }

  }

  deleteProductFromCart(index: number) {
    const price = +this.cart.product[index].price
    const quantity = this.orderQuantities[index].quantity;
    this.cart.totalPrice = this.cart.totalPrice - (price * quantity);
    this.cart.product.splice(index, 1);
    this.orderQuantities.splice(index, 1);
  }
  getCartFromApi(){
    this.api.getCart().subscribe(response =>{
      this.cart.product=response.cart;
      this.cart.totalPrice = response.totalPrice;
      this.orderQuantities=response.quantities;
    },err=>{
      console.log('there is error in retieving data');
    })
  }
}
