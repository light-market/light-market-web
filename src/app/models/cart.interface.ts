import { Product } from './product.interface';

export interface Cart {
    product: Product[];
    totalPrice: number;
    userId?: string;
    status?: string;
    date?: Date;
    deliveryDate?: Date;
    comments?: string[];
}