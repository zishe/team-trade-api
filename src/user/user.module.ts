import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { AuthService } from 'src/auth';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserResolver, AuthService],
})
export class UserModule {}
