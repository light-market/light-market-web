import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.scss']
})
export class MainControlComponent implements OnInit {
  pageTitle = {
    title : "Dashboard",
    font : "fas fa-tachometer-alt"
  };
  configs = [{
    title : "Product",
    color : "#ffb997",
    font : "fas fa-paw fa-2x",
    path : "/"
  },
  {
    title : "Categories",
    color : "#f67e7d",
    font : "far fa-clone fa-2x",
    path : "/"
  },
  {
    title : "Questions",
    color : "#843b62",
    font : "fas fa-question fa-2x",
    path : "/"
  },
  {
    title : "Stuff",
    color : "#621940",
    font : "fas fa-users fa-2x",
    path : "/"
  },
  {
    title : "Orders",
    color : "#480048",
    font : "fas fa-shopping-cart fa-2x",
    path : "/"
  },
  {
    title : "Support",
    color : "#0B022C",
    font : "fa fa-question fa-2x",
    path : "/"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
