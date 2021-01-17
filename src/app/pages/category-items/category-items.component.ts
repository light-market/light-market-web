import { Component, OnInit, OnDestroy, DoCheck, HostListener } from '@angular/core';
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
  message: any = null;
  isLoading = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.category = this.route.snapshot.params['category'];
    this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.getProducts(this.category);
    })
  }
  //get category products
  getProducts(category: string) {
    this.isLoading = true;
    this.apiService.getProductByCategoy(category).subscribe((response: Product[]) => {
      this.products = response;
      this.isLoading = false;
    });
  }
  AddProductToCard(product: Product) {
    this.apiService.addProductToCart(product).subscribe(res => {
      this.message = res.message;
      alert('The Product added to cart')
    }, err => {
      console.log(err)
    })
  }

}
