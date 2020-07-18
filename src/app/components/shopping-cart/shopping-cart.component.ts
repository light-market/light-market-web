import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/models/cart.interface';
import { Quantities } from 'src/app/models/quantities.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart = {
    product: [],
    totalPrice: 0
  };
  quantities: Quantities[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
    this.quantities = this.cartService.orderQuantities;
  }

  addAmount(index: number, price: string) {
    this.quantities[index].amount = this.quantities[index].amount + 1;
    this.cart.totalPrice = this.cart.totalPrice + +price;
  }

  decreaseAmouunt(index: number, price: string) {
    this.quantities[index].amount = this.quantities[index].amount - 1;
    this.cart.totalPrice = this.cart.totalPrice - +price;
  }

  deleteItem(index: number) {
    this.cartService.deleteProductFromCart(index);
  }
}
