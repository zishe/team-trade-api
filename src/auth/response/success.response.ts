import { Logger } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

import { User } from '../../user';
import { AuthResponse } from './auth.response';

export const SuccessResponse = (user: User): AuthResponse => {
    const userId = user.id;
    const payload = { id: userId };
    const jwt: string = sign(payload, process.env.SECRET, {});
    const response = { success: true, authData: { jwt, userId } };

    Logger.log(`response is ${response}`);
    return response;
};
