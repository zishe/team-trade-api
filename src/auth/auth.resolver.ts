import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserService } from 'src/user';
import { GoogleWebLogin } from './input/login.input';

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService,
        private userService: UserService,
    ) {}

    @Query()
    // @UseGuards(new AuthGuard())
    async whoami(@Context('auth') auth) {
        const { authname } = auth;
        return await this.userService.findOne(authname);
    }

    @Mutation()
    async login(@Args('info') info: GoogleWebLogin) {
        return await this.authService.login({
            email: info.profileObj.email,
            name: info.profileObj.name,
            gid: info.profileObj.googleId,
            token: info.accessToken,
            photo: info.profileObj.imageUrl,
        });
    }
}
