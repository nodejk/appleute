const ADD: string = 'ADD';
const GET: string = 'GET';
const POST: string = 'POST';
const LOGIN: string = 'LOGIN';

const CART: string = 'CART';
const PRODUCT: string = 'PRODUCT';
const USER: string = 'USER';

export const ADD_PRODUCT_TO_CART: string = `${CART}/${PRODUCT}/${POST}`;
export const GET_CART: string = `${CART}/${GET}`;
export const PLACE_CART_ORDER: string = `${CART}/${POST}`

export const GET_USERS = `${USER}/${GET}`;
export const LOGIN_USER = `${USER}/${LOGIN}`;
