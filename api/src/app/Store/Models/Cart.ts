import { Service } from 'typedi';
import Product from './Product';

@Service()
class Cart {
    private products: Product[];

    async getProductsByUser(): Promise<any> {
        return Promise.resolve();
    }

    async createOrder(): Promise<any> {
        return Promise.resolve();
    }
    

}

export default Cart;