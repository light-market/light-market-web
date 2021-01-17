import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.scss']
})
export class CategoryControlComponent implements OnInit {
  message: string;
  isLoading = false;
  dtOptions: DataTables.Settings = {};
  categories: Category[] = []
  deletedItemId: string;
  editCategory: Category = {
    imageUrl: '',
    name: '',
    slag: ''
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.isLoading = true;
    this.api.getCategories().subscribe(res => {
      this.categories = res;
      this.isLoading = false;
    })
  }
  onEditCategory(form: NgForm) {
    this.api.editCategory(this.editCategory).subscribe(res => {
      this.message = res.message;
    })
  }
  onAddCategory(form: NgForm) {
    const category: Category = form.value;
    this.isLoading = true;
    this.api.addCategory(category).subscribe(res => {
      this.message = res.message;
      this.isLoading = false;
    })
  }
  setDeletedId(id) {
    this.deletedItemId = id;
  }
  setEditId(category: Category) {
    this.editCategory = null;
    this.editCategory = category;
  }
  onDeleteCategory(event) {
    this.isLoading = true;
    this.api.deleteCategory(this.deletedItemId).subscribe(res => {
      console.log(res)
      this.deletedItemId = null;
      this.isLoading = false;
    })
  }

}
