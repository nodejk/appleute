import axios from 'axios';
import baseRoute from '../baseRoute';
import {Cart} from '../../models/Cart';
import {Product} from '../../models/Product';

export const store = 'store/';
export const order = 'order';
export const addProduct = 'add-product';

const CartService = {
    order: (cart: Cart) => axios({
       method: 'POST',
       url: `${baseRoute}${store}${order}`,
       data: {
        products: cart.products,
       }, 
    }).then(response => {
        return response.data;
    }),
    addProduct: (product: Product) => axios({
        method: 'POST',
        url: `${baseRoute}${store}${addProduct}`,
        data: {
         product: product,
        }, 
     }).then(response => {
         return response.data;
     }),
}

export default CartService;