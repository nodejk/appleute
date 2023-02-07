import { Service } from 'typedi';

@Service()
class User {
    firstName: string;
    lastName: string;

    async getAllUsers(): Promise<any> {
        return Promise.resolve();
    }

    async login(): Promise<any> {
        return Promise.resolve();
    }
}

export default User;