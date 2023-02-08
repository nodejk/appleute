import { Service } from 'typedi';
import * as jwt from "jsonwebtoken";
import { JsonController, Get, QueryParam, Post, BodyParam } from 'routing-controllers';
import { JWT_SECRET } from "../../../utils/jwtSecret";

class User {
    firstName: string;
    lastName: string;

    async getAllUsers(): Promise<any> {
        return Promise.resolve();
    }

    public async login(firstName: string): Promise<any> {
        const token = jwt.sign({ username: firstName}, JWT_SECRET);
        return { token: token };
    }
}

export default User;