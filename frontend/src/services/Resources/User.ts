import axios from 'axios';
import { User } from '../../models/User';
import baseRoute from '../baseRoute';

export const user = 'user/';
export const login = 'login';
export const logout = 'logout';

const UserService = {
    login: (userPayload: User) => axios({
       method: 'POST',
       url: `${baseRoute}${user}${login}`,
       data: {
            user: {
                firstName: userPayload.firstName,
                lastName: userPayload.lastName,
            },
       }, 
    }).then(response => {
        return response.data;
    }),
    logout: (userPayload: User) => axios({
        method: 'POST',
        url: `${baseRoute}${user}${logout}`,
        data: {
            user: userPayload,
        }, 
     }).then(response => {
         return response.data;
     }),
}

export default UserService;