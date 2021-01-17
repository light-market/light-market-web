import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  loading = false;
  messageEdit: string;
  messageDelete: string;
  products = [];
  deletedItemId = '';
  dtOptions: DataTables.Settings = {};
  category: string;
  editedProduct: Product = {
    id: '',
    description: '',
    imageUrl: '',
    name: '',
    price: '',
    quantity: 0,
    secondPrice: ''
  };
  deleteMode = {
    id: 'deleteModal',
    message: 'Are You Sure Delete This Product'
  }
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  filter(form: NgForm) {
    this.products = [];
    this.category = form.value.filter;
    this.apiService.getProductByCategoyAdmin(this.category).subscribe(res => {
      this.products = res;

    }, err => {
      console.log(err.message);

    })


  }
  onSubmit(form: NgForm) {
    const product: Product = form.value;
    this.apiService.updateProduct(product).subscribe(res => {
      this.messageEdit = res.message;
    }, err => {
      this.messageEdit = err.message;
    })
  }
  onEditProduct(product: Product) {
    this.editedProduct = null;
    this.editedProduct = product;
  }
  onDeleteProduct(event, id) {
    this.apiService.deleteProduct(this.deletedItemId).subscribe(res => {
      this.messageDelete = res.message;
      this.products.splice(id, 1);
    }, err => {
      console.log(err.message)
      this.messageDelete = err.message;
    })
  }

}
