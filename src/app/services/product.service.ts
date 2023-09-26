import { Injectable } from '@angular/core';
import { Product } from '../shared/app.const';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  get(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Product 1',
        category: { id: 1, name: 'Category 1' },
        description: 'Description 1',
        isAvailable: true,
      },
      {
        id: 2,
        name: 'Product 2',
        category: { id: 1, name: 'Category 1' },
        description: 'Description 2',
        isAvailable: true,
      },
      {
        id: 3,
        name: 'Product 3',
        category: { id: 2, name: 'Category 2' },
        description: 'Description 3',
        isAvailable: false,
      },
      {
        id: 4,
        name: 'Product 4',
        category: { id: 3, name: 'Category 3' },
        description: 'Description 4',
        isAvailable: false,
      },
    ]);
  }
}
