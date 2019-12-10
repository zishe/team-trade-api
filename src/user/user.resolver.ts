import { Resolver, Query, Args, Context } from '@nestjs/graphql';

import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

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
}
