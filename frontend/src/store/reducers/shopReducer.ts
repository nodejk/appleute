import { Shop } from "../../models/Shop";
import {action} from '../actions';
import * as ActionTypes from '../actions/actionTypes';
import { Product } from "../../models/Product";
import { Action } from "redux";

const initialState: Shop = {
    products: []
}

export const shopStore = (state = initialState, action: action) => {
    switch(action.type) {
        case ActionTypes.GET_ALL_PRODUCTS: return getAllProducts(state, action.payload);
        default: return state;
    }
}

function getAllProducts(state: Shop, payload: Product[]): Shop {
    return {products: payload}
}

export default (state: any, action: Action<{type: string, payload: any}>) => shopStore(state, action.type)