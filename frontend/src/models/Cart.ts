import { Product } from './Product';

export interface Cart {
    products: {
       product: Product,
       quantity: number, 
    }[];
}