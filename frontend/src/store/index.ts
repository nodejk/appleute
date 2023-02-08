import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { persistStore } from 'redux-persist';

import { User } from '../models/User';
import { Cart } from '../models/Cart';
import { Shop } from '../models/Shop';

export interface AppProps {
    userStore: User;
    cartStore: Cart;
    shopStore: Shop;
}

export const store = createStore(rootReducer);

persistStore(store);
