import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { ProductComponent } from '../components/product.component';
import {CommonModule} from "@angular/common";
import {BehaviorSubject, map, merge, switchMap} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ProductComponent, CommonModule, FormsModule],
})
export class HomePage {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  readonly categories$ = this.categoryService.get();
  readonly products$ = this.productService.get();

  readonly searchText$ = new BehaviorSubject('');
  readonly avlProductFilter$ = new BehaviorSubject(false);
  readonly categorySelected$ = new BehaviorSubject<null|number>(null);

  readonly avlProducts$ = merge(
    this.searchText$,
    this.avlProductFilter$,
    this.categorySelected$
  ).pipe(
    switchMap(() => {
      const searchText = this.searchText$.getValue().toLowerCase();
      const categoryId = this.categorySelected$.getValue();
      const avlFilter = this.avlProductFilter$.getValue();

      return this.products$.pipe(map((list) => {
        return list.filter((pItem) =>
          (pItem.name.toLowerCase().indexOf(searchText)!==-1 || pItem.description.toLowerCase().indexOf(searchText)!==-1)
          && (!avlFilter || avlFilter && pItem.isAvailable)
          && (!categoryId || categoryId && pItem.category.id===categoryId)
        )
      }))
    })
  );

  constructor() {}
}
