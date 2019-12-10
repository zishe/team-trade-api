import {
    Resolver,
    Query,
    Args,
    ResolveProperty,
    Parent,
    Mutation,
    Context,
} from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';

// import { AuthGuard } from '../shared/auth.gaurd';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { AuthService } from '../auth';

@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ) {}

    @Query()
    async users(@Args('page') page: number) {
        return await this.userService.findAll();
    }

    @Query()
    async user(@Args('username') username: string) {
        return await this.userService.findOne(username);
    }

    @Query()
    // @UseGuards(new AuthGuard())
    async whoami(@Context('user') user) {
        const { username } = user;
        return await this.userService.findOne(username);
    }

    @Mutation()
    login(
        @Args('info') info: any,
    ) {
        Logger.log(`login login`, 'Log');

        // const user: UserDTO = { username, password };
        // return await this.authService.login({
        //     email: info.profileObj.email,
        //     name: info.profileObj.name,
        //     gid: info.profileObj.googleId,
        //     token: info.accessToken,
        //     photo: info.profileObj.imageUrl,
        // });
        return { success: true, authData: { jwt: 'fds', userId: 11 } };
    }
}
