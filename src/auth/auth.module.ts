import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserService } from '../user';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService, UserService],
    controllers: [AuthController],
})
export class AuthModule {}
