export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  outerLink?: string;
  isPublic: boolean;
  images?: string[];
  createdAt: number;
  updatedAt: number;
}