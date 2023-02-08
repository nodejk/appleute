import User from '../Models/User';
import {
    JsonController,
    Get,
    QueryParam,
    Post,
    BodyParam,
} from 'routing-controllers';
import { Service } from 'typedi';

@JsonController('/user')
@Service()
class ApiUserController {
    @Post('/login')
    public async login(
        @BodyParam('firstName') firstName: string,
    ): Promise<any> {
        const user = new User();
        return user.login(firstName);
    }

    @Post('/logout')
    public async logout(): Promise<any> {
        return 'here';
    }
}

export default ApiUserController;
