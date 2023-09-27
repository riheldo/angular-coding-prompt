import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/app.const";
import {IonicModule} from "@ionic/angular";

/**
 * Create a product component that has intuitive UI and UX.
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor() {}

  ngOnInit() {}
}
