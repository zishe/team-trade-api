import { Logger } from '@nestjs/common';

import { AuthResponse } from './auth.response';

export const ErrorResponse = (error: any): AuthResponse => {
    const response = {
        success: false,
        error: error && error.message,
        authData: { jwt: null, userId: null },
    } as AuthResponse;

    Logger.error(`response is ${response}`);

    return response;
};
