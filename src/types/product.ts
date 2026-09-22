export interface ProductImage {
  role: string;
  path: string;
  note?: string;
  order?: number;
}

export interface ProductSpec {
  id: string;
  size: string;
  label: string;
  dimensions: number[];
  sheets_per_box: number;
  barcode: string;
  images: ProductImage[];
}

export interface ParsedSpec {
  size_or_type: string;
  capacity_or_dim: string;
  quantity: string;
}

export interface Product {
  id: string;
  categoryId: string;
  subcategoryId: string;
  name: string;
  originalName?: string;
  images: ProductImage[];
  specs: ProductSpec[];
  shared_images: ProductImage[];
  parsedSpec: ParsedSpec | null;
}

export interface Subcategory {
  id: string;
  name: string;
  cover: string;
}

export interface Category {
  id: string;
  name: string;
  cover: string;
  subcategories: Subcategory[];
}
