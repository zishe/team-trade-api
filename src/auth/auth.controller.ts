import { Controller, Post, Body, Logger, HttpStatus, Get } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/user.dto';
import { RequestContext } from 'src/core/context/request-context';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ title: 'Is authenticated' })
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST })
    @Get('/authenticated')
    async authenticated(): Promise<boolean> {
        const token = RequestContext.currentToken();
        return this.authService.isAuthenticated(token);
    }

    @ApiOperation({ title: 'Login' })
    @ApiResponse({
        status: HttpStatus.ACCEPTED,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description:
            'Invalid input',
    })
    @Post('login')
    login(@Body() data: UserDTO) {
        Logger.log(data, 'Post data');
        return this.authService.login(data);
    }
}
