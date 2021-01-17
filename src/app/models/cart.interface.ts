import { Product } from './product.interface';

export interface Cart {
    id?: string;
    products: [{
        quantity: number,
        productID: Product
    }],
    totalPrice: number;
    userId?: string;
    status?: string;
    date?: Date;
    deliveryDate?: Date;
    comments?: string[];
    fullname?: string;
    address?: string;
    phone?: string;
}