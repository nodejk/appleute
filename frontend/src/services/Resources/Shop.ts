import axios from 'axios';

import baseRoute from '../baseRoute';

export const shop = 'store/products';

const Shop = {
    getAllProducts: () =>
        axios({
            method: 'GET',
            url: `${baseRoute}${shop}`,
        }).then((response) => {
            return response.data;
        }),
};

export default Shop;
