import { Product } from '../../models/Product';
import { User } from '../../models/User';
import { Shop } from '../../models/Shop';
import * as ActionTypes from './actionTypes';

export interface action {
    type: string,
    payload: any,
}

export function addProductToCart(payload: Product) {
    return {type: {type: ActionTypes.ADD_PRODUCT_TO_CART, payload}};
}

export function removeProductFromCart(payload: Product) {
    return {type: {type: ActionTypes.REMOVE_PRODUCT_FROM_CART, payload}};
}

export function getCart() {
    return {type: {type: ActionTypes.GET_CART}};
}

export function placeCartOrder() {
    return {type: {type: ActionTypes.PLACE_CART_ORDER}};
}

export function getUsers() {
    return {type: {type: ActionTypes.GET_USERS}};
}

export function loginUser() {
    return {type: {type: ActionTypes.LOGIN_USER}};
}

export function setAllProducts(payload: any) {
    return {type: {type: ActionTypes.GET_ALL_PRODUCTS, payload}};
}
