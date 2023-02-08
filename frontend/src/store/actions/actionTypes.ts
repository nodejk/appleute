const ADD: string = 'ADD';
const GET: string = 'GET';
const REMOVE: string = 'REMOVE';
const POST: string = 'POST';
const LOGIN: string = 'LOGIN';
const LOGOUT: string = 'LOGOUT';

const CART: string = 'CART';
const PRODUCT: string = 'PRODUCT';
const USER: string = 'USER';
const STORE: string = 'STORE';

export const ADD_PRODUCT_TO_CART: string = `${CART}/${PRODUCT}/${POST}`;
export const REMOVE_PRODUCT_FROM_CART: string = `${CART}/${REMOVE}`;
export const GET_CART: string = `${CART}/${GET}`;
export const PLACE_CART_ORDER: string = `${CART}/${POST}`;

export const GET_USERS = `${USER}/${GET}`;
export const LOGIN_USER = `${USER}/${LOGIN}`;
export const LOGOUT_USER = `${USER}/${LOGOUT}`;

export const GET_ALL_PRODUCTS = `${STORE}/${PRODUCT}/${GET}`;
