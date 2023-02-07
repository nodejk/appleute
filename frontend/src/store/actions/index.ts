import { Product } from '../../models/Product';
import { User } from '../../models/User';
import * as ActionTypes from './actionTypes';

export interface action {
    type: string,
    payload: any,
}

export function addProductToCart(payload: {product: Product}) {
    return {type: ActionTypes.ADD_PRODUCT_TO_CART, payload};
}

export function getCart() {
    return {type: ActionTypes.GET_CART};
}

export function placeCartOrder() {
    return {type: ActionTypes.PLACE_CART_ORDER};
}

export function getUsers() {
    return {type: ActionTypes.GET_USERS};
}

export function loginUser(payload: {user: User}) {
    return {type: ActionTypes.LOGIN_USER, payload};
}
