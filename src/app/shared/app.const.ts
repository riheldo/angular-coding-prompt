export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  isAvailable: boolean;
}

export interface Category {
  id: number;
  name: string;
}
