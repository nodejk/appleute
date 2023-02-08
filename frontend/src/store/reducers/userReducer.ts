import { Action } from 'redux';

import { User } from '../../models/User';
import { action } from '../actions';
import * as ActionTypes from '../actions/actionTypes';

const existingToken = localStorage.getItem('token');
const existingUser: User = JSON.parse(localStorage.getItem('user') ?? '{}');

const intialState: User = {
    firstName: existingUser.firstName ?? null,
    lastName: existingUser.lastName ?? null,
    isLoggedIn: existingToken === null ? false : true,
};

export const userStore = (state = intialState, action: action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            return loginUser(state);
        case ActionTypes.LOGOUT_USER:
            return logoutUser(state);
        default:
            return state;
    }
};

function loginUser(state: User): User {
    return { ...state, isLoggedIn: true };
}

function logoutUser(state: User): User {
    return { ...state, isLoggedIn: false };
}

export default (state: any, action: Action<{ type: string; payload: any }>) =>
    userStore(state, action.type);
