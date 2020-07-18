import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart.interface';
import { Product } from 'src/app/models/product.interface';
import { Quantities } from 'src/app/models/quantities.interface'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    product: [],
    totalPrice: 0
  };
  orderQuantities: Quantities[] = [];

  constructor() { }

  getCart() {
    return this.cart;
  }

  addProductToCart(product: Product) {
    for (let i = 0; i < this.cart.product.length; i++) {
      if (product.id === this.cart.product[i].id) {
        return "This Item Added Before";
      }
    }
    this.cart.product.push(product);
    this.cart.totalPrice = this.cart.totalPrice + +product.price;
    this.orderQuantities.push({
      id: product.id,
      amount: 1
    })
    return "Item Is Added To Cart";
  }

  deleteProductFromCart(index: number) {
    const price = +this.cart.product[index].price
    const quantity = this.orderQuantities[index].amount;
    this.cart.totalPrice = this.cart.totalPrice - (price * quantity);
    this.cart.product.splice(index, 1);
    this.orderQuantities.splice(index, 1);
  }
}
