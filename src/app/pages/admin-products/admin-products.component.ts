import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  configs = [{
    title: "AddProduct",
    color: "#843b62",
    font: "fas fa-plus fa-2x",
    path: "add-product"
  }, {
    title: "EditProduct",
    color: "#621940",
    font: "fas fa-edit fa-2x",
    path: "edit-product"
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToDashboard() {
    this.router.navigate(['/dashboard'])
  }

}
