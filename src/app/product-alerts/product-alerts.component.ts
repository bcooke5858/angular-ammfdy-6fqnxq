import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumberLiteralType } from 'typescript/lib/tsserverlibrary';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  @Input() count!: Number;
  @Output() notify = new EventEmitter();
  @Output() calculationNotify = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

}
