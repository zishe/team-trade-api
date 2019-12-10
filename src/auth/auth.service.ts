import { Injectable, Logger } from '@nestjs/common';
import { JsonWebTokenError, verify } from 'jsonwebtoken';

import { UserDTO } from '../user/user.dto';
import { UserService } from '../user/user.service';
import { SuccessResponse } from './response/success.response';
import { ErrorResponse } from './response/error.response';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async isAuthenticated(token: string): Promise<boolean> {
        try {
            const { id } = verify(token, process.env.SECRET) as {
                id: string;
            };
            return this.userService.checkIfExists(id);
        } catch (err) {
            if (err instanceof JsonWebTokenError) {
                return false;
            } else {
                throw err;
            }
        }
    }

    async login(data: UserDTO) {
        Logger.log(`login with email ${data.email}`, 'Auth');

        try {
            const user = await this.userService.findOrCreate(data);
            return SuccessResponse(user);
        } catch (error) {
            return ErrorResponse(error);
        }
    }

    // async createToken(user: { id: string }): Promise<{ token: string }> {
    //     const token: string = sign({ id: user.id }, process.env.SECRET, {});
    //     return { token };
    // }
}
