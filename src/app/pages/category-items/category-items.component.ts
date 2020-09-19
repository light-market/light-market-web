import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss']
})
export class CategoryItemsComponent implements OnInit {
  category: string;
  products: Product[] = [];
  message: string = '';
  timer = false;
  offset: number;
  limit: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCategory();
    //this.getProducts(this.category);
  }
  //to get category from name 
  getCategory() {
    this.category = this.route.snapshot.params['category'];
    this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.getProducts(this.category);
    })
  }
  //get category products
  getProducts(category: string) {
    this.apiService.getProductByCategoy(category).subscribe((response: Product[]) => {
      console.log(response);
      this.products = response;
    });
  }
  AddProductToCard(product: Product) {
    this.cartService.addProductToCart(product);
  }

}
