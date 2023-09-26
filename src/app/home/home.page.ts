import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  // private productService = inject(ProductService);
  // private categoryService = inject(CategoryService);

  constructor() {}
}
