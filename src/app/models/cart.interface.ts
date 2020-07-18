import { Product } from './product.interface';

export interface Cart {
    product: Product[];
    totalPrice: number;
}