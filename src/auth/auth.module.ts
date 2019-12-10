import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { User, UserService } from '../user';
import { AuthResolver } from './auth.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService, UserService, AuthResolver],
})
export class AuthModule {}
