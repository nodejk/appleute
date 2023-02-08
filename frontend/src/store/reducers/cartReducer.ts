import { Action } from "redux";

import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';

import {action} from '../actions';
import * as ActionTypes from '../actions/actionTypes';

const initialState: Cart = {
    products: [],
}

export const cartStore = (state = initialState, action: action) => {
    switch(action.type) {
        case ActionTypes.ADD_PRODUCT_TO_CART: return addProductToCart(state, action.payload);
        case ActionTypes.REMOVE_PRODUCT_FROM_CART: return removeProductFromCart(state, action.payload);
        default: return state;
    }
}

function addProductToCart(state: Cart, payload: Product): Cart {
    const productIndexInCart = state.products.findIndex(cartProduct => {
        if (cartProduct.product.id === payload.id) return true;
        return false;
    });

    if (productIndexInCart === -1) {
        return {products: [...state.products, {product: payload, quantity: 1}]}
    }

    const incrementedQuantity = state.products[productIndexInCart].quantity + 1;
    state.products[productIndexInCart] = {...state.products[productIndexInCart], quantity: incrementedQuantity };
    console.log("cart-->", state);
    return state;
}

function removeProductFromCart(state: Cart, payload: Product): Cart {
    const productIndexInCart = state.products.findIndex(cartProduct => {
        if (cartProduct.product.id === payload.id) return true;
        return false;
    });

    const quantity = state.products[productIndexInCart].quantity;

    if (quantity === 1) {
        const productsLeft = state.products.filter(cartProduct => {
            if (cartProduct.product.id !== payload.id) return true;
            return false;
        });

        return {products: productsLeft}
    }

    state.products[productIndexInCart] = {...state.products[productIndexInCart], quantity: quantity - 1 };

    return state;
}

export default (state: any, action: Action<{ type: string, payload: any }>) => cartStore(state, action.type)