import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() itemSelected = new EventEmitter<void>();
  isloading = false;
  constructor() { }

  ngOnInit(): void {
  }
  addToCard() {
    this.itemSelected.emit();
    this.isloading = true
    setTimeout(() => {
      this.isloading = false;
    }
      , 3000);
  }
}
