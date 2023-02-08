import { combineReducers } from 'redux';
import userStore from './userReducer';
import cartStore from './cartReducer';
import shopStore from './shopReducer';

export const rootReducer = combineReducers({
    userStore,
    cartStore,
    shopStore,
});
