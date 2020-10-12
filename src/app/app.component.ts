import { Component } from '@angular/core';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'light-market-web';
  constructor(private cartService : CartService){}
  ngOnInit(){
    /*if (this.cartService.cart.totalPrice === 0) {
      this.cartService.getCartFromApi();
    }*/
  }
}
