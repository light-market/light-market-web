import { Component, Input, OnInit } from '@angular/core';
import { FAQ } from 'src/app/models/faq.interface';

@Component({
  selector: 'app-single-faq',
  templateUrl: './single-faq.component.html',
  styleUrls: ['./single-faq.component.scss']
})
export class SingleFaqComponent implements OnInit {

  constructor() { }
  @Input() faq: FAQ;
  ngOnInit(): void {
  }

}
