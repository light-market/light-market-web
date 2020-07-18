import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.apiService.getCategories().subscribe((response: Category[]) => {
      this.categories = response;
    })
  }
}
