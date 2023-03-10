import { JsonController, Get, Post, BodyParam } from 'routing-controllers';
import { Service } from 'typedi';
import Product from '../Models/Product';
import Cart from '../Models/Cart';
import CartProduct from '../Models/CartProduct';

@JsonController('/store')
@Service()
export class ApiStoreController {
    private cart: Cart;

    constructor() {
        this.cart = new Cart();
    }

    @Get('/detail')
    public async getCart(): Promise<any> {
        return '';
    }

    @Post('/order')
    public async placeOrder(
        @BodyParam('products') products: CartProduct[],
    ): Promise<any> {
        return 'Order Successful';
    }

    @Post('/add-product')
    public async addProduct(
        @BodyParam('product') product: Product,
    ): Promise<any> {
        this.cart.addProduct(product);
        return 'Product Added';
    }

    @Get('/products')
    public async getProducts(): Promise<Product[]> {
        const product = new Product();
        return product.getAll();
    }
}
