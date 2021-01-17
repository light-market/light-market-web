import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  message = null;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const product: Product = {
      id: null,
      name: form.value.name,
      description: form.value.description,
      imageUrl: form.value.imageUrl,
      quantity: form.value.quantity,
      price: form.value.price,
      secondPrice: form.value.oldPrice
    }
    this.apiService.addProduct(product, form.value.type).subscribe(res => {
      this.message = res.message;
      form.reset();
    }, err => {
      this.message = err.message;
      this.router.navigate(['/categories']);

    })

  }
  onHideMessage() {
    this.message = null;
  }

}
