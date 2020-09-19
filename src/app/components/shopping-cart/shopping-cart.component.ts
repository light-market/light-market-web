import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/models/cart.interface';
import { Quantities } from 'src/app/models/quantities.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

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
  quantities: Quantities[]=[] ;
  message : string;

  constructor(
    private cartService: CartService,
    private api :ApiService,
    private router : Router,
    ){ }

  ngOnInit(): void {
    this.cartService.getCartFromApi();
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
    this.quantities = this.cartService.orderQuantities;
  }

  addAmount(index: number, price: string) {
    this.quantities[index].quantity = this.quantities[index].quantity + 1;
    this.cart.totalPrice = this.cart.totalPrice + +price;
  }

  decreaseAmouunt(index: number, price: string) {
    this.quantities[index].quantity = this.quantities[index].quantity - 1;
    this.cart.totalPrice = this.cart.totalPrice - +price;
  }

  deleteItem(index: number) {
    this.cartService.deleteProductFromCart(index);
  }
  saveCart(){
    //console.log('1236')
    this.api.apiSaveToCart(this.quantities,this.cart.totalPrice).subscribe(response=>{
      console.log(response);
    },error=>{
      this.router.navigate(['auth'],{queryParams:{last : 'shopping-cart'}});
      
    });
  }
}
