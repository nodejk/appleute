import { JsonController, Get, QueryParam, Post, BodyParam } from 'routing-controllers';
import { Service } from 'typedi';
import ApiRequest from '../../../Models/ApiRequest';
import Product from '../Models/Product';

@JsonController(ApiRequest.contextPath + '/cart')
@Service()
class ApiStoreController {

    @Get('/detail')
    public async getCart(): Promise<any> {

    }

    @Post('/order')
    public async placeOrder(@BodyParam('cart') ): Promise<any> {
        
    }

    @Post('/add-product')
    public async addProduct(@BodyParam('product') product: Product): Promise<any> {
        
    }
}