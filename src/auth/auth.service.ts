import { Injectable } from '@nestjs/common';
import { JsonWebTokenError, sign, verify } from 'jsonwebtoken';

import { UserDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

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
        const { email } = data;
        let response = {
            success: false,
            authData: { jwt: null, userId: null },
        };

        let user = await this.userService.findByEmail(email);
        if (!user) {
            user = await this.userService.createFormOAuth(data);
        }

        const userId = user.id;
        const payload = { id: userId };
        const jwt: string = sign(payload, process.env.SECRET, {});
        response = { success: true, authData: { jwt, userId } };

        return response;
    }

    // async createToken(user: { id: string }): Promise<{ token: string }> {
    //     const token: string = sign({ id: user.id }, process.env.SECRET, {});
    //     return { token };
    // }
}
