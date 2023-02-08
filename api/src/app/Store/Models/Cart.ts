import { Service } from 'typedi';
import Product from './Product';

class Cart {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    async createOrder(): Promise<any> {
        return Promise.resolve();
    }

    async addProduct(product: Product) { 
        this.products.push(product);
    }
}

export default Cart;