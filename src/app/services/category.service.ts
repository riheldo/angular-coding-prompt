import { Injectable } from '@angular/core';
import { Category } from '../shared/app.const';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor() {}

  public get(): Observable<Category[]> {
    return of([
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
    ]);
  }
}
