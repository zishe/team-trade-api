import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { User, UserService } from '../user';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService, UserService],
})
export class AuthModule {}
